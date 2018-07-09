import React, {Component} from 'react';
import '../../scss/App.css';
import customData from '../../dataStorage/customData'

import ProgressBar from '../components/ProgressBar'

class Result extends Component {
    render() {
        return (
            <div >
                <ProgressBar/>
            </div>)
    }
}

export default Result;