import React from 'react';
import './Product.css'

const Product = ({product, clickBtn}) => {
    // console.log(clickBtn)
    const {img, name, price, ratings} = product;
    return (
        <div className='products'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h6>Price:{price}</h6>
            <h6>Rating:{ratings}</h6>
            <button className='products-btn' onClick={()=>clickBtn(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;