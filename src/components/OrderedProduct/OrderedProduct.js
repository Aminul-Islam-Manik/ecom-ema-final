import React from 'react';
import './OrderedProduct.css';

const OrderedProduct = ({product, deleteOrderItem}) => {
    const {id, img, name, price, quantity} = product;
    return (
        <div className='user-order-product'>
                <img src={img} alt="" />
            <div className="order-desc">
                <div className="order-info">
                    <p>{name}</p>
                    <p><small>Price:{price}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <p className='delete' onClick={()=>{deleteOrderItem(id)}}>X</p>
            </div>
        </div>
    );
};

export default OrderedProduct;


