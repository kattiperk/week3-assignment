import React from 'react';

export default function Cart ({cart, removeFromCart}) {

  // const getTotalSum = () => {
  //   return (cart.reduce((sum, { cost }) => sum + cost, 0))
  // }
  
    return(
      <div className="cart">
        <p className="mb-0">{cart.length === 0 ? 'Your cart is empty' : ''}</p>
        <div className="airbnbs-holder">
          {cart.map((airbnb, idx) => (
          <div className="airbnb-wrap d-flex justify-content-between align-items-top pt-3 pb-0 pr-0" key={idx}>
                <div className="pr-3">
                  <h4 className="h4 mb-1">{airbnb.title}</h4>
                  <span className="badge bg-danger text-white">
                                {airbnb.payment.description}
                            </span>
                  <p className="mb-3 mt-1">${airbnb.payment.cost} / night</p>
                </div>
                <div className="price-holder align-self-top mb-2">
                <button type="button" onClick={() => removeFromCart(airbnb)} className="btn btn-success">Remove</button>
          </div>
        </div>
      ))}
      </div>
    </div>  
  )
}