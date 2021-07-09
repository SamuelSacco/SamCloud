import { useFilePicker } from 'use-file-picker';
import React from 'react';
import { createSong } from '../../actions/song_actions';

const FilePicker = (props) => {
    
    const [openFileSelector, { filesContent, loading }] = useFilePicker({
        accept: ['.txt', '.mp3', '.jpeg']
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    for (let file of filesContent){
        let song = { title: file.name, artist_id: props.currentUserId }
        props.createSong(song)
        console.log(file.content)
        let audio = new FormData.append("song[title]", file.name, file.content)
        var audio = new Audio(file.content)
        console.log(audio)
    }
    
    const start = () => {
        audio.play()
    }

    return (
        <div>
            <button onClick={() => openFileSelector()}>Choose File</button>
            <button onClick={start}>Play me!</button>
        </div>
    );
}

export default FilePicker;