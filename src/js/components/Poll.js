import React from 'react';
import ProgressBar from './ProgressBar'
import Question from './Question'
import AnswerOption from './AnswerOption'
import customData from '../../dataStorage/customData'


let Poll = (props) => {
    return (
        <div>
            <ProgressBar counter={props.counter + 1}
                         total={props.questionTotal}
                         activeAns={props.activeAns}/>

            <Question content={props.question}/>

            <div className="items-block">
                {props.answerOptions.map((key, index) => {
                    return <AnswerOption
                        index={index}
                        key={index}
                        answerName={key.name}
                        answerAmount={key.balance}
                        answerPicture={key.picture}
                        selectedAnswer={props.selectedAnswer}
                        onAnswerSelected={props.onAnswerSelected}/>
                })}
            </div>

            <div className="buttons">
                {props.counter > 0 ? (
                    <button className="previous-btn" onClick={props.setPreviousQuestion}>Previous</button>) : (
                    <div/>)}

                {props.counter < customData.length - 1 ? (
                    <button className="next-btn" onClick={props.setNextQuestion}
                            disabled={props.activeAns}>Next</button>) : (
                    <button className="next-btn" onClick={props.viewResults}
                            disabled={props.activeAns}>View Results</button>)}
            </div>
        </div>)
};

export default Poll;