import React from 'react'

class AudioPlayer extends React.Component {
    render() {
        var audio = new Audio("/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ccac62f4d22873afd8aae5e1e2170ef51ad24baf/THINK%20ABOUT%20US%20-%20AA%20MIX%20v3.mp3")

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