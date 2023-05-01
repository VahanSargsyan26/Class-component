import { Component } from "react";
import './App.css';

export default class Counter extends Component{

    constructor(props) {
        super(props);
        this.state={
            value: 0
        } 

    }
    ClickPlus = ()=>{
        this.setState({
            value: this.state.value + 1
        })
    }
    ClickMinus = ()=>{
        this.setState({
            value: this.state.value - 1
        })
    }

    render() {
        return(
            <div>
                <p>Price {this.state.value} </p>

                <button className="btn" onClick={this.ClickPlus}>+</button>
                <button className="btn" onClick={this.ClickMinus}> -</button>
            </div>
        );
    }
}
