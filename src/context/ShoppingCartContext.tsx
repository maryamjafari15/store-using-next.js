"use client";
import { createContext, useContext, useState } from "react";

type ShoppingCartProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  qty: number;
};
type TShoppingCartContext = {
  cartItem: CartItem[];
  handleIncreaseProductQyt: (id: number) => void;
  getProductQty: (id: number) => number;
  cartTotalQty: number;
  handleDecreaseProductQty: (id: number) => void;
  handleRemoveProduct: (id: number) => void;
};

const ShoppingCartCantext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartCantext);
};

export function ShoppingCartContextProvider({ children }: ShoppingCartProps) {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const cartTotalQty = cartItem.reduce((totalqty, item) => {
    return totalqty + item.qty;
  }, 0);

  const getProductQty = (id: number) => {
    return cartItem.find((item) => item.id == id)?.qty || 0;
  };

  const handleIncreaseProductQyt = (id: number) => {
    setCartItem((currentItem) => {
      let isNotProductExist = currentItem.find((item) => item.id == id) == null;

      if (isNotProductExist) {
        return [...currentItem, { id: id, qty: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItem((currentItem) => {
      let isLastOne = currentItem.find((item) => item.id == id)?.qty == 1;
      if (isLastOne) {
        return currentItem.filter((item) => item.id != id);
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  const handleRemoveProduct = (id: number) => {
    setCartItem((currentItem) => {
      return currentItem.filter((item) => item.id != id);
    });
  };

  return (
    <ShoppingCartCantext.Provider
      value={{
        cartItem,
        handleIncreaseProductQyt,
        getProductQty,
        cartTotalQty,
        handleDecreaseProductQty,
        handleRemoveProduct,
      }}
    >
      {children}
    </ShoppingCartCantext.Provider>
  );
}
