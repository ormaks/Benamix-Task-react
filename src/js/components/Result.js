import React, {Component} from 'react';
import '../../scss/App.css';
import AnswerOption from './AnswerOption'

import customData from '../../dataStorage/customData'

class Result extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemlist:[],
            answers: this.props.answers
        };


        this.handleResult = this.handleResult.bind(this);
    }

    handleResult() {
        for (let i = 0; i < this.state.answers.length; i++) {
            let itemListTemp = this.state.itemlist;
            itemListTemp[i]=this.props.answerOptions[i].children[this.state.answers[i]];
            console.log(itemListTemp);
            this.setState({
                itemList: itemListTemp
            });
        }
        console.log(this.state.itemlist);
    }

    render() {
        this.handleResult();
        return (
            <div>
                <div className="items-block">
                    {
                        this.state.itemList.map((key, index) => {
                            return (
                                <div key={index}>
                                    <div className="item">
                                        <img src={key.picture} alt="testImage" className="item-img"/>
                                        <p className="item-name">{key.name}</p>
                                        <span className="item-price">{key.balance}</span>
                                    </div>
                                </div>)
                        })}
                </div>
            </div>)
    }
}

export default Result;