import React, {Component} from 'react';
import '../scss/App.css';
import customData from '../dataStorage/customData'
import Poll from './components/Poll'
import Result from './components/Result'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            allQuestions: [],
            answer: '',
            selectedAnswers: {},
            result: '',
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
        console.log(this.state.selectedAnswers);
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
            answer: '',
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
            answer: '',
            activeAns: false
        });
    }

    renderQuiz() {
        return (
            <Poll viewResults={this.viewResults}
                  setNextQuestion={this.setNextQuestion}
                  counter={this.state.counter}
                  setPreviousQuestion={this.setPreviousQuestion}
                  answer={this.state.answer}
                  selectedAnswer={this.state.selectedAnswers[this.state.counter]}
                  answerOptions={this.state.answerOptions}
                  questionId={this.state.questionId}
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
                    counter={this.state.counter}
                    selectedAnswer={this.state.selectedAnswers[this.state.counter]}
                    answerOptions={customData}
                    questionId={this.state.questionId}
                    resultsTotal={this.state.selectedAnswers}
                    onAnswerSelected={this.handleAnswerSelected}
                    activeAns={this.state.activeAns}
                    questionTotal={customData.length}/>
        );
    }

    viewResults(e) {
        // e.preventDefault();
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
