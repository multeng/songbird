import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "./player.css";
import "react-h5-audio-player/lib/styles.css";

const Player = ({ song }) => (
  <AudioPlayer
    src={song}
    showJumpControls={false}
    customAdditionalControls={[]}
    autoPlayAfterSrcChange={false}
  />
);

export default Player;
