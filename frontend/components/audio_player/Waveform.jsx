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

    const dispatch = useDispatch(); 
    
    const url = props.url;
    const songAudioObject = props.songAudioObject;
    const currentSong = useSelector(state => state.ui.playbar.currentSong)
    const playing = useSelector(state => state.ui.playbar.playing)
    const currentTime = useSelector(state => {
        if (state.ui.playbar.songAudioObject){
            return state.ui.playbar.songAudioObject.currentTime;
        }
        return null;
    });
    const currentSongLength = useSelector(state => {
        if (state.ui.playbar.songAudioObject) {
            return state.ui.playbar.songAudioObject.duration;
        }
        return null;
    });
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);

    useEffect(() => {
        const options = formWaveSurferOptions(waveformRef.current);
        
        wavesurfer.current = WaveSurfer.create(options);
        wavesurfer.current.on('seek', function (float) {
            dispatch(setTime(wavesurfer.current.getDuration() * float))
        });
        
        wavesurfer.current.load(url);
        wavesurfer.current.setVolume(0);
        wavesurfer.current.on("ready", function () {
            if (currentSong.id === props.song.id) {
                if (playing) {
                    wavesurfer.current.play(currentTime + 2, currentSongLength);
                } else {
                    wavesurfer.current.pause();
                }
                }
            console.warn("RAWR")
            // console.log(wavesurfer.current.backend.getPeaks());
            console.log(wavesurfer.current.backend.getPeaks(10));
            console.log(wavesurfer.current.backend.getPeaks(512));
            console.log(wavesurfer.current.backend.mergedPeaks);
            });

            return () => wavesurfer.current.destroy();
        }, [url]);
        
        useEffect(() => {
            if (playing) {
                wavesurfer.current.play(currentTime + 2, currentSongLength);
            } else {
                wavesurfer.current.pause();
            }
        }, [currentTime])

        useEffect(() => {
            if (playing) {
                wavesurfer.current.play(currentTime + 2, currentSongLength);
            } else {
                wavesurfer.current.pause();
            }
        }, [playing]);
        
    return (
        <div className="widest">

            <div id="waveform" ref={waveformRef}/>
            {/* <button onClick={() => wavesurfer.current.play(currentTime, 100)}>test</button> */}
        </div>
    );
}
