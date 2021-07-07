import { useFilePicker } from 'use-file-picker';
import React from 'react';
import { createSong } from '../../actions/song_actions';

const FilePicker = (props) => {
    
    const [openFileSelector, { filesContent, loading }] = useFilePicker({
        accept: ['.txt', '.mp3']
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    for (let file of filesContent){
        let song = { title: file.name, artist_id: props.currentUserId }
        props.createSong(song)
    }
    
    return (
        <div>
            <button onClick={() => openFileSelector()}>Upload Song</button>
        </div>
    );
}

export default FilePicker;