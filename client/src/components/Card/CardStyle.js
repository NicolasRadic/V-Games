import styled from "styled-components";

export const CardWrap = styled.div`
  width: 180px;
  height: 260px;
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
    height: 200px;
    width: 150px;
    background-color: lightblue;
    align-self: center;
    border-radius: 20px;
    margin-top: 15px;
  }
  h3 {
    margin: 0;
    font-size: 16px;
    white-space: nowrap;
    width: 175px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    margin: 0;
  }
`;
