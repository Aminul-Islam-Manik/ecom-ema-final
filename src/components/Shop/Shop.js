import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Shop.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart, deleteCart } from '../../utilities/utilities';

const Shop = () => {
    const products= useLoaderData()

    const [cart, setCart] = useState([]);

    
    useEffect(()=>{
        // console.log(products);
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart){
            console.log(id)
            const addedProduct = products.find(product=> product.id === id);
            if(addedProduct){
                // console.log(addedProduct)
                const quantity = storedCart[id];
                // console.log(quantity)
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products])


    const clickBtn = (selectedProduct)=>{
        let newCart = [];
        const exists = cart.find(product=>product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart= [...cart, selectedProduct];
        }else{
            const rest = cart.filter(product=>product.id !== selectedProduct.id);
            exists.quantity = exists.quantity +1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id);
    }

    const clearOrdersItem = () =>{
        setCart([]);
        deleteCart()
    }


    return (
        <div className='shop-wrapper'>
            <div className="shop">
            {
                products.map(product=><Product 
                    key={product.id} 
                    product={product}
                    clickBtn={clickBtn}
                    ></Product>)
            }
            </div>
            <div className="static-layout">
                <Cart cart={cart} clearOrdersItem={clearOrdersItem}>
                <Link to='orders'>
                        <button>Review item</button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;