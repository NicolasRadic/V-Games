import styled from "styled-components";

export const CardWrap = styled.div`
  width: 160px;
  height: 250px;
  background-color: #a4a4a4;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  text-align: center;
  border: 2px #eaeaea solid;
  padding: 3px;
  a {
    border-radius: 20px;
    text-decoration: none;
    cursor: pointer;
    color: black;
  }

  a:hover {
    color: white;
    background-color: grey;
  }

  .gameImg {
    height: 180px;
    width: 100%;
    background-color: lightblue;
    align-self: center;
    border-radius: 17px;
    object-fit: cover;
  }
  h3 {
    margin: 0;
    font-size: 16px;
    white-space: nowrap;
    width: 175px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    align-self: center;
  }
  p {
    margin-top: 7px;
    margin-bottom: 0;
    align-self: center;
  }
`;
