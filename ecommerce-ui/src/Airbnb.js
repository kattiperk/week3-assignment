import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Airbnb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            airbnbs: [],
        }
    }

    static propTypes = {
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

    


    // state = { inBookmarks: false }

    addToCart = () => {

        /*
        let cart = localStorage.getItem('cart') 
                      ? JSON.parse(localStorage.getItem('cart')) : {};
        const getPrice = this.props.airbnb.payment.cost;
        const getTitle = this.props.airbnb.title;
        cart = `$${getPrice} at ${getTitle}`;
        let total = getPrice;
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`You added: ${cart}`);
        console.log(`Total is: ${total}`); */
    }
    
    render() {
        const isSuperhost = this.props.airbnb.host.isSuperhost ? 'isSuperhost' : 'notSoperhost';
        return (
            <div className="airbnb-wrap">
                <div className="airbnb-wrap-inner mr-2 ml-2 card">
                    <div className="image-holder">
                        <mark className={`position-absolute top-0 start-0 pl-2 pr-2 isNotsuperhost ${isSuperhost}`}>SUPERHOST</mark>
                        <span className="position-absolute bottom-50 end-0 badge bg-danger text-white">
                                {this.props.airbnb.payment.description}
                            </span>
                        <img src={this.props.airbnb.image} alt={this.props.airbnb.title} className="card-img-top" />
                    </div>
                    <div className="airbnb-content-holder card-body">
                        <div>
                        
                            <h4 className="h4">{this.props.airbnb.title}</h4>
                            
                            <p className="lead">Entire {this.props.airbnb.houseType} in {this.props.airbnb.location.city}, {this.props.airbnb.location.country}
                            
                            
                            </p>
                            
                            <div className="d-flex align-items-center justify-content-between">
                            <p className="reviews-holder mb-0">
                                <FontAwesomeIcon icon={faStar} className="review-icon text-warning" />
                                <strong>{this.props.airbnb.rating.stars} </strong>
                                <span className="fw-light text-muted">({this.props.airbnb.rating.reviews} reviews)</span>
                            </p>
                            <small>
                                Hosted by <strong>{this.props.airbnb.host.name}</strong>
                            </small>
                            </div>
                        </div>
                        <div className="price-holder d-flex justify-content-between mt-4 mb-4">
                            <h4 className="h4 mb-0">${this.props.airbnb.payment.cost} / night</h4>
                            
                        </div>
                        
                        <button type="button" onClick={this.addToCart} className="btn btn-success">Rent this place</button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Airbnb