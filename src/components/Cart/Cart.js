import React from 'react';
import './Cart.css'

const Cart = ({cart, clearOrdersItem, children}) => {
    // console.log(cart)
    let total=0;
    let quantity=0;
    let shipping=0;
    let grandTotal=0;
    for(const product of cart){
        total=total + (product.price+shipping) * product.quantity;
        quantity = quantity + product.quantity;
        shipping = shipping +product.shipping;
        grandTotal=total+quantity + shipping;
    }
    return (
        <div className='cart'>
            <h2>Selected:{quantity}</h2>
            {/* <p>Quantity:{quantity}</p> */}
            <p>Price:{total}</p>
            <p>Shipping:{shipping}</p>
            <h4>Grand Total:{grandTotal}</h4>
            <button className='clear-btn' onClick={clearOrdersItem}>Clear All</button>
            <button className='checkout-btn'>Checkout</button>
            {
                children
            }
        </div>
    );
};

export default Cart;