import { createContext, useEffect, useState } from "react";
import { products } from '../assets/img/index'
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

const CartContextProvider = (props) => {

  const moneda = '$';
  //const cantidad = 0;
  const cargo_envio = 5000;
  const [search,setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [cartItems, setCartItems] = useState({})
  const navigate = useNavigate()

  const addToCart = async (itemId) => {

    let cartData = structuredClone(cartItems)

    if(cartData[itemId]){
      if(cartData[itemId]){
        cartData[itemId] +=1
      }
      else{
        cartData[itemId] = 1
      }
    }
    else{
      cartData[itemId] = {}
      cartData[itemId] = 1
    }
    setCartItems(cartData)
  }

/*  const getCartCount = () =>{
    let totalCount = 0
    for(const items in cartItems){
      console.log(cartItems)
      for(const item in cartItems[items]){
        console.log(`item ${item}`)
        try{
          if(cartItems[items][item] > 0){
            totalCount += cartItems[items][item]
          }
        } catch(error){
        }
      }
    }
    return totalCount
  }
*/
  const getCartCount = () =>{
    let totalCount = 0
    for(const items in cartItems){
      //console.log(cartItems[items])
      try{
        if(cartItems[items] > 0){
          totalCount += cartItems[items]
        }
      } catch(error){}
    }
    return totalCount
  }

  const updateCantidad = async (itemId, cantidad) => {

    let cartData = structuredClone(cartItems)

    cartData[itemId] = cantidad

    setCartItems(cartData)
  }

  const getCartAmount = async => {
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product)=> product._id === items)
      try{
        if( cartItems[items] > 0){
          totalAmount += itemInfo.precio * cartItems[items]
        }
      } catch(error){
      }
    }
    return totalAmount
  }


  const value = {
    products, moneda, cargo_envio,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount, updateCantidad, getCartAmount,navigate
  }

  return(
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  )

}

export default CartContextProvider;