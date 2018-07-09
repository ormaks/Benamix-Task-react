import React, {Component} from 'react';
import '../../scss/App.css';
import customData from '../../dataStorage/customData'

import ProgressBar from './ProgressBar'
import Question from './Question'
import AnswerOption from './AnswerOption'

class Poll extends Component {
    /*
        propTypes = {
            questionId: this.PropTypes.number,
            selectedAnswer: this.propTypes.func,
            onAnswerSelected: this.propTypes.func
        };*/

    constructor(props) {
        super(props);
        /*this.state={
            questionId: 1,
        }*/
    };

    renderAnswerOptions(key, index) {
        return (
            <AnswerOption
                index={index}
                key={key.id}
                answerName={key.name}
                answerAmount={key.balance}
                answerPicture={key.picture}
                selectedAnswer={this.props.selectedAnswer}
                onAnswerSelected={this.props.onAnswerSelected}
            />
        );
    }

    render() {
        return (
            <div>
                <ProgressBar counter={this.props.counter}
                    /*counter={this.props.questionId}*/
                />

                <p className={"title_question"}>title</p>
                <Question content={this.props.question}/>

                <div className="items-block">
                    {this.props.answerOptions.map(this.renderAnswerOptions)}
                </div>

                <div className="buttons">
                    <button className="previous-btn">Previous</button>
                    <button className="next-btn">Next</button>
                </div>
            </div>)
    }
}

export default Poll;