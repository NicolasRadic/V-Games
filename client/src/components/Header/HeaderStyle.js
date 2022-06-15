import styled from "styled-components";

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 80px;
  align-items: center;

  h1 {
    color: #0DD1DB;
    flex:1;
    margin:0;

  }

  nav {
    flex:1;
    
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0;
  

    li {
        color: #fff;
        padding-right: 5px;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    a.nav-active {
        color: gold;
    }
`;
