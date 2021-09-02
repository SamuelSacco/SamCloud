import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

export default class RepeatSong extends Component {
    constructor(props){
        super(props)
        this.state = {
            looping: false
        }
    }

    toggleLoop = () => {
        if (this.state.looping){
            this.setState({
                looping: false
            })
            this.props.loopSong(false)
        } else {
            this.setState({
                looping: true
            })
            this.props.loopSong(true)
        }
    }

    render() {
        return (
            <button onClick={this.toggleLoop}>
                {
                    this.state.looping ?
                        <FontAwesomeIcon className="orange-loop" icon={faRedoAlt}/>
                    :
                        <FontAwesomeIcon icon={faRedoAlt} />
                }
            </button>
        )
    }
}
