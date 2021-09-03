import React, { Component } from 'react'
import { connect } from "react-redux";
import { updateComment } from "../../actions/comments_actions";

export default class EditCommentsForm extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        this.props.requestComment(this.props.match.params.commentId).then((comment) => {
            this.setState({
                state: comment
            })
        })
    }
    
    updateBody(e) {
        this.setState({
            body: e.currentTarget.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.updateComment(this.state)
    }
    
    render() {
        if (!this.props.comment){
            // console.log("no comment")
            return null
        }
        // console.log("comment found")
        if (this.props.currentUser) {
            return (
                <div className="text-box-container">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="">
                            <input
                                type="text"
                                value={this.state.body}
                                onChange={this.updateBody}
                                />
                        </label>
                        {/* <button>Create Comment</button> */}
                    </form>
                </div>
            )
        } else {
            return (
                <h1>Log in to post a comment!</h1>
            )
        }
    }
}