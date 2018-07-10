import React, {Component} from 'react';
import '../../scss/App.css';
import ProgressBarItem from './ProgressBarItem';

class ProgressBar extends Component {
    render() {
        return <nav className="stepper" id="progress-navigation">
            {[...Array(this.props.total)].map((x, i) =>
                <ProgressBarItem key={i}
                                 number={i + 1}
                                 title={"Question " + (i + 1)}
                                 total={this.props.total}
                                 counterItem={i + 1}
                                 activeAns={i < this.props.counter ? ' active' : ''}
                />
            )}
        </nav>;
    }
}

export default ProgressBar;