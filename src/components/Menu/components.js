import styled from "styled-components/macro";

export const MenuContainerStyled = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

export const FiltersContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-around;
  align-items: center;
`;

export const FilterButton = styled.button`
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: black;
  height: 30px;
  text-align: center;
  justify-content: center;
  background: ${(props) => (props.active ? "#0ad4fa" : "none")};
  border-color: ${(props) => (props.active ? "#0ad4fa" : "none")};
  opacity: 0.7;
  margin-left: 5px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;
