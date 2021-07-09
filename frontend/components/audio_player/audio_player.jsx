import React from 'react'

class AudioPlayer extends React.Component {
    render() {

        var audio = new Audio("/THINK ABOUT US - AA MIX v3.mp3")
        console.log(audio)
        const start = () => {
            audio.play()
        }

        return (
            <>
                <button onClick={start}>Test Play</button>
            </>
        );
    }
}

export default AudioPlayer;