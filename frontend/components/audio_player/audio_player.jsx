import React, { useState } from "react";
import Waveform from "./Waveform";

export default function AudioPlayer(props) {

    return (
        <div className="waveform-component">
            <Waveform 
            url={props.song.audio_url} 
            />
            <br />
        </div>
    );
}
