import { Component } from "react";
import './App.css';

export default class Counter extends Component{

    constructor(props) {
        super(props);
        this.state={
            value: 0,
            price: 0,
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

    AddBanana = ()=>{
        this.setState({
            price: this.state.price + 3
        })
    }

    AddLimon = ()=>{
        this.setState({
            price: this.state.price + 1
        })
    }

    render() {
        return(
            <div>

                <p className="price">quantity {this.state.value}</p>
                <button className="btn" onClick={this.ClickPlus}>+</button>
                <button className="btn" onClick={this.ClickMinus}>-</button>

                <p className="price">Price {this.state.price} $</p>

                <div className="cont">
                    <h3>Limon 1$</h3>
                    <button className="btn" onClick={this.AddLimon}>+</button>
                </div>

                <div className="cont">
                    <h3>Banana 3$</h3>
                    <button className="btn" onClick={this.AddBanana}>+</button>
                </div>

            </div>
        );
    }
}
