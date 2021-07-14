import React from 'react';
import { Link } from 'react-router-dom';

function SongIndexItem(props) {
    const audio = new Audio(props.song.audio_url)
    
    const start = () => {
        audio.play()
    }
    
    return (
        <li>
            {/* <div class="itemsContainer">
                <div class="image"> 
                    <a href="#">  
                        <img src="#" /> 
                    </a>
                </div>
                <div class="play"><img src="#" /> </div>
            </div> */}
            <img className="thumbnails" onClick={start} src={props.song.photo_url || "no-image.png"} alt="img not found" />
            <h1><Link to={`/songs/${props.song.id}`} className="song-page-link">{props.song.title}</Link></h1>
            {/* <button onClick={start}>Test Play</button>
            <button onClick={() => props.deleteSong(props.song.id)}>Delete Song</button> */}
        </li>
    )
}

export default SongIndexItem;