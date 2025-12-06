import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";



const Shop = () => {
    const [product,setProduct]=useState([])
    useEffect(()=>{
     fetch('http://localhost:4000/Products')
     .then(res=>res.json())
     .then(data=>setProduct(data))
    },[])
    return (
        <>
        <div className="product-section">
            {product.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        </>
    );
};

export default Shop;