import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewCartItem from '../ReviewCartItem/ReviewCartItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import happyImg from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [placedOrder, setPlacedOrder] = useState(false);

    const handlePlaceOrder = () =>{
        setCart([]);
        processOrder()
        setPlacedOrder(true)
    }

    const removeProduct = (productKey) => {
       const newCart = cart.filter(pd => pd.key !== productKey);
       setCart(newCart)
       removeFromDatabaseCart(productKey)
    }
    useEffect(() =>{
     const savedCarts = getDatabaseCart();
     const productKeys = Object.keys(savedCarts);
     const cartProducts = productKeys.map( key => {
     const product = fakeData.find(pd => pd.key === key);      
     product.quantity = savedCarts[key];
     return product;
         
    }) 
     setCart(cartProducts)
     
    },[]);
    let thankYou;
    if(placedOrder){
      thankYou = <img src={happyImg} alt="" />
    }

    return (
        <div className='shop-container'>
           <div className="product-container">
            {
                cart.map(pd => <ReviewCartItem key={pd.key} removeProduct={removeProduct} product={pd}></ReviewCartItem>)
            }
           </div>
           {thankYou}
           <div className="cart-container">
               <Cart cart={cart}>
               <Link to="/order"><button onClick={handlePlaceOrder} className="main-button">place order</button></Link>
               </Cart>
           </div>
        </div>
    );
};

export default Review;