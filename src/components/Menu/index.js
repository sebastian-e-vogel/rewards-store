import React from "react";
import {
  MenuContainerStyled,
  FiltersContainer,
  FilterButton,
  Wrapper,
} from "./components";
import { useProducts } from "../../contexts";
import ReactPaginate from "react-paginate";

import { Card } from "../Card";
import "./styles.css";

const Menu = () => {
  const products = useProducts();
  const [selectedFilter, setSelectedFilter] = React.useState("Most recent");
  const [sliceProducts, setSliceProducts] = React.useState();
  const [offset, setOffset] = React.useState(0);
  const [perPage, setPerPage] = React.useState(16);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(0);

  React.useEffect(() => {
    const slice = products.slice(offset, offset + perPage);
    setSliceProducts(slice);
    setPageCount(Math.ceil(products.length / perPage));
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffset(offset);
  };

  const filteredProducts = React.useMemo(() => {
    switch (selectedFilter) {
      case "Highest price": {
        return [...sliceProducts].sort((a, b) => b.cost - a.cost);
      }

      case "Lowest price": {
        return [...sliceProducts].sort((a, b) => a.cost - b.cost);
      }

      case "Most recent":
      default: {
        return sliceProducts;
      }
    }
  }, [selectedFilter, sliceProducts]);

  const Filters = ["Most recent", "Lowest price", "Highest price"];

  return (
    <>
      <MenuContainerStyled>
        <FiltersContainer>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakClassName={"break-me"}
            pageCount={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
          <div className="qtyProducts">
            {(currentPage + 1) * 16} of {products.length} products
          </div>
          <div>Sort by:</div>
          {Filters.map((filter) => (
            <FilterButton
              key={filter}
              active={filter === selectedFilter ? true : false}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </FiltersContainer>
      </MenuContainerStyled>
      <Wrapper>
        {sliceProducts &&
          filteredProducts.map((product) => {
            return <Card product={product} />;
          })}
      </Wrapper>
    </>
  );
};

export { Menu };
