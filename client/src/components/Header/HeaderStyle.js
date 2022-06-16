import styled from "styled-components";

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 80px;
  align-items: center;

  h1 {
    color: #0dd1db;
    flex: 1;
    margin: 0;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0;
    flex: 1;

    li {
      padding-right: 5px;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: #fff;
    }

   .nav-active {
      position: relative;

      &::after {
        content: "";
        height: 4px;
        width: 0;
        background: #0dd1db;
        position: absolute;
        border-radius: 10px;
        bottom: 0px;
        left: 50%;
        transform: translate(-54%, 4px);
        -webkit-animation: anim 0.3s ease forwards;
        animation: anim 0.6s ease forwards;

        @-webkit-keyframes anim {
          to {
            width: 100%;
          }
        }
        @keyframes anim {
          to {
            width: 100%;
          }
        }
      }
  }
`;
