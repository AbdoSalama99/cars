import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import styles from "./Navbar.module.css";
import CurrentPageContext from "../contexts/current-page-context";
import CartContext from "../contexts/cart-context";

const Navbar = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ctx = useContext(CurrentPageContext);

  //get total amount to store in the cartBtn
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.length;
  //carry the status of navbar
  const [isNavOpen, setIsNavOpen] = useState(false);

  const barsClickHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  const clickHandler = () => {
    props.onShowCart();
  };
  //take color from props because the color of text in navbar change in different pages
  return (
    <div
      className={styles.nav_container}
      style={{ backgroundColor: props.backgroundColor }}
    >
      <Link
        onClick={() => ctx.onPageChange("home")}
        style={{ color: props.color }}
        className={styles.main_link}
        to="/"
      >
        <h1>YourCar</h1>
      </Link>

      <nav className={styles.nav_list}>
        <ul className={`${styles.nav_list} ${isNavOpen ? styles.open : ""}`}>
          <li>
            <Link
              style={{
                color: screenWidth >= "850" ? props.color : "white",
              }}
              className={`${styles.link} ${
                ctx.activePage === "home" ? styles.active : ""
              }`}
              to="/"
              onClick={() => ctx.onPageChange("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => ctx.onPageChange("about")}
              style={{
                color: screenWidth >= "850" ? props.color : "white",
              }}
              className={`${styles.link} ${
                ctx.activePage === "about" ? styles.active : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => ctx.onPageChange("services")}
              style={{
                color: screenWidth >= "850" ? props.color : "white",
              }}
              className={`${styles.link} ${
                ctx.activePage === "services" ? styles.active : ""
              }`}
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={() => ctx.onPageChange("cars")}
              style={{
                color: screenWidth >= "850" ? props.color : "white",
              }}
              className={`${styles.link} ${
                ctx.activePage === "cars" ? styles.active : ""
              }`}
              to="/cars"
            >
              Cars
            </Link>
          </li>
          <li>
            <Link
              onClick={() => ctx.onPageChange("contactUs")}
              style={{
                color: screenWidth >= "850" ? props.color : "white",
              }}
              className={`${styles.link} ${
                ctx.activePage === "contactUs" ? styles.active : ""
              }`}
              to="/contactUs"
            >
              Contact us
            </Link>
          </li>
        </ul>
        <button onClick={clickHandler} className={styles.Cartbtn}>
          <div className={styles.cartIcon}>
            <FaShoppingCart
              style={{ fontSize: "25px", color: props.ShoppingCartColor }}
            />
          </div>
          <span>{numberOfCartItems}</span>
        </button>
        <button onClick={barsClickHandler} className={styles.barsIcon}>
          <GrMenu />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
