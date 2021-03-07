import React from "react";
import {
  HeaderImg,
  HeaderUser,
  LogoImg,
  UserNameAndCoins,
  Modal,
  CoinAndCredits,
} from "./components";
import ReactPaginate from "react-paginate";
import headerImg from "../../assets/header-x2.png";
import logo from "../../assets/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import { usePoints, useUser } from "../../contexts";

const Header = () => {
  const [points, addPoints, addPointsStatus] = usePoints();
  const [isAddPointsModalOpen, setAddPointsModalOpen] = React.useState(false);
  const [isHistoryModalOpen, setOpenHistoryModal] = React.useState(false);
  const user = useUser();
  const [offset, setOffset] = React.useState(0);
  const [perPage] = React.useState(16);
  const [, setCurrentPage] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(0);
  const [sliceProducts, setSliceProducts] = React.useState();

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffset(offset);
  };

  React.useEffect(() => {
    const slice = user.redeemHistory.slice(offset, offset + perPage);
    setSliceProducts(slice);
    setPageCount(Math.ceil(user.redeemHistory.length / perPage));
  }, [offset, perPage]);

  const handleAddPoints = async (ammount) => {
    const result = await addPoints(ammount);
    //TODO: reemplazar el alert por un modal
    alert(
      result
        ? "se han cargado los puntos correctamente"
        : "hubo un error al cargar los puntos intentalo de nuevo mas tarde"
    );
  };
  return (
    <div>
      <HeaderUser>
        <LogoImg src={logo} alt="logo" />
        <UserNameAndCoins>
          <div onClick={() => setOpenHistoryModal(true)}>{user.name}</div>
          <CoinAndCredits onClick={() => setAddPointsModalOpen(true)}>
            <h5>{points}</h5>
            <img src={coin} alt="coin icon" />
          </CoinAndCredits>
        </UserNameAndCoins>
      </HeaderUser>
      <HeaderImg>
        <img src={headerImg} alt="HeaderImg" />
        <h1>Electronics</h1>
      </HeaderImg>
      {isAddPointsModalOpen && (
        <Modal>
          <div className="modal-content">
            <span
              onClick={() => setAddPointsModalOpen(false)}
              className="close"
            >
              &times;
            </span>
            <h4>How many points do you want to add?</h4>
            <div className="buttons-container">
              {addPointsStatus === "pending" ? (
                <p> adding points...</p>
              ) : (
                <>
                  <h5 onClick={() => handleAddPoints(1000)}>1000</h5>
                  <h5 onClick={() => handleAddPoints(5000)}>5000</h5>
                  <h5 onClick={() => handleAddPoints(7500)}>7500</h5>
                </>
              )}
            </div>
          </div>
        </Modal>
      )}
      {isHistoryModalOpen && (
        <Modal>
          <div className="modal-content">
            <span onClick={() => setOpenHistoryModal(false)} className="close">
              &times;
            </span>
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakClassName={"break-me"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
            <h4>Shopping history</h4>
            {sliceProducts.map((item) => {
              return (
                <ul>
                  <li>{item.name}</li>
                </ul>
              );
            })}
          </div>
        </Modal>
      )}
    </div>
  );
};

export { Header };
