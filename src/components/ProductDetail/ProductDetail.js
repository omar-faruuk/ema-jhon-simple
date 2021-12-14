import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {key} = useParams();
    const product = fakeData.find(pd => pd.key === key);
    return (
        <div>
            <h1>Product details.</h1>
            <Product addToCard={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;