import React from 'react';
import { Link } from 'react-router-dom';

function SongIndexItem(props) {

    const audio = new Audio()

    const start = () => {
        audio.play()
    }

    return (
        <>
            <button onClick={start}>Test Play</button>
            <button onClick={() => props.deletesong(props.song.id)}>Delete Song</button>
        </>
    )
}

export default SongIndexItem;