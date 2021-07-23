import styled from "styled-components";

export const PageError = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      > img {
        width: 160px;
        height: 160px;
      }
    }

    > img {
      border-radius: 50%;
      object-fit: cover;
    }

    > h1 {
      font-size: 120px;

      text-shadow: 5px 3px 3px rgba(250, 250, 250, 0.1);
      font-weight: 500;
    }

    > h2 {
      font-size: 40px;

      display: flex;
      align-items: center;
      @media (max-width: 600px) {
        > svg {
          display: none;
        }
      }
    }

    > p {
      font-size: 28px;

      margin-top: 12px;
    }
  }
`;
