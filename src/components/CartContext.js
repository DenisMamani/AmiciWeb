import { createContext } from "react";
import { useState } from "react";
export const cartContext = createContext()
const CartContext =({children})=>{
    const [cart,setCart]=useState([])
const addToCart =(product,count)=>{
    if(isInCart(product.id)){
        const indexItem=cart.findIndex(ele=>ele.item.id===product.id);
        cart[indexItem].count=cart[indexItem].count+count;  
        setCart([...cart]);
    }
    else{
       setCart([...cart,{item:product,count}])
    }
}
const removeItem=(id)=>{
    const updatedCart=cart.filter(element=>element.item.id !== id)
    setCart(updatedCart);
}
const isInCart =(id)=>{
    return cart.some(element=>element.item.id===id)
}
const clearCart=()=>{
    setCart([])
}
const cantInCart=()=>{
    return cart.reduce((acum,itemCart)=> acum+ itemCart.count, 0)
}
const totalProductsPrice=()=>{
    return cart.reduce((acum,itemCart)=> acum+(itemCart.item.price * itemCart.count),0)
}
const value={
cart,addToCart,removeItem,clearCart,isInCart,cantInCart,totalProductsPrice
}
return(
   <cartContext.Provider value={value}>
    {children}
   </cartContext.Provider>
)
}
export default CartContext;