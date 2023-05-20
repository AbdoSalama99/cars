import React, { useState, useContext } from "react";
import { FaUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import styles from "./Card.module.css";
import CartContext from "../contexts/cart-context";

const Card = (props) => {
  const cartCtx = useContext(CartContext);

  function increaseAmountHandler() {
    cartCtx.addItem(props.data);
  }

  function decreaseAmountHandler() {
    cartCtx.removeItem(props.data);
  }

  return (
    <div className={styles.card_container}>
      <img style={{ maxWidth: "80%" }} src={props.data.image} />
      <h2>{props.data.class}</h2>
      <span className={styles.name}>{props.data.name}</span>
      <p className={styles.description}>{props.data.description}</p>
      <div className={styles.card_controls}>
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
            onClick={decreaseAmountHandler}
            style={{
              borderRadius: " 5px 0px 0px 5px",
            }}
          >
            -
          </button>
          <span>{props.data.amount}</span>
          <button
            onClick={increaseAmountHandler}
            style={{
              borderRadius: " 0px 5px 5px 0px",
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
