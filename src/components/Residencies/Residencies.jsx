import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  const [swiperInstance, setSwiperInstance] = useState(null); // Track Swiper instance

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        {/* Attach Swiper instance */}
        <Swiper {...sliderSettings} onSwiper={(swiper) => setSwiperInstance(swiper)}>
          <SliderButtons swiper={swiperInstance} /> {/* Pass Swiper instance */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = ({ swiper }) => {
  return (
    <div className="r-buttons">
      <button onClick={() => swiper && swiper.slidePrev()}>&lt;</button> 
      <button onClick={() => swiper && swiper.slideNext()}>&gt;</button> 
    </div>
  );
};

export default Residencies;