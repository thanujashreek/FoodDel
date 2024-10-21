import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import React ,{useState} from 'react'

export const StoreContext = createContext(null)

const StoreContextProvider =(props)=>{
    const [cartItem,setCartItem]=useState({});
    const addTocart=(itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }
    const removeFromcart=(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotal=()=>{
        let totalamount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let iteminfo=food_list.find((products)=>products._id === item)
            totalamount+=iteminfo.price*cartItem[item];

            }
            
        }
        return totalamount;

    }


    const contextValue={
        food_list,
        cartItem,
        setCartItem,
        addTocart,
        removeFromcart,
        getTotal


    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default  StoreContextProvider