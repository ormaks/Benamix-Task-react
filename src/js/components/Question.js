import React from 'react';
import '../../scss/App.css'

function Question(props) {

    return (
        <div>
            <h2 className="title_question">{props.content}</h2>

        </div>
    );
}

export default Question;