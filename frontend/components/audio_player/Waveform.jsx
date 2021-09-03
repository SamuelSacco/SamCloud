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
    height: 100,
    normalize: true,
    partialRender: true
});

export default function Waveform(props) {

    const url = props.url
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [playing, setPlay] = useState(false);
    // console.log(props.isPlaying)
    // console.log(playing)
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
        
        useEffect(() => {
            setPlay(props.isPlaying);
            wavesurfer.current.playPause();
        }, [props.isPlaying]);

    return (
        <div className="widest">
            {console.log()}
            <div id="waveform" ref={waveformRef} />
            <div className="controls">
                {/* <button onClick={handlePlayPause}>{!playing ? "test play" : "test pause"}
                </button> */}
            </div>
        </div>
    );
}
