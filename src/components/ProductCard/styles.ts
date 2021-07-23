import styled from "styled-components";

export const Container = styled.div`
  width: 256px;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }

  > div:first-child {
    flex: 1;
    border-radius: 4px 4px 0px 0px;
  }
  > div:last-child {
    height: 78px;
    padding: 8px 16px 8px 12px;
    backdrop-filter: blur(20px);
    border-radius: 0px 0px 4px 4px;

    > p {
      font-family: Saira;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 150%;

      color: #41414d;
      padding-bottom: 8px;
      margin-bottom: 8px;

      border-bottom: 1px solid #dce2e6;
    }

    > strong {
      font-family: Saira;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 150%;
      color: #09090a;
    }
  }
`;
