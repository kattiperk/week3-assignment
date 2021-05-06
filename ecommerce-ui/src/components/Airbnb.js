import React from 'react';
import PropTypes from 'prop-types';
import airbnbs from '../_data/airbnbs.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Airbnb ( {addToCart} ) {
  Airbnb.propTypes = {
      airbnb: PropTypes.shape({
          title: PropTypes.string,
          houseType: PropTypes.string,
          image: PropTypes.string,
          location: PropTypes.shape({
              city:PropTypes.string,
              country:PropTypes.string,
          }),
          payment: PropTypes.shape({
              cost: PropTypes.number,
              description: PropTypes.string,
          }),
          host: PropTypes.shape({
              name: PropTypes.string,
              isSuperhost: PropTypes.bool,
          }),
          rating: PropTypes.shape({
              stars: PropTypes.number,
              reviews: PropTypes.number,
          })
      })
  }
  return (
    <div>
      <h1 className="display-3 mb-5 mt-5">Stays for you</h1>
      <div className="airbnbs-holder d-flex mb-5">
      {airbnbs.map((airbnb, idx) => (
        <div className="airbnb-wrap" key={idx}>
          <div className="airbnb-wrap-inner mr-2 ml-2 card">
            <div className="image-holder">
              <mark
                className={`position-absolute top-0 start-0 pl-2 pr-2 isNotsuperhost ${airbnb.host.isSuperhost ? 'isSuperhost' : 'notSoperhost'}`}
              >
                SUPERHOST
              </mark> 
              <span className="position-absolute bottom-50 end-0 badge bg-danger text-white">
                {airbnb.payment.description}
              </span>
              <img
                src={airbnb.image}
                alt={airbnb.title}
                className="card-img-top"
              />
            </div>
            <div className="airbnb-content-holder card-body">
              <div>
                <h4 className="h4">
                  {airbnb.title}
                </h4>
                <p className="lead">
                  Entire {airbnb.houseType} in {airbnb.location.city}, {airbnb.location.country}
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="reviews-holder mb-0">
                    <FontAwesomeIcon icon={faStar} className="review-icon text-warning" />
                    <strong>{airbnb.rating.stars} </strong>
                    <span className="fw-light text-muted">({airbnb.rating.reviews} reviews)</span>
                  </p>
                  <small>
                      Hosted by <strong>{airbnb.host.name}</strong>
                  </small>
                </div>
              </div>
              <div className="price-holder d-flex justify-content-between mt-4 mb-4">
                <h4 className="h4 mb-0">${airbnb.payment.cost} / night</h4>
              </div>
              <button type="button" onClick={() => addToCart(airbnb)} className="btn btn-success">Rent this place</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )  
}
