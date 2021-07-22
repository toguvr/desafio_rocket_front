import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  background: var(--white);
  display: flex;
  border-radius: 8px;
  max-height: 211px;

  @media (max-width: 768px) {
    max-height: 100%;
    flex-direction: column;
  }

  & + div {
    margin-top: 16px;
  }

  > .image-detail {
    max-width: 256px;
    width: 100%;

    @media (max-width: 768px) {
      max-width: 100%;
    }

    > div {
      border-radius: 8px 0px 0px 8px;

      @media (max-width: 768px) {
        height: 150px;
        border-radius: 8px 8px 0px 0px;
      }
    }
  }

  > .product-detail {
    padding: 16px 16px 24px 32px;
    width: 100%;
    border-radius: 0px 8px 8px 0px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      padding: 16px;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 768px) {
        margin-bottom: 16px;
      }

      > p {
        cursor: pointer;
        font-family: Saira;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 150%;

        color: #41414d;

        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
    }

    > p {
      font-family: Saira;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 150%;
      margin-top: 12px;

      color: #41414d;

      @media (max-width: 768px) {
        display: none;
      }
    }

    > div:last-child {
      margin-top: auto;

      > select {
        background: #f3f5f6;
        padding: 8px 16px 8px 12px;
        border: 1px solid #a8a8b3;
        box-sizing: border-box;
        border-radius: 8px;
        height: 40px;
        width: 65px;
        font-family: Saira;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        text-transform: uppercase;
        vertical-align: middle;
        color: #737380;
      }

      > strong {
        font-family: Saira;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;

        color: #09090a;
      }
    }

    > h3 {
      font-family: Saira;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 150%;
      color: #09090a;
    }
  }
`;
