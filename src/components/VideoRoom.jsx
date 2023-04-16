
import React, { useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { VideoPlayer } from "./VideoPlayer";

const APP_ID='b29ce293ec004e86b3831fdd136551d9';
const TOKEN='007eJxTYDj8eZ7zd6Xk+MRc78/9D4pvyH5KE4uOaVT89PR149HYT0wKDElGlsmpRpbGqckGBiapFmZJxhbGhmkpKYbGZqamhimWT39ZpTQEMjIcY/vNxMgAgSA+M0N5ShYDAwDXByF/';
const CHANNEL='wdj';


const client =AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8',
});

export const VideoRoom = () => {
  
  const [users ,setUsers] =useState([]);
  const [localTracks,setLocalTracks] =useState([]);

  const handleUserJoined =async (user,mediaType) => {
    await client.subscribe(user,mediaType);

    if(mediaType === 'video')
    {
      setUsers((previousUsers) => [...previousUsers, user]);
    }

    if(mediaType === 'audio')
    {
       user.audioTrack.play();
    }
  };

  const handleUserLeft = (user) => {
    setUsers((previousUsers) => 
    previousUsers.filter((u) => u.uid !== user.uid)
    );
  };


  useEffect(() => {
   client.on('user-published',handleUserJoined);
   client.on('user-left',handleUserLeft);

   client.join(APP_ID,CHANNEL,TOKEN,null)
   .then((uid) =>
   Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(),uid]
  )).then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        setUsers((previousUsers) => [
          ...previousUsers,
          {
            uid,
            videoTrack,
            audioTrack,
          },
        ]);
        client.publish(tracks);
      });

   return () => {
  
    for (let localTrack of localTracks) {
      localTrack.stop();
      localTrack.close();
    }
    client.off('user-published', handleUserJoined);
    client.off('user-left', handleUserLeft);

    client.join(APP_ID,CHANNEL,TOKEN,null)
    .then((uid) =>
    Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(),uid]
   )).then(([tracks, uid]) => {
         const [audioTrack, videoTrack] = tracks;
         client.unpublish(tracks);
       });
  };
}, []);

  return (
    <div style={{display: 'flex',justifyContent: 'center'}}>
      <div 
      style={{display: 'grid',
      gridTemplateColumns: 'repeat(2,200px)'
      }}>
      {users.map((user) =>(
       <VideoPlayer key={user.uid} user={user} />
        ))
      }
      </div>
    </div>
  );
}