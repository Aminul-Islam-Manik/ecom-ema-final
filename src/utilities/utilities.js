const addToDb=(id)=>{
    let shoppingCart = getStoredCart()
    //add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = parseFloat(quantity) +1;
        shoppingCart[id]=newQuantity;
    }else{
        shoppingCart[id]= 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

//get the items after loading we use getStoredCart function
const getStoredCart = () =>{
    let shoppingCart = {};
    // console.log(shoppingCart)
    const storedCart= localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart= JSON.parse(storedCart);
    }
    return shoppingCart;
}

    //Delete item from Database or LocalStorage
    const removeItemFromDb = (id) =>{
        const storedCart = localStorage.getItem('shopping-cart');
        if(storedCart){
            const shoppingCart= JSON.parse(storedCart);
            if(id in shoppingCart){
                delete shoppingCart[id];
                localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
            }
        }
    }


    //Delete shopping cart
    const deleteCart = () =>{
        localStorage.removeItem('shopping-cart')
    }

export {addToDb, getStoredCart, removeItemFromDb, deleteCart}