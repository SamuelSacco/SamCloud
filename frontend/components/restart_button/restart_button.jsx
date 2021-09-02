import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";


export default class RestartButton extends Component {
    render() {
        return (
            <button onClick={this.props.restartSong}>
                <FontAwesomeIcon icon={faStepBackward} />
            </button>
        )
    }
}
