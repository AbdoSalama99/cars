import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import styles from "../css-modules/Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.home_container}>
      <Navbar color="white" onShowCart={props.onShowCart}  />

      <div className={styles.home_content}>
        <div className={styles.innerHome_container}>
          <h2>Find the perfect car for you at YourCar.</h2>
          <p>
            We offer a wide range of cars that cater to your needs and budget.
            Visit us today and drive away with your dream car!
          </p>
          <Link>
            <button>
              Discover
              {/* html entity for up-right arrow */}
              <div
                style={{
                  display: "inline-block",
                  marginLeft: "10px",
                  fontSize: "18px",
                }}
              >
                &#x2197;
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
