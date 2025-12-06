import React from 'react';

const ProductCard = (props) => {
    const {product}=props
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
            <div className="product-btn">
                Add To Cart
            </div>
        </div>
        </>
    );
};

export default ProductCard;