import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
`;

interface OptionPageProps {
  selected: boolean;
}

export const OptionPage = styled.button<OptionPageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: ${(props) => (props.selected ? "#f5f5fa" : "var(--gray-250)")};
  font-family: Saira;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? 600 : "normal")};
  font-size: 16px;
  line-height: 150%;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  border-radius: 8px;
  border: ${(props) =>
    props.selected ? "1px solid var(--orange)" : "1px solid var(--gray-250)"};
  color: ${(props) => (props.selected ? "var(--orange)" : "var(--gray-300)")};
  width: 32px;
  height: 32px;

  & + button {
    margin-left: 2px;
  }
`;
