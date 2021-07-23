import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  padding: 26.5px 15px 0;
  justify-content: center;

  > div {
    max-width: 1120px;
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
      padding-bottom: 26.5px;
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 16px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const BackContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 23.5px;
  cursor: pointer;

  > svg {
    margin-right: 12px;
  }

  > p {
    font-family: Saira;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #617480;
  }
`;

export const CartItems = styled.div`
  > h1 {
    font-family: Saira;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    text-transform: uppercase;

    color: #41414d;
  }

  > p {
    font-family: Saira;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;

    color: #41414d;
    margin: 6px 0 23px;
  }
`;

export const CartItemsList = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding-right: 16px;
  max-height: calc(100vh - 280px);

  @media (max-width: 768px) {
    overflow-y: initial;
    padding-right: 0;
    margin-bottom: 24px;
    max-height: initial;
  }
`;

export const Resume = styled.div`
  margin-top: 13.5px;
  max-width: 352px;
  background: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px;
  height: calc(100vh - 120px);

  > h1 {
    font-family: Saira;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;

    display: flex;
    align-items: center;
    text-transform: uppercase;

    color: #41414d;
    margin-bottom: 29px;
  }

  > .resume-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    > p {
      font-family: Saira;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;

      color: #41414d;
    }
  }

  > .total-price {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 8px;
    margin-top: 12px;
    border-top: 1px solid #dce2e6;
    margin-bottom: 40px;

    > strong {
      font-family: Saira;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;

      color: #41414d;
    }
  }

  > button {
    background: #51b853;
    mix-blend-mode: multiply;
    border-radius: 4px;
    font-family: Saira;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    color: #f5f5fa;
    border: none;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  > .first-link {
    margin-top: auto;
  }

  > a {
    & + a {
      margin-top: 12px;
    }
    font-family: Saira;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;

    display: flex;
    align-items: center;
    text-decoration-line: underline;
    text-transform: uppercase;

    color: #737380;
  }
`;

export const CheckoutContainer = styled.div`
  max-width: 600px;
  min-height: 300px;
  padding: 36px;
  border-radius: 8px;
  background: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    margin: 24px 0 24px;
  }

  button {
    mix-blend-mode: multiply;
    border-radius: 4px;
    font-family: Saira;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    color: #f5f5fa;
    border: none;
    transition: filter 0.2s;
    margin: 0 auto;
    margin-top: auto;

    &:hover {
      filter: brightness(0.8);
    }

    background: #51b853;
    border: 2px solid #51b853;
  }
`;
