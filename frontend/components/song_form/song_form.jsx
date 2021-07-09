import React from 'react'

class SongForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.song
        this.updateTitle = this.updateTitle.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle(e){
        this.setState({
            title: e.currentTarget.value
        })
    }

    handleFile(e){
        this.setState({
            audioFile: e.currentTarget.files[0]
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = new FormData();
        formData.append('song[title]', this.state.title)
        formData.append('song[artist_id]', this.state.artist_id)
        formData.append('song[audio]', this.state.audioFile)
        // debugger
        this.props.createSong(formData)
    }

    render (){
        console.log("SongForm")
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title:
                    <input 
                    type="text" 
                    value={this.state.title}
                    onChange={this.updateTitle}/>
                </label>
                <input 
                type="file" 
                onChange={this.handleFile}/>
                <button>Create Song!</button>
            </form>
        )
    }
}

export default SongForm