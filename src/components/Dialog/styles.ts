import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  overflow-x: hidden;
  transition: 0.5s;
`;
