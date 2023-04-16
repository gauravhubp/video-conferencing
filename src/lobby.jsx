
import { textAlign } from "@mui/system";
import React ,{ useState } from "react";
import { VideoRoom } from "./components/VideoRoom";


function Lobby() {
    
    const [joined,setJoined] =useState(false);
    
    return (
      <div className="App">
        <header className="lobby">
          LOBBY
        </header>
          <div class="joindiv">
        {!joined && (<button class="join" onClick={() => setJoined(true)}>Join Room</button>)}
        </div>
         {joined && (<VideoRoom />)}
      </div>
    );
  }
  
  export default Lobby;
  