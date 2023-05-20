import React, { Fragment } from "react";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Navbar from "../components/Navbar";
import styles from "../css-modules/ContactUs.module.css";
import BMW from "../imags/BMW.png";
import Mercedes from "../imags/Mercedes-Benz_free_logo.png";
import VectorLogo from "../imags/VectorLogo.png";
import Toyota from "../imags/Toyota_EU 1.png";
import Subaru from "../imags/image 262.png";
import Volov from "../imags/Volvo_logo1 1.png";
import Nassan from "../imags/Nissan_2020_logo.png";
import Suzuki from "../imags/Suzuki_logo_2 1.png";

const ContactUs = (props) => {
  return (
    <div className={styles.contact_container}>
      <Navbar
        color=" #12273D"
        ShoppingCartColor=" #741906"
        onShowCart={props.onShowCart}
      />
      <div className={styles.conatact_content}>
        <div className={styles.contactBrands}>
          <img src={BMW} />
          <img src={Volov} />
          <img src={Suzuki} />
          <img src={Toyota} />
          <img src={Nassan} />
          <img src={Mercedes} />
          <img src={Subaru} />
          <img src={VectorLogo} />
        </div>
        <div className={styles.footer}>
          <div className={styles.footer_info}>
            <h3>YourCar</h3>
            <p>
              We are known for luxurious and premium chaffeur services
              worldwide. We are simply the best you can find.
            </p>
            <p>
              we are dedicated to providing our customers with a first-class car
              buying, selling, and renting experience.
            </p>
          </div>
          <div className={styles.footer_subscripe}>
            <h3>News Letter</h3>
            <p>
              Subscribe to our news letter for updates, news and exclusive
              offers
            </p>
            <form>
              <input type="email" placeholder="Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className={styles.contactInfo}>
            <h3>contact</h3>
            <div>
              <FaMapMarkerAlt />
              <p>2038 2nd Avenue, Las Vegas, United States</p>
            </div>
            <div>
              <FaPhone />
              <div className={styles.phones}>
                <p>01444773421423</p>
                <p>01477678449405</p>
              </div>
            </div>
            <div>
              <FaEnvelope />
              <p>info@YourCar.com</p>
            </div>
          </div>
        </div>
        <div className={styles.icons_copyright}>
          <div className={styles.socail_icons}>
            <a href="#">
              <FaFacebook className={styles.socail_icon} />
            </a>
            <a href="#">
              <FaTwitter className={styles.socail_icon} />
            </a>
            <a href="#">
              <FaInstagram className={styles.socail_icon} />
            </a>
          </div>
          {/* <span className={styles.border}></span> */}
          <p className={styles.copyright}>
            © Copyright 2023 ·{" "}
            <span style={{ fontWeight: "bold" }}>YourCar</span> All rights
            reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
