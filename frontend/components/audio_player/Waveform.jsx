// const contxt = useContext()
import WaveSurfer from "wavesurfer.js";
import React, { useContext, useEffect, useRef, useState } from "react";
import { setTime } from "../../actions/playbar_actions";
import { useDispatch, useSelector } from "react-redux";
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
    partialRender: true,
});

export default function Waveform(props) {
    
    const url = props.url;
    const songAudioObject = props.songAudioObject;
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    
    const [playing, setPlay] = useState(false);
    const currentTime = useSelector(state => state.ui.playbar.songAudioObject.currentTime);
    const currentSongLength = useSelector(state => state.ui.playbar.songAudioObject.duration);
    const dispatch = useDispatch(); 

    
    useEffect(() => {
        // console.log("PROPS", props)
        setPlay(false);
        // console.log("CURENTEST", currentTime);
        const options = formWaveSurferOptions(waveformRef.current);
        wavesurfer.current = WaveSurfer.create(options);
        wavesurfer.current.on('seek', function (float) {
            dispatch(setTime(wavesurfer.current.getDuration() * float))
        });
        
        wavesurfer.current.load(url);
        wavesurfer.current.setVolume(0);
        wavesurfer.current.on("ready", function () {
            // if (wavesurfer.current) {
                wavesurfer.current.play(currentTime, currentSongLength);
                // }
            });
            // wavesurfer.current.play(60, 100)()
            // console.log("hlkhjhlkjbkjhkjhkjhkjh")
            // deletes shit
            return () => wavesurfer.current.destroy();
        }, [url]);
        
        useEffect(() => {
            // store.subscribe(() => console.log(store.getState()));
            wavesurfer.current.play(currentTime, currentSongLength)
        }, [currentTime])

        useEffect(() => {
            setPlay(props.isPlaying);
            wavesurfer.current.playPause();
        }, [props.isPlaying]);
        
    // setTimeout(() => {
    //     wavesurfer.current.play(currentTime, currentSongLength)
    // }, 1);
    
    const test = (start, end) => {
    }
    
    return (
        <div className="widest">

            <div id="waveform" ref={waveformRef}/>
            <button onClick={() => wavesurfer.current.play(currentTime, 100)}>test</button>
        </div>
    );
}
