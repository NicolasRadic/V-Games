import styled from "styled-components";

export const PicturesSliderWrap = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .product-images-slider {
    .swiper-slide {
      padding-top: 60%;
      overflow: hidden;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }

    .swiper-button-prev {
      left: 30;
      color: rgb(255, 255, 255);
    }

    .swiper-button-next {
      right: 30;
      color: rgb(255, 255, 255);
    }
  }

  .product-images-slider-thumbs {
    .swiper-slide {
      cursor: pointer;
      border: 2px solid #dddbdb;
      border-radius: 5px;
      &-thumb-active {
        border-color: #0dd1db;
      }
    }

    &-wrapper {
      width: 100%;
      padding-top: 55%;
      overflow: hidden;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }
`;
