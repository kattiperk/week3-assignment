import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Airbnb from './Airbnb.js';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            airbnb: [],
            total: 0
        }
      }


    static propTypes = {
        airbnb: PropTypes.shape({
            payment: PropTypes.shape({
                cost: PropTypes.number,
            }),
        })
    }

    componentDidMount() {
        let cart = localStorage.getItem('cart');
        console.log(cart)
      }
    
    render() {
        let cart = localStorage.getItem('cart');
    //   let total = this.props.airbnb.payment.cost;
    //   let tax = (this.props.total * 0.15).toFixed(2);
    //   let totalIncTax = (+total + +tax).toFixed(2);
    //   let mystyle = {
    //     borderTop: "1px solid #ddd",
    //     marginTop: "10px"
    //   };

      return (
        <div className="container cart-wrapper">
          <h3 className="row" style={{ fontWeight: 400 }}>
            <span className="col-6">You have added: {cart}</span>
            <div>
            <span className="col-6 text-right"></span>
            </div>
          </h3>
          <h3 className="row" style={{ fontWeight: 400 }}>
            <span className="col-6">Tax (15%):</span>
            <span className="col-6 text-right"></span>
          </h3>
          <h3 className="row">
            <span className="col-6">Total:</span>
            <span className="col-6 text-right"></span>
          </h3>
  
        </div>
        
      )
    }
  }

export default Cart