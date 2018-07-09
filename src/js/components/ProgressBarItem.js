import React, {Component} from 'react';
import '../../scss/App.css';
import customData from '../../dataStorage/customData'

class ProgressBarItem extends Component {

    render() {
        return (
            <li className="step">
                <button >
                    <span className="step-icon">{this.props.number}</span>
                    <p className="step-label">{this.props.title}</p>
                </button>
            </li>)
    }
}

export default ProgressBarItem;