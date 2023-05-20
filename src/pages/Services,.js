import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import styles from "../css-modules/Services.module.css";
import Vector from "../imags/Vector.png";
import Star from "../imags/star.png";
import Group from "../imags/Group.png";
import SectionTitle from "../components/SectionHeading";

const Services = (props) => {
  return (
    <div className={styles.services_container}>
      <Navbar
        color=" #12273D"
        ShoppingCartColor=" #741906"
        onShowCart={props.onShowCart}
      />
      <div style={{ textAlign: "center" }}>
        <SectionTitle
          title="SERVICES"
          smallTile="Services"
          titleColor="#ebebeb17"
          smallTileColor="#12273D"
        />
      </div>
      <div className={styles.services_content}>
        <div>
          <img src={Star} alt="star" />
          <h3>Car sales</h3>
          <p>
            At YourCar, we offer a wide selection of luxury vehicles for sale.
            Whether you're in the market for a sleek sports car or a spacious
            SUV, we have the perfect vehicle to fit your needs.
          </p>
        </div>
        <div>
          <img src={Group} alt="star" />
          <h3> Car rental</h3>
          <p>
            If you're in need of a luxury car rental, look no further than
            YourCar. Our fleet of high-end vehicles is regularly maintained and
            serviced to ensure that you have a safe and comfortable driving
            experience.
          </p>
        </div>
        <div>
          <img src={Vector} alt="star" />
          <h3> Car selling</h3>
          <p>
            At YourCar, we make it easy to sell your car. Simply bring your
            vehicle in for an appraisal, and we'll handle the rest. We offer
            fair prices and a hassle-free selling process, so you can get your
            vehicle with minimal effort.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
