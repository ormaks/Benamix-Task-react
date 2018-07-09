import React, {Component} from 'react';
import '../scss/App.css';
import customData from '../dataStorage/customData'
import ProgressBar from './components/ProgressBar'
import Poll from './components/Poll'
import Result from './components/Result'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            question: '',
            answerOptions: [],
            allQuestions : [],
            answer: '',
            selectedAnswers : {},
            result: ''
        };
        this.setNextQuestion = this.setNextQuestion.bind(this);
        this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
        this.viewResults = this.viewResults.bind(this);

    }

    handleAnswerSelected(e){
        let _self = this;
        var obj = _self.state.selectedAnswers;
        var index = parseInt(e.target.value);
        var Qindex = (_self.state.counter );
        obj[Qindex] = index;
        _self.setState({selectedAnswers : obj})
    }

    componentWillMount() {
        this.setState({
            question: customData[0].title,
            answerOptions : customData[0].children,
            allQuestions : customData
        });
    }


    setNextQuestion() {
        const counter = this.state.counter + 1;

        this.setState({
            counter: counter,
            question: customData[counter].title,
            answerOptions: customData[counter].children,
            answer: ''
        });
    }
    setPreviousQuestion() {
        const counter = this.state.counter - 1;

        this.setState({
            counter: counter,
            question: customData[counter].title,
            answerOptions: customData[counter].children,
            answer: ''
        });
    }

    renderQuiz() {
        return (
            <Poll viewreults={this.viewResults}
                  setNextQuestion={this.setNextQuestion}
                  counter={this.state.counter}
                  setPreviousQuestion={this.setPreviousQuestion}
                  answer={this.state.answer}
                  selectedAnswer = {this.state.selectedAnswers[this.state.counter]}
                  answerOptions={this.state.answerOptions}
                  question={this.state.question}
                  questionTotal={customData.length}
                  onAnswerSelected = {this.handleAnswerSelected}
            />
        );
    }

    renderResult() {
        return (
            <Result quizResult={this.state.allQuestions} answers={this.state.selectedAnswers} />
        );
    }
    viewResults(e){
        e.preventDefault();
        this.setState({result : true})
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
