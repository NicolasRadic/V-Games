import styled from "styled-components";

export const BannerWrap = styled.div`
  background: grey;
  padding: 50px 0 25px 15px;
  color: white;

  h2 {
    margin: 0;
    font-size: 20px;
    padding-bottom: 5px;
  }

  button {
    border: none;
    padding: 8px 13px;
    border-radius: 5px;
    background-color: #0dd1db;

    a {
      text-decoration: none;
      cursor: pointer;
      color: white;
      font-weight: bolder;
    }
  }

  p {
    margin: 0;
    font-size: 20px;
    padding-top: 3px;
  }
`;
