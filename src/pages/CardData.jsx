import React, { useState } from 'react';

const CardData = (props) => {
    const {item}=props
    const [itemQuantity,setItemQuantity]=useState(item.quantity)
    
    return (
        <div>
            <tr className="card-data">
                <td>
                    <img src={item.image} alt="" className='cardData-img'/>
                </td>
                <td>
                    {item.title}
                </td>
                <td>
                    ${item.price}
                </td>
                <td className="card-quantity-flex">
                    <div className="item-minus">
                        <figure>-</figure>
                    </div>
                    <input type="number" value={itemQuantity} min={1} 
                    // onChange={()=>}
                    />
                    <div className="item-plus">
                        <figure>+</figure>
                    </div>
                </td>
                <td>
                    ${item.quantity*item.price}
                </td>
                <td>
                    <button>x</button>
                </td>
            </tr>
        </div>
    );
};

export default CardData;