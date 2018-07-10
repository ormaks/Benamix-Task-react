import React, {Component} from 'react';

import Poll from './components/Poll'
import Result from './components/Result'
import customData from '../dataStorage/customData'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            allQuestions: [],
            selectedAnswers: {},
            result: false,
            activeAns: true
        };
        this.setNextQuestion = this.setNextQuestion.bind(this);
        this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.viewResults = this.viewResults.bind(this);
    }

    handleAnswerSelected = id => event => {
        const _self = this;
        const obj = _self.state.selectedAnswers;
        const index = id;
        const Qindex = _self.state.counter;
        obj[Qindex] = index;
        _self.setState({
            selectedAnswers: obj,
            activeAns: false
        });
    };

    componentWillMount() {
        this.setState({
            question: customData[0].title,
            answerOptions: customData[0].children,
            allQuestions: customData
        });
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: customData[counter].title,
            answerOptions: customData[counter].children,
            activeAns: true
        });
    }

    setPreviousQuestion() {
        const counter = this.state.counter - 1;
        const questionId = this.state.questionId - 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: customData[counter].title,
            answerOptions: customData[counter].children,
            activeAns: false
        });
    }

    renderQuiz() {
        return (
            <Poll viewResults={this.viewResults}
                  setNextQuestion={this.setNextQuestion}
                  counter={this.state.counter}
                  setPreviousQuestion={this.setPreviousQuestion}
                  selectedAnswer={this.state.selectedAnswers[this.state.counter]}
                  answerOptions={this.state.answerOptions}
                  question={this.state.question}
                  questionTotal={customData.length}
                  onAnswerSelected={this.handleAnswerSelected}
                  activeAns={this.state.activeAns}
            />
        );
    }

    renderResult() {
        return (
            <Result answers={this.state.selectedAnswers}
                    answerOptions={customData}/>
        );
    }

    viewResults(e) {
        e.preventDefault();
        this.setState({result: true})
    }

    render() {
        return (
            <div className="content">
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
        );
    }
}

export default App;
