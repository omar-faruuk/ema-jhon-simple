import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

    const { name, price, seller, stock, img } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in stock</small></p>
                <button className="main-button" onClick={() => props.handleAddCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>

        </div>
    );
};

export default Product;