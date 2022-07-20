import styled from "styled-components";

export const FooterWrap = styled.div`
  background-color: black;

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    &__link {
      text-decoration: none;
      color: white;
    }
  }

  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;

    &__title {
      color: white;
    }

    &__support {
      padding-left: 5px;
      text-decoration: none;
      color: white;
    }
  }
`;
