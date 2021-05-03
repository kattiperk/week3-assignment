import './css/App.css';
import './css/Airbnb.css';
import './css/Cart.css';
import airbnbs from './_data/airbnbs.json';
import Airbnb from './Airbnb';
import Cart from './Cart';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="airbnbs">
            <h1 className="display-3 mb-5 mt-4">Stays for you</h1>
            <div className="airbnbs-holder d-flex">
              {airbnbs.map((airbnb, idx) => {
                return <Airbnb airbnb={airbnb} key={idx} />
              })}
            </div>
            <div className="cart-holder">
              {<Cart />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;