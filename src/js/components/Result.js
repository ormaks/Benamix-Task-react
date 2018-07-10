import React, {Component} from 'react';

class Result extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemlist: [],
            answers: this.props.answers
        };
    }

    handleResult() {
        for (let i = 0; i < this.props.answerOptions.length; i++) {
            for (let j = 0; j < this.props.answerOptions[i].children.length; j++) {
                if (this.props.answerOptions[i].children[j].index === this.props.answers[i]) {
                    let itemListTemp = this.state.itemlist;
                    itemListTemp[itemListTemp.length] = this.props.answerOptions[i].children[j];
                    this.setState({
                        itemList: itemListTemp
                    });
                }
            }
        }
    }

    componentWillMount() {
        this.handleResult();
    }

    render() {
        return (
            <div>
                <div className="items-block">
                    <h1>Thank you!<br/> That is what you choose:</h1>
                    {this.state.itemList.map((key, index) => {
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