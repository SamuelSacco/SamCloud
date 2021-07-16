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
        this.props.createSong(formData).then((res) => this.props.history.push(`/songs/${res.song.id}`))
    }

    
    render (){

        return (
            <div className="width-wrapper">
                <div className="single-line">
                    <div className="double-border">
                        <h1 className="upload-h1">Upload a Song!</h1>
                    <div className="drag-drop">
                        <form onSubmit={this.handleSubmit}>
                                <label >
                                <input 
                                className="email-sign-up"
                                type="text" 
                                value={this.state.title}
                                onChange={this.updateTitle}
                                placeholder="Enter a title"/>
                            </label>
                            <h1 className="upload-file">Choose Audio: </h1>

                            <label>
                            <input
                                className="email-sign-up"
                                type="file" 
                                onChange={this.handleFile}
                                />
                            </label>
                                <h1 className="upload-file">Choose Photo: </h1>
                            <label>
                                <input
                                    className="email-sign-up"
                                    type="file"
                                    onChange={this.handlePhotoFile} />
                            </label>
                            <br />
                            <button className="submit-edit">Create Song!</button>
                        </form>
                    </div>
                    
                    </div>
                </div>

            </div>
        )
    }
}

export default SongForm