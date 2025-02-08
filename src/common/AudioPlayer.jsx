import React, {  } from "react";
import Profile from "../assets/profile.jpg";
function AudioPlayer() {
  const audioRef = React.createRef();
  return (
    <div
      style={{ backgroundColor: "#CCC1DA", width: "100%" }}
      className=" d-flex gap-4 w-100 py-2"
    >
      <audio
        ref={audioRef}
        controls
        style={{ backgroundColor: "#CCC1DA", width: "100%" }}
      >
        <source src="your-audio-file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div
        style={{
          height: "48px",
          width: "48px",
          aspectRatio: 1 / 4,
          borderRadius: "50%",
          objectPosition: "contain",
        }}
      >
        <img
          src={Profile}
          alt=""
          style={{
            height: "42px",
            width: "42px",
            aspectRatio: 1 / 4,
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
