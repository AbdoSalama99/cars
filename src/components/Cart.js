import React, { useContext } from "react";
import Porche from "../imags/BMW.png";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import { FaTrash } from "react-icons/fa";
import CartContext from "../contexts/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  //this  block of code to filter the items array from repeated items
  const counts = {};
  const uniqueArr = [];
  for (const item of cartCtx.items) {
    if (!counts.hasOwnProperty(item.name)) {
      counts[item.name] = 1;
      uniqueArr.push(item);
    } else {
      counts[item.name]++;
    }
  }
  for (const item of uniqueArr) {
    item.appearances = counts[item.name];
  }
  ////////////////////////////////////////////////
  function deleteHandler() {
    cartCtx.removeAll();
  }
  console.log(cartCtx.items);
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.cart_container}>
        <ul
          style={{ listStyle: "none", maxHeight: "77vh", overflowY: "scroll" }}
        >
          {uniqueArr.map((item, index) => {
            return (
              <li key={index}>
                <CartItem data={item} />
              </li>
            );
          })}
        </ul>
        <div className={classes.actions}>
          <button onClick={deleteHandler}>
            Delete ALL
            <div>
              <FaTrash />
            </div>
          </button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
