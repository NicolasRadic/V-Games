import styled from "styled-components";

export const GamePageWrap = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;

  .content {
    padding: 0 15px;

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
    }

    &__acheter {
      text-decoration: none;
      cursor: pointer;
    }

    &__butAcheter {
      border: none;
      width: 100%;
      height: 36px;
      border-radius: 5px;
      background-color: #0dd1db;
      color: white;
      font-size: large;
      font-weight: bolder;
    }

    &__butSouhaits {
      border: solid;
      border-radius: 5px;
      width: 100%;
      height: 36px;
      margin-top: 5px;
      font-weight: bold;
    }

    &__details {
      display: flex;
      justify-content: space-between;
      border-bottom: solid;
      border-color: #959494;
    }
  }
`;
