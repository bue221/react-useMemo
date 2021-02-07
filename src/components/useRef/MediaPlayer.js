import React, { useRef, useState } from "react";

const MediaPlayer = () => {
  const videoRef = useRef();
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    setPlay(!play);
    if (play) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div>
      <h1>Media player</h1>
      <video width="400" ref={videoRef} onClick={handlePlay}>
        <source
          src="https://vod-progressive.akamaized.net/exp=1612681555~acl=%2A%2F401483985.mp4%2A~hmac=dda5229fb7b641410eb2dc814bac216957d46fdb642a0fa1272fb870a9af73a7/vimeo-prod-skyfire-std-us/01/2130/5/135653517/401483985.mp4?filename=World+-+2.mp4"
          type="video/mp4"
        />
      </video>
      <button onClick={handlePlay}>{play ? "Play" : "Pause"}</button>
    </div>
  );
};

export default MediaPlayer;
