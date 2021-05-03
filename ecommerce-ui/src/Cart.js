import React, { Component } from 'react';

class Cart extends Component {
    
    render() {
    //   let total = this.props.total.toFixed(2);
    //   let tax = (this.props.total * 0.15).toFixed(2);
    //   let totalIncTax = (+total + +tax).toFixed(2);
    //   let mystyle = {
    //     borderTop: "1px solid #ddd",
    //     marginTop: "10px"
    //   };

      return (
        <div className="container cart-wrapper">
          <h3 className="row" style={{ fontWeight: 400 }}>
            <span className="col-6">total price:</span>
            <span className="col-6 text-right"></span>
          </h3>
          <h3 className="row" style={{ fontWeight: 400 }}>
            <span className="col-6">tax (15%):</span>
            <span className="col-6 text-right"></span>
          </h3>
          <h3 className="row">
            <span className="col-6">tota inc tax:</span>
            <span className="col-6 text-right"></span>
          </h3>
  
        </div>
      );
    }
  }

export default Cart