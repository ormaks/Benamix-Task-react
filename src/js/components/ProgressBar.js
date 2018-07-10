import React from 'react';
import ProgressBarItem from './ProgressBarItem';

let ProgressBar = (props) => {
    return (
        <nav className="stepper" id="progress-navigation">
            {[...Array(props.total)].map((x, i) =>
                <ProgressBarItem key={i}
                                 number={i + 1}
                                 title={"Question " + (i + 1)}
                                 total={props.total}
                                 counterItem={i + 1}
                                 activeAns={i < props.counter ? ' active' : ''}/>
            )}
        </nav>)
};


export default ProgressBar;