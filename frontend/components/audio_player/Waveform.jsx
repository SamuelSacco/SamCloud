import React, { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = ref => ({
    container: ref,
    waveColor: "#eee",
    progressColor: "OrangeRed",
    cursorColor: "OrangeRed",
    barWidth: 2,
    barRadius: 3,
    responsive: true,
    height: 150,
    normalize: true,

    partialRender: true
});

export default function Waveform(props) {
    const url = props.url
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [playing, setPlay] = useState(false);
    // this.state = {
    //  playing: false
    // }
    // setPlay(banana) = this.setState({playing: (banana)})
    const [volume, setVolume] = useState(0.5);

    // makes WaveSurfer instance whenever the url changes/ mount
    useEffect(() => {
        setPlay(false);

        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);

        wavesurfer.current.load(url);

        wavesurfer.current.on("ready", function () {
            // setPlay(true) = this.setState({playing: true})

            // make sure object stillavailable when file loaded
            // checks if file is still available
            if (wavesurfer.current) {
                wavesurfer.current.setVolume(volume);
                setVolume(volume);
            }
        });

        // deletes shit
        return () => wavesurfer.current.destroy();
    }, [url]);

    const handlePlayPause = () => {
        setPlay(!playing);
        wavesurfer.current.playPause();
    };

    const onVolumeChange = e => {
        const { target } = e;
        const newVolume = +target.value;

        if (newVolume) {
            setVolume(newVolume);
            wavesurfer.current.setVolume(newVolume || 1);
        }
    };

    return (
        <div className="widest">
            <div id="waveform" ref={waveformRef} />
            <div className="controls">
                <button onClick={handlePlayPause}>{!playing ? "test play" : "test pause"}</button>
                {/* <input
                    type="range"
                    id="volume"
                    name="volume"
                    // waveSurfer recognize value of `0` same as `1`
                    //  so we need to set some zero-ish value for silence
                    min="0.01"
                    max="1"
                    step=".025"
                    onChange={onVolumeChange}
                    defaultValue={volume}
                /> */}
                {/* <label htmlFor="volume">Volume</label> */}
            </div>
        </div>
    );
}
