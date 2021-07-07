import { useFilePicker } from 'use-file-picker';
import React from 'react';

const FilePicker = (props) => {
    // {console.log(props)}
    const [openFileSelector, { filesContent, loading }] = useFilePicker({
        accept: ['.txt', '.mp3']
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <button onClick={() => openFileSelector()}>Select song </button>
            <br />
            {filesContent.map((file, index) => (
                <div key={index}>
                    {/* {console.log(props)}
                    {console.log('after test')}
                    {console.log(file.name)} */}
                    {props.createSong(file.name)}
                </div>
            ))}
        </div>
    );
}

export default FilePicker;