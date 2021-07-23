import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  padding: 28px 15px 90px;
  justify-content: center;

  > div {
    max-width: 1120px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const BackContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
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

export const ItemContainer = styled.div`
  display: flex;
  align-items: stretch;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  > div:first-child {
    max-width: 640px;
    width: 100%;
    border-radius: 4px;

    @media (max-width: 768px) {
      img {
        height: 300px;
      }
    }
  }

  > div:last-child {
    margin-left: 32px;
    max-width: 448px;
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 8px;
    }

    > .category {
      font-family: Saira;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #41414d;
    }

    > h1 {
      font-family: Saira;
      font-style: normal;
      font-weight: 300;
      font-size: 32px;
      line-height: 48px;
      color: #41414d;
      margin: 12px 0 4px;
    }

    > h2 {
      font-family: Saira;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;

      color: #09090a;
    }

    > small {
      font-family: Saira;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 18px;

      margin: 24px 0 58px;
      color: #41414d;
    }

    > .description-title {
      font-family: Saira;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 8px;
      color: #737380;
    }

    > span {
      font-family: Saira;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: #41414d;
    }

    > button {
      width: 100%;
      background: #115d8c;
      mix-blend-mode: multiply;
      border-radius: 4px;
      margin-top: auto;
      font-family: Saira;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      text-transform: uppercase;
      padding: 10px;
      color: #f5f5fa;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      @media (max-width: 768px) {
        margin-top: 24px;
      }

      > svg {
        margin-right: 12px;
      }
    }
  }
`;
