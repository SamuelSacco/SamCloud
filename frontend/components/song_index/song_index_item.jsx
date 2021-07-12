import React from 'react';
import { Link } from 'react-router-dom';

function SongIndexItem(props) {
    const audio = new Audio(props.song.audio_url)
    
    const start = () => {
        audio.play()
    }
    
    return (
        <li>
            <img className="thumbnails" src={props.song.photo_url} alt="test" />
            <h1>{props.song.title}</h1>
            <button onClick={start}>Test Play</button>
            <button onClick={() => props.deleteSong(props.song.id)}>Delete Song</button>
        </li>
    )
}

export default SongIndexItem;