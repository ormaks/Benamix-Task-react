import React from 'react';
import '../../scss/App.css';

let AnswerOption = (props) => {

    return (
        <div
            className={"item" + ((props.selectedAnswer === props.index) ? ' selected-btn' : '')}
            onClick={props.onAnswerSelected(props.index)}
        >
            <img src={props.answerPicture} alt="testImage" className="item-img"/>
            <p className="item-name">{props.answerName}</p>
            <span className="item-price">{props.answerAmount}</span>
        </div>)
};

export default AnswerOption;