import React, { useEffect, useRef } from "react";

export const VideoPlayer = ({user}) => {

const ref= useRef();

    useEffect(() => {
        user.videoTrack.play(ref.current)
    },[]);

    return (
        <div>
            
            <div class="call" ref={ref} style={{width: '200px',height: '200px',margin: '8px'}}>

            </div>
        </div>
    )

    
}