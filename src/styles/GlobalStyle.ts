import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  :root {
    --white: #fff;

    --gray-100: #F0F0F5;
    --gray-200: #F3F5F6;
    --gray-250: #E9E9F0;
    --gray-300: #737380;
    --gray-400: #5D5D6D;
    --gray-500: #41414D;
  
    --red: #DE3838;
    --orange: #FFA585;
    --yellow-500: #eba417;
  }

  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;


    ::-webkit-scrollbar {
        width: 7px;
        height: 7px;
      }
    ::-webkit-scrollbar-track {
      border-radius: 5px;
      background: var(--gray-250);
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
       background: var(--gray-400);
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: var(--gray-400);
    }
  }

  body{
    background: var(--gray-100);
    color: #4A4A4A;
    font-family: Saira;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,strong {
    font-weight: 500;
  }

  button{
  cursor: pointer;

  :focus{
      outline:none;
  }
}
`;

export const ToastContainerStyled = styled(ToastContainer)`
  .Toastify__toast--success {
    background: "#2DB350";
  }

  .Toastify__toast--warning {
    background: "#EBA41D";
  }

  .Toastify__toast--error {
    background: "#FF595C";
  }
`;
