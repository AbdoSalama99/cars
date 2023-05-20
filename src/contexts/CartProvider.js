import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems = [];
    let flag = false;
    state.items.forEach((element) => {
      if (element.name !== action.item.name || flag !== false) {
        updatedItems.push(element);
      } else {
        flag = true;
      }
    });
    return {
      items: updatedItems,
    };
  }

  if (action.type === "REMOVEAll") {
    state.items.length = 0;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const removeAllItemsFromCartHandler = () => {
    dispatchCartAction({ type: "REMOVEAll" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeAll: removeAllItemsFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
