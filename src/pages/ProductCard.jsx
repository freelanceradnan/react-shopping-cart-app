import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './createCartAction/cartCreateAction';

const ProductCard = (props) => {
    const {product}=props
    const dispatch=useDispatch()
    return (
        <>
        <div className="product-section-container">
            <div className="product-image">
             <img src={product.image} alt="product-image" />
            </div>
            <div className="product-title">
                {product.title}
            </div>
            <div className="product-about">

                {product.about}
            </div>
            <div className="product-price">
                {product.price}
            </div>
            <button className="product-btn" onClick={()=>dispatch(addToCart(product))}>
                Add To Cart
            </button>
        </div>
        </>
    );
};

export default ProductCard;