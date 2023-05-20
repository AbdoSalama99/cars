import React from "react";
import Navbar from "../components/Navbar";
import styles from "../css-modules/Car.module.css";
import CardSlider from "../components/CardSlider";
import car1 from "../imags/New folder/Car (1).png";
import car2 from "../imags/New folder/Car (2).png";
import car3 from "../imags/New folder/Car (3).png";
import car4 from "../imags/New folder/Car (4).png";
import car5 from "../imags/New folder/Car (5).png";
import car6 from "../imags/New folder/Car (6).png";
import car7 from "../imags/New folder/Car (7).png";
import car from "../imags/New folder/Car.png";
import rectangle from "../imags/New folder/Rectangle 2.png";
import Bentley_Bentayga from "../imags/cars/Bentley_Bentayga.png";
import { Link } from "react-router-dom";
import TestimonialSlider from "../components/TestimonialSlider";
import SectionHeading from "../components/SectionHeading";

const Cars = (props) => {
  return (
    <div className={styles.cars_container}>
      <Navbar
        color=" #12273D"
        ShoppingCartColor=" #741906"
        onShowCart={props.onShowCart}
      />
      <CardSlider></CardSlider>
      {/* //////////////////////////////////////////////////// */}
      <div className={styles.min_container}>
        <div className={`${styles.img_container}`}>
          <img src={car1} />
        </div>
        <div className={`${styles.img_container} ${styles.not_centered}`}>
          <img src={car2} />
        </div>
        <div className={`${styles.img_container} ${styles.not_centered}`}>
          <img src={car3} />
        </div>
        <div className={`${styles.img_container} ${styles.not_centered}`}>
          <img src={car4} />
        </div>

        <div className={styles.img_container}>
          <img src={rectangle} />
          <div className={styles.text}>
            <h3>Tesla Model 3</h3>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <Link to="/contactUs" className={styles.contactLink}>
              Contact
            </Link>
          </div>
        </div>
        <div className={`${styles.img_container} ${styles.not_centered}`}>
          <img src={car5} />
        </div>
        <div className={`${styles.img_container} ${styles.not_centered}`}>
          <img src={car6} />
        </div>
        <div className={styles.img_container}>
          <img src={car7} />
        </div>
        <div className={`${styles.img_container} ${styles.not_centered}`}>
          <img src={car} />
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////// */}
      <div className={styles.Testimonials}>
        <div style={{ textAlign: "center" }}>
          <SectionHeading
            title="TESTIMONIALS"
            smallTile="Testimonials"
            titleColor="#f9f9f91c"
            smallTileColor="#FFF"
          />
        </div>
        <TestimonialSlider />
        <img className={styles.img} src={Bentley_Bentayga} />
      </div>
    </div>
  );
};
export default Cars;
