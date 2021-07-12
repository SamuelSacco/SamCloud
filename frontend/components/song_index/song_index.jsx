import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestSongs().then(response =>
            console.log(response)
        )
    }
    
    render() {
        return (
            <>
                <ul>
                    {
                        this.props.songs.map(song => {
                            if (song.artist_id === this.props.currentUserId){
                                return (
                                    <SongIndexItem
                                        key={song.id}
                                        song={song}
                                        deleteSong={this.props.deleteSong} 
                                    />
                                )
                            } 
                        })
                    }
                </ul>
            </>
        )
    }
}

export default SongIndex