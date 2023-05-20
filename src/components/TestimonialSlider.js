import React, { useState } from "react";
import TestimonialCard from "./TestmonialCard";
import userData from "./data.json";
import styles from "./TestimonialsSlider.module.css";

const TestimonialSlider = (props) => {
  let [currentSlide, setCurrentSlide] = useState(0);
  function activateDotoHandler(index) {
    setCurrentSlide(index);
    console.log(currentSlide);
  }

  return (
    <div className={styles.testimonials_container}>
      {userData.testimonials.map((ele, index) => {
        return (
          <div
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: "transform 0.3s ease",
            }}
          >
            <TestimonialCard description={ele.description} name={ele.name} />
          </div>
        );
      })}
      <div className={styles.dotos}>
        {userData.testimonials.map((carData, index) => {
          return (
            <button
              index={index}
              className={`${styles.doto} ${
                index === currentSlide ? styles.active : ""
              }`}
              onClick={() => activateDotoHandler(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
export default TestimonialSlider;
