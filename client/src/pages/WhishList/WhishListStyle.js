import styled from "styled-components";

export const WishListWrap = styled.div`
  background-color: #dddbdb;
  .content {
    min-height: 600px;
    &__title {
      text-align: center;
    }
    &__games {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }
  }
`;
