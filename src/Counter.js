import { Component } from "react";
import './App.css';

export default class Counter extends Component{

    constructor(props) {
        super(props);
        this.state={
            value: this.props.products.price,
            total: 0,
            currency: "$"
        } 

    }

    ChangeCurrency = ()=> {
        if(this.state.currency == "$") {
            this.setState({
                value: this.state.value / 400,
                currency: "֏"
            })
        }
    }  
    RestoreCurrency = ()=> {
        this.setState({
            value: this.state.value * 400,
            currency: "$"
        })
    }  

    calculateTotalPrice = () => {
        let products = this.props.products
        return products.reduce((total, item) => {
          const price = parseFloat(item.price);
      
          if (!isNaN(price) && typeof price === 'number') {
            return total + price;
          }
          this.setState({
            value: total
          })
          return this.state.value;
        }, 0);
      };  
     
    render() {

        return(
            <div>
                <span>Total: {this.calculateTotalPrice()} {this.state.currency}</span><br></br>
                <button className="btn_currency" onClick={this.ChangeCurrency}>AMD</button>
                <button className="btn_currency" onClick={this.RestoreCurrency}>USD</button>
            </div>
        );
    }
}
