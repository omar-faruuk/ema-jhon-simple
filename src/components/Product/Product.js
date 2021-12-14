import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';


const Product = (props) => {

    const { name, price, seller, stock, img, key } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>by {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>Only {stock} left in stock</small></p>

                { props.addToCard &&
                <button className="main-button" onClick={() => props.handleAddCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
               }
            </div>

        </div>
    );
};

export default Product;