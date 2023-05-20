import React, { useContext } from "react";
import classes from "./CartIem.module.css";
import { FaUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import styles from "./Card.module.css";
import CartContext from "../contexts/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  function increaseItem(event) {
    const name = event.currentTarget
      .closest(".CartIem_item_container__14Cpe")
      .querySelector("p").textContent;

    let element;
    cartCtx.items.forEach((ele) => {
      if (ele.name === name) {
        element = ele;
      }
    });
    cartCtx.addItem(element);
  }

  function decreaseItem(event) {
    const name = event.currentTarget
      .closest(".CartIem_item_container__14Cpe")
      .querySelector("p").textContent;

    let element;
    cartCtx.items.forEach((ele) => {
      if (ele.name === name) {
        element = ele;
      }
    });
    cartCtx.removeItem(element);
  }

  return (
    <div className={classes.item_container}>
      <div className={classes.content}>
        <h3>{props.data.class}</h3>
        <p>{props.data.name}</p>
        <div
          style={{ flexDirection: "column", gap: "10px" }}
          className={styles.card_controls}
        >
          <div className={styles.logos}>
            <span>
              <FaUser />
              {props.data.seats} seats
            </span>
            <span>
              <BsBag />
              {props.data.luggage} luggage
            </span>
          </div>
          <div className={styles.controlKeys}>
            <button
              onClick={decreaseItem}
              style={{
                borderRadius: " 5px 0px 0px 5px",
              }}
            >
              -
            </button>
            <span>{props.data.appearances}</span>
            <button
              onClick={increaseItem}
              style={{
                borderRadius: " 0px 5px 5px 0px",
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
