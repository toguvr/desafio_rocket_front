import styled from "styled-components";

export const Container = styled.header`
  background: #ffffff;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  @media (max-width: 768px) {
    height: 160px;
  }

  > div {
    max-width: 1120px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      justify-content: space-evenly;

      flex-direction: column;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 397px;
    }
  }
`;

export const Logo = styled.h1`
  cursor: pointer;
  color: var(--gray-400);
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 60px;
`;

export const SearchContent = styled.div`
  background: var(--gray-200);
  width: 100%;
  max-width: 352px;
  height: 42px;
  color: var(--gray-300);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 16px;
  border-radius: 8px;
  position: relative;

  > input {
    padding: 1px 16px 0 0;
    flex: 1;
    font-family: Saira;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    background: var(--gray-200);
    border: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ResultsContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 150px;
  overflow-y: scroll;
  position: absolute;
  top: 68px;
  z-index: 1;
  border-radius: 8px;
  width: 100%;
  max-width: 352px;
  background: var(--gray-200);

  @media (max-width: 768px) {
    top: 144px;
  }

  > div {
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;

    & + div {
      margin-top: 4px;
    }

    img {
      width: 40px;
      height: 40px;
    }
    p {
      margin-left: 8px;
    }
  }
`;

export const BagContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 24px;

  > div {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 17px;
    height: 17px;
    background: var(--red);
    color: var(--white);
    font-family: Saira;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`;
