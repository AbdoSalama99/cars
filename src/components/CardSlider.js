import React, { useState, useContext } from "react";
import "./CardSlider.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import Porsche from "../imags/cars/Porsche-911.png";
import BMW from "../imags/cars/BMW.png";
import Ronge from "../imags/cars/Range_Rover.png";
import Mercedes from "../imags/cars/Mercedes.png";
import Tesla from "../imags/cars/Tesla.png";
import Bentley from "../imags/cars/Bentley_Bentayga.png";
import RongeSport from "../imags/cars/range-rover-sport.png";
import userData from "./data.json";
import CartContext from "../contexts/cart-context";

function CardSlider() {
  //this  block of code to filter the items array from repeated items
  const cartCtx = useContext(CartContext);
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
  let appearance; // pass it to the card to display it as amount

  const photos = [Porsche, BMW, Ronge, Mercedes, Tesla, Bentley, RongeSport];

  let [currentSlide, setCurrentSlide] = useState(0);
  function handlePrevSlide() {
    setCurrentSlide(currentSlide === 0 ? 0 : --currentSlide);
  }

  function handleNextSlide() {
    setCurrentSlide(
      currentSlide === userData.cars.length - 1
        ? userData.cars.length - 1
        : ++currentSlide
    );
  }

  function activateDotoHandler(index) {
    setCurrentSlide(index);
  }

  const myCarsData = userData.cars;
  return (
    <div className="card-slider">
      <div className="card-slider-content">
        {myCarsData.map((carData, index) => {
          appearance = uniqueArr.map((ele) => {
            if (carData.name === ele.name) {
              return ele.appearances;
            }
          });

          return (
            <div
              key={index}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: "transform 0.3s ease",
              }}
            >
              <Card
                data={{
                  name: carData.name,
                  class: carData.class,
                  description: carData.description,
                  seats: carData.seats,
                  luggage: carData.luggage,
                  image: photos[index],
                  amount: appearance,
                }}
              />
            </div>
          );
        })}
      </div>
      <button
        className="slider-button slider-button-prev"
        onClick={handlePrevSlide}
      >
        <AiOutlineLeft />
      </button>
      <button
        className="slider-button slider-button-next"
        onClick={handleNextSlide}
      >
        <AiOutlineRight />
      </button>

      <div className="dotos">
        {myCarsData.map((carData, index) => {
          return (
            <button
              index={index}
              className={`doto ${index === currentSlide ? "active" : ""}`}
              onClick={() => activateDotoHandler(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default CardSlider;
