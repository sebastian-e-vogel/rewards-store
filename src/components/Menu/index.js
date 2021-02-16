import React from "react";
import {
  MenuContainerStyled,
  FiltersContainer,
  FilterButton,
} from "./components";

const Menu = () => {
  return (
    <MenuContainerStyled>
      <FiltersContainer>
        <div>16 of 32 products</div>
        <div>Sory by:</div>
        <FilterButton active>most recent</FilterButton>
        <FilterButton>lowest price</FilterButton>
        <FilterButton>highest price</FilterButton>
      </FiltersContainer>
    </MenuContainerStyled>
  );
};

export { Menu };
