import "plyr/dist/plyr.css";
import Plyr from "plyr";
import { useEffect } from "react";
import eventBus from "../utils/EventBus";
function Video(props) {
  let player;
  useEffect(() => {
    player = new Plyr("#player");
    console.log(player);
    player.on("play", () => {});
    eventBus.on("Blob_created",(data)=>player.source=data)
  }, []);
  
  return (
    <div className="App">
      <video
      	style={{"--plyr-color-main": "#7ED318", "height":"800px", "margin-left":"50px"}}
        id="player"
        playsInline
        controls
        data-poster="/path/to/poster.jpg"
      ></video>
    </div>
  );
}


export default Video;
