import { getStoredCart } from "../utilities/utilities";

export const productAndCart = async ()=>{
    //get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    // console.log(products)

    //get cart
    const savedCart = getStoredCart();
    const prevCart=[];
    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            prevCart.push(addedProduct);
        }
    }
    console.log(prevCart);

    return {products:products, prevCart:prevCart};
}