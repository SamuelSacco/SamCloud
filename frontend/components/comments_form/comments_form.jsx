import React, { Component } from 'react'

export default class CommentsForm extends Component {
    constructor(props){
        super(props)
        this.state = this.props.comment
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateBody(e){
        this.setState({
            body: e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createComment(this.state)
        this.setState({
            body: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        <input 
                        type="text" 
                        placeholder="Write a comment"
                        value={this.state.body}
                        onChange={this.updateBody}
                        />
                    </label>
                    {/* <button>Create Comment</button> */}
                </form>
            </div>
        )
    }
}
