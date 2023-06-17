import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
// import OrderedProduct from '../OrderedProduct/OrderedProduct';
import './Orders.css';
import { removeItemFromDb, deleteCart } from '../../utilities/utilities';
import OrderedProduct from '../OrderedProduct/OrderedProduct';


const Orders = () => {
    const {products, prevCart} = useLoaderData();
    const [cart, setCart] = useState(prevCart);
    
    //Delete item from Database or LocalStorage
    const deleteOrderItem = (id) =>{
        const remainingItemAfterDeleting = cart.filter(product=> product.id !== id);
        setCart(remainingItemAfterDeleting);
        removeItemFromDb(id)
    };

    const clearOrdersItem = () =>{
        setCart([]);
        deleteCart()
    }
    console.log(products)
    // const {products}=productAndCart;
    return (
        <div className='shop-wrapper'>
            <div className="Order-products">
                {
                    cart.map(product=><OrderedProduct
                    key={product.id}
                    product={product}
                    deleteOrderItem={deleteOrderItem}
                    ></OrderedProduct>)
                }
                {
                    cart.length === 0 && <h2>No item Here.Please <Link to='/'>Shop Now</Link></h2>
                }
            </div>
            <div className="static-layout">
                <Cart cart={cart} clearOrdersItem={clearOrdersItem}></Cart>
            </div>
        </div>
    );
};

export default Orders;