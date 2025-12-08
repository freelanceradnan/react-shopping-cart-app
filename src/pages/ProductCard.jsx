import React from 'react';
import { useDispatch } from 'react-redux';

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
            <button className="product-btn" onClick={()=>dispatch({
                type:"card/addToCart",
                payload:product
            })}>
                Add To Cart
            </button>
        </div>
        </>
    );
};

export default ProductCard;