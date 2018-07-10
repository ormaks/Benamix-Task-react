import React, {Component} from 'react';
import '../../scss/App.css';
import customData from '../../dataStorage/customData'

import ProgressBar from './ProgressBar'
import Question from './Question'
import AnswerOption from './AnswerOption'

class Poll extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>

                <ProgressBar counter={this.props.counter+1}
                             total={this.props.questionTotal}
                             activeAns={this.props.activeAns}
                />

                <Question content={this.props.question}/>

                <div className="items-block">
                    {this.props.answerOptions.map((key, index) => {

                        return <AnswerOption
                            index={index}
                            key={index}
                            answerName={key.name}
                            answerAmount={key.balance}
                            answerPicture={key.picture}
                            selectedAnswer={this.props.selectedAnswer}
                            onAnswerSelected={this.props.onAnswerSelected}
                            questionId={this.props.questionId}
                        />
                    })}
                </div>

                <div className="buttons">
                    {this.props.counter > 0 ? (
                        <button className="previous-btn" onClick={this.props.setPreviousQuestion}>Previous</button>) : (
                        <div/>)}

                    {this.props.counter < customData.length - 1 ? (
                        <button className="next-btn" onClick={this.props.setNextQuestion}
                                disabled={this.props.activeAns}>Next</button>) : (
                        <button className="next-btn" onClick={this.props.viewResults}
                                disabled={this.props.activeAns}>View Results</button>)}
                </div>
            </div>)

    }
}

export default Poll;