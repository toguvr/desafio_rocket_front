import styled from "styled-components";

export const Container = styled.div`
  width: 176px;
  display: flex;
  flex-direction: column;
  position: relative;
  > div:first-child {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > svg {
      margin-left: 16px;
    }
  }

  > .organizeOptions {
    position: absolute;
    top: 29px;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    width: 100%;
    z-index: 1;

    > p {
      font-family: Saira;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      color: #737380;
      cursor: pointer;

      & + p {
        margin-top: 4px;
      }
    }
  }
`;
