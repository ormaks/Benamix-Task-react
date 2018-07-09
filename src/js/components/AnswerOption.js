import React, {Component} from 'react';
import '../../scss/App.css';
import customData from '../../dataStorage/customData'

class AnswerOption extends Component {
    propTypes={
        answerPicture: this.PropTypes.string,
        answerAmount: this.PropTypes.string,
        answerName: this.PropTypes.string
    };
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="item">
                <img src={this.props.answerPicture} alt="testImage" className="item-img"/>
                <p className="item-name">{this.props.answerName}</p>
                <span className="item-price">{this.props.answerAmount}</span>
            </div>)
    }
}

export default AnswerOption;