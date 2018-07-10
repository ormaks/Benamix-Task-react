import React, {Component} from 'react';
import '../../scss/App.css';
import customData from "../../dataStorage/customData";

class ProgressBarItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clsActive: ""
        };
    }

    componentWillUnmount() {
        /* if (this.props.counterItem === this.props.counter) {
             this.setState({
                 clsActive: "active"
             })
         }
         else if (this.props.number < this.props.counter) {
             this.setState({
                 clsActive: "done"
             })
         }
         else {
             this.setState({
                 clsActive: ""
             })
         }*/
    }

    render() {
        return (
            <div>
                {1 !== this.props.counterItem ? (
                    <span className={"indicator-line" + this.props.activeAns}/>) : (
                    <div/>)}
                <div className={"step " + this.props.activeAns}>
                    <button>
                        <span className="step-icon">{this.props.number}</span>
                        <p className="step-label">{this.props.title}</p>
                    </button>
                </div>
            </div>)
    }
}

export default ProgressBarItem;