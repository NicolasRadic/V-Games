import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { PicturesSliderWrap } from "./PicturesSliderStyle";
import PropTypes from "prop-types";

const PicturesSlider = (props) => {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <PicturesSliderWrap>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt="product images" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={item.image} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </PicturesSliderWrap>
  );
};

PicturesSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default PicturesSlider;