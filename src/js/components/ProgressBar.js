import React, {Component} from 'react';
import '../../scss/App.css';
import customData from '../../dataStorage/customData'
import ProgressBarItem from './ProgressBarItem'

class ProgressBar extends Component {
    // propTypes={
    //     counter: this.PropTypes.number.isRequired,
    //     total: this.PropTypes.number.isRequired
    // };
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

export default ProgressBar;