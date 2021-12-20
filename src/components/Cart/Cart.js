import React from 'react';

import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = total + element.price * element.quantity;
       
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = (total / 10);
    const grandTotal = total + shipping + tax;
    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div className='cart'>
            <h4 className="bg-dark text-white">Order summary</h4>
            <p>Items Orderd: {cart.length}</p>
            <p>Product price: {formatNumber(total)}</p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p><small>Tax+vat: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
            { props.children }
        </div>
    );
};

export default Cart;