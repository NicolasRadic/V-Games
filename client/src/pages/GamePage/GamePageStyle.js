import styled from "styled-components";

export const GamePageWrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #dddbdb;

  .content {
    padding: 0 15px;
    padding-bottom: 20px;

    h2 {
      align-self: left;
    }

    &__rating {
      font-weight: bolder;
    }

    img {
      width: 100%;
      align-self: center;
      border-radius: 5px;
      display: block;
    }

    &__acheter {
      text-decoration: none;
      cursor: pointer;
    }

    &__butAcheter {
      border: none;
      border-radius: 5px;
      width: 100%;
      height: 36px;
      background-color: #0dd1db;
      margin-top: 8px;
      color: white;
      font-size: large;
      font-weight: bolder;
    }

    &__butWish {
      border: solid;
      border-radius: 5px;
      width: 100%;
      height: 36px;
      margin-top: 8px;
      font-weight: bold;
    }

    &__details {
      display: flex;
      justify-content: space-between;
      border-bottom: solid;
      border-color: #959494;
    }

    &__platforms {
      display: flex;
    }

    &__togglePlatform {
      margin-top: 20px;
      margin-left: 5px;
    }

    &__slidercontainer {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__slider {
      width: 100%;

      padding-top: 20px;
    }
    &__synopsis {
      overflow: hidden;
      font-size: large;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      &--toggled {
        display: block;
        font-size: large;
      }
    }
    &__type {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
    &__gendertag {
      width: 50%;
      padding-left: 10px;
      border-left: 2px solid #bbb;
    }
    &__typetitle {
      font-size: large;
      font-weight: 900;
      margin: 0;
    }
  }
`;
