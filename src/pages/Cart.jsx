import React, { useEffect, useState } from 'react';
import CardData from './CardData';
const Cart = () => {
    const [cardItem,setCardItem]=useState([])
    useEffect(()=>{
    fetch('http://localhost:4000/Products')
    .then(res=>res.json())
    .then(data=>{
        const newArr=data.map(item=>({...item,quantity:1}))
        setCardItem(newArr)
    })
    },[])
    return (
       <>
       <div className="card-section">
        <div className="card-container">
            <h2>all cart details</h2>
            <div className="card-contents">
            <table className='table-name'>
                <thead>
                    <tr className="table-title">
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                {cardItem.map(item=>(
                   <CardData item={item}/>
                ))}
                </tbody>
            </table>
            <div className="total-price">
            total price is:{}
            </div>
            <div className="clear-cart">
                <button>clear cart</button>
            </div>
            </div>
        </div>
       </div>
       </>
    );
};

export default Cart;