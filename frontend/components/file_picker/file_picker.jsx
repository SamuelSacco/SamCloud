import { useFilePicker } from 'use-file-picker';
import React from 'react';

const FilePicker = () => {
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
                <div>
                    {console.log(file)}
                    <div key={index}>{file.name}</div>
                    <br />
                </div>
            ))}
        </div>
    );
}

export default FilePicker;