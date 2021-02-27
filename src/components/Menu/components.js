import styled from "styled-components/macro";

export const MenuContainerStyled = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

export const FiltersContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  align-items: center;
`;

export const FilterButton = styled.button`
  height: 40px;
  text-align: center;
  justify-content: center;
  background: ${(props) => (props.active ? "#0ad4fa" : "lightgrey")};
  border-color: ${(props) => (props.active ? "#0ad4fa" : "lightgrey")};
  border-radius: 40px;
  opacity: 0.7;
  cursor: pointer;
`;
