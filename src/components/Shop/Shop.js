import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const shoes= useLoaderData();
    console.log(shoes)
    return (
        <div>
            <h1>Shop:{shoes.length}</h1>
        </div>
    );
};

export default Shop;