import React from 'react';
import '../../scss/App.css'

function Question(props) {

    return (
            <p className="title_question">{props.content}</p>

    );
}

export default Question;