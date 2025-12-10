import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";



const Shop = () => {
    const [product,setProduct]=useState([])
    const [loading,setloading]=useState(true)
    const [errorMessage,setErrorMassege]=useState('')
    useEffect(()=>{
     fetch('https://my-json-server.typicode.com/AnifaMd/shopping-cart/products')
     .then(res=>res.json())
     .then(data=>{
        setProduct(data)
        setloading(false)
        setErrorMassege("")
     })
     .catch((err)=>{
        setErrorMassege(err.message)
        setloading(false)
        setProduct([])
     })
    },[])
    return (
        <>
        {loading&& <p>loading data</p>}
        {errorMessage && <h2>{errorMessage}</h2>}
        <div className="product-section">
            {product.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
        </>
    );
};

export default Shop;