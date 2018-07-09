import React, {Component} from 'react';
import '../../scss/App.css';

class ProgressBarItem extends Component {
    render() {
        return (
            <li className="step">
                <a href="#">
                    <span className="step-icon">{this.props.number}</span>
                    <p className="step-label">{this.props.title}</p>
                </a>
            </li>)
    }
}

class ProgressBar extends Component {
    render() {
        return <nav className="stepper" id="progress-navigation">
            <ul>
                <ProgressBarItem number={1} title={"example1"}/>
                <li className="indicator-line"/>

                <ProgressBarItem number={2} title={"example2"}/>
                <li className="indicator-line"/>

                <ProgressBarItem number={3} title={"example3"}/>
                <li className="indicator-line"/>

                <ProgressBarItem number={4} title={"example4"}/>
                <li className="indicator-line"/>

                <ProgressBarItem number={5} title={"example5"}/>
                <li className="indicator-line"/>

                <ProgressBarItem number={6} title={"example6"}/>
            </ul>
        </nav>;
    }
}


class App extends Component {
    render() {
        return (
            <div className="content">
                <ProgressBar/>
            </div>
        );
    }
}

export default App;
