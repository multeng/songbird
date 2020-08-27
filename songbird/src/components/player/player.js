import React, { useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "./player.css";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ song, answered }) => {
  let ref = useRef();
  useEffect(() => {
    ref.audio.current.pause();
  }, [answered]);

  return (
    <AudioPlayer
      src={song}
      showJumpControls={false}
      customAdditionalControls={[]}
      autoPlayAfterSrcChange={false}
      ref={(elem) => (ref = elem)}
    />
  );
};

export default Player;
