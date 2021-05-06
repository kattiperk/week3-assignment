import React, { useState } from 'react';
import Airbnb from './Airbnb';
import Cart from './Cart';
import './css/App.css';
import './css/Airbnb.css';
import './css/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const PAGE_AIRBNBS = 'airbnbs';

function App() {
  const [cart, setCart] = useState([]);
  const [setPage] = useState(PAGE_AIRBNBS);

  const addToCart = (airbnb) => {
    setCart([...cart, { ...airbnb }]);
  }

  const removeFromCart = (airbnbToRemove) => {
    setCart(cart.filter((airbnb) => airbnb !== airbnbToRemove))
  }

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const getTotalSum = () => {
    return cart.reduce((sum, { payment: { cost }}) => sum + cost, 0);
  }

  const disabled = cart.length === 0 ? 'disabled' : '';

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="airbnbs">
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/" onClick={() => navigateTo(PAGE_AIRBNBS)}>Home</a>
                    </li>
                    <li>
                    <a
                      href="/"
                      className={`nav-link ${disabled}`}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <FontAwesomeIcon icon={faShoppingCart} /> ({cart.length})
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="airbnbs-holder d-flex mb-5">
              <Airbnb addToCart={addToCart} />
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="display-4 mb-1 mt-1" id="exampleModalLabel">Cart</h4>
                    <button type="button" className="btn btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                  <div className="modal-body">
                    <Cart cart={cart} removeFromCart={removeFromCart} />
                  </div>
                  <div className="modal-footer">
                  <h4
                    className="display-4 mb-1 mt-1"
                    id="exampleModalLabel"
                  >
                    {cart.length === 0 ? '' : `Total: $${getTotalSum()}`}
                  </h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
