import React from 'react';

let ProgressBarItem = (props) => {
    return (
        <div>
            {1 !== props.counterItem
                ? (<span className={"indicator-line" + props.activeAns}/>)
                : (<div/>)}
            <div className={"step " + props.activeAns}>
                <button>
                    <span className="step-icon">{props.number}</span>
                    <p className="step-label">{props.title}</p>
                </button>
            </div>
        </div>)
};


export default ProgressBarItem;