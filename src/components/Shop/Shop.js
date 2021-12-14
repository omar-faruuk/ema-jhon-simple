import React, { useEffect } from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    
    useEffect(() =>{
     const savedCarts = getDatabaseCart();
     const productKeys = Object.keys(savedCarts);
     const previewsCarts = productKeys.map(existingKey => {
         const product = fakeData.find(pd => pd.key === existingKey);
         product.quantity = savedCarts[existingKey];
         return product;
     })
     setCart(previewsCarts)
     },[])

    const handleAddCart = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count ;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDatabaseCart(product.key, count)
        
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(pd => <Product key={pd.key} addToCard={true} product={pd} handleAddCart={handleAddCart}></Product>)
                }
           </div>
            <div className='cart-continer'>
                <Cart cart={cart}>
                <Link to="/order"><button className="order-btn">Order review</button></Link>
                </Cart>
            </div>


        </div>
    );
};

export default Shop;