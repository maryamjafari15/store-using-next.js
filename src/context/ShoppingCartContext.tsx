"use client"
import { createContext, use, useContext, useState } from "react";

type ShoppingCartProps = {
    children: React.ReactNode
}

type CartItem ={
    id: number,
    qty:number
}
type TShoppingCartContext ={
  cartItem: CartItem[]
}

const ShoppingCartCantext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = ()=>{
  return useContext(ShoppingCartCantext);
}

export function ShoppingCartContextProvider({ children }: ShoppingCartProps) {

    const [cartItem, setCartItem] =useState<CartItem[]>([])
  return (
    <ShoppingCartCantext.Provider value={{cartItem}}>
      {children}
    </ShoppingCartCantext.Provider>
  );
}
