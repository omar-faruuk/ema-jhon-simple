import React from 'react';
import './ReviewCartItem.css';
const ReviewCartItem = (props) => {
    const {name, quantity, key, price} = props.product;
    return (
        <div className=''>
            <h1 className='product-name'>{name}</h1>
            <p>Quantity: {quantity}</p>
            <p><small>${price}</small></p>
            <button onClick={() => props.removeProduct(key)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewCartItem;