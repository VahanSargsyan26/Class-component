import { Component } from "react";
import './App.css';

export default class Counter extends Component{

    constructor(props) {
        super(props);
        this.state={
            value: 0,
            price: 0,
            currency: "$"
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

    ChangeCurrency = ()=> {
        this.setState({
            price: this.state.price / 400,
            currency: "AMD"
        })
    }  
    RestoreCurrency = ()=> {
        this.setState({
            price: this.state.price * 400,
            currency: "$"
        })
    }  
     

    render() {
        return(
            <div>

                <p className="price">quantity {this.state.value}</p>
                <button className="btn" onClick={this.ClickPlus}>+</button>
                <button className="btn" onClick={this.ClickMinus}>-</button>

                <p className="price">Price {this.state.price} {this.state.currency} </p>

                <div className="cont">
                    <h3>Limon 1$</h3>
                    <button className="btn" onClick={this.AddLimon}>+</button>
                </div>

                <div className="cont">
                    <h3>Banana 3$</h3>
                    <button className="btn" onClick={this.AddBanana}>+</button>
                </div>

                <button className="btn_currency" onClick={this.ChangeCurrency}>AMD</button>
                <button className="btn_currency" onClick={this.RestoreCurrency}>USD</button>

            </div>
        );
    }
}
