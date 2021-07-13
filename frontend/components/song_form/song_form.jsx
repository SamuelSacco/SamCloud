import React from 'react'

class SongForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.song
        this.updateTitle = this.updateTitle.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePhotoFile = this.handlePhotoFile.bind(this)
        // let defaultPhoto = new Image(180, 180)
        // defaultPhoto.src = "no-image.png"
        // this.state.photoFile = defaultPhoto
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

    handlePhotoFile(e){
        this.setState({
            photoFile: e.currentTarget.files[0]
        })
    }

    handleSubmit(e){
        e.preventDefault()
        
        const formData = new FormData();
        formData.append('song[title]', this.state.title)
        formData.append('song[artist_id]', this.state.artist_id)
        formData.append('song[audio]', this.state.audioFile)
        formData.append('song[photo]', this.state.photoFile)
        this.props.createSong(formData)
    }

    render (){
        // console.log("SongForm")
        // console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title:
                    <input 
                    type="text" 
                    value={this.state.title}
                    onChange={this.updateTitle}/>
                </label>
                <br />
                <label>Audio File:
                <input 
                    type="file" 
                    onChange={this.handleFile}/>
                </label>
                <br />
                <label>Photo File:
                    <input
                        type="file"
                        onChange={this.handlePhotoFile} />
                </label>
                <br />
                <button>Create Song!</button>
            </form>
        )
    }
}

export default SongForm