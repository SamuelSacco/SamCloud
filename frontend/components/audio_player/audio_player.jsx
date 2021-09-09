import React, { useState } from "react";
import Waveform from "./Waveform";

export default function AudioPlayer(props) {

    return (
        <div className="waveform-component">
            <Waveform 
            songAudioObject={props.songAudioObject}
            song={props.song}
            url={props.song.audio_url} 
            // isPlaying={props.isPlaying}
            />
            <br />
        </div>
    );
}
