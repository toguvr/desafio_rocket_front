import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  padding: 34px 15px 60px;
  justify-content: center;

  > div {
    max-width: 1120px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 0 24px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;

interface CategoryProps {
  selected: boolean;
}

export const Category = styled.div<CategoryProps>`
  /* border-bottom: ${(props) =>
    props.selected
      ? "4px solid var(--orange)"
      : "4px solid var(--gray-100)"}; */
  position: relative;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  color: ${(props) => (props.selected ? "#41414D" : "#737380")};
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      ::after {
        content: "";
        position: absolute;
        bottom: -4px;
        width: 100%;
        height: 4px;
        background: var(--orange);
      }
    `}

  & + div {
    margin-left: 40px;
    @media (max-width: 768px) {
      margin-left: 20px;
    }
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 32px 0 74px;
  row-gap: 24px;

  grid-template-columns: repeat(4, 256px);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
  }
`;
