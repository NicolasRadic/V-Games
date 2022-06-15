import styled from "styled-components";

export const CardWrap = styled.div`
  width: 180px;
  height: 250px;
  background-color: #efefed;
  display: flex;
  flex-direction: column;
  border-radius: 20px;

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
    width: 180px;
    background-color: lightblue;
    align-self: center;
    border-radius: 20px;
  }
  h3 {
    margin: 0;
    font-size: 16px;
    white-space: nowrap;
    width: 175px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
  }
  p {
    margin-top: 7px;
    margin-bottom: 0;
  }
`;
