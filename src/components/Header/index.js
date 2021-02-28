import React from "react";
import {
  HeaderImg,
  HeaderUser,
  LogoImg,
  UserNameAndCoins,
  AddCoinsModal,
} from "./components";
import headerImg from "../../assets/header-x2.png";
import logo from "../../assets/aerolab-logo.svg";
import { usePoints, useUser } from "../../contexts";

const Header = () => {
  const [points, addPoints, addPointsStatus] = usePoints();
  const [isAddPointsModalOpen, setAddPointsModalOpen] = React.useState(false);
  const user = useUser();

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
          <div>{user.name}</div>
          <div onClick={() => setAddPointsModalOpen(true)}>+{points}</div>
        </UserNameAndCoins>
      </HeaderUser>
      <HeaderImg>
        <img src={headerImg} alt="HeaderImg" />
        <h1>Electronics</h1>
      </HeaderImg>
      {isAddPointsModalOpen && (
        <AddCoinsModal>
          <div className="modal-content">
            <span
              onClick={() => setAddPointsModalOpen(false)}
              className="close"
            >
              &times;
            </span>
            <h4>Cuantos puntos desea agregar ?</h4>
            <div className="buttons-container">
              {addPointsStatus === "pending" ? (
                <p> cargando puntos...</p>
              ) : (
                <>
                  <h5 onClick={() => handleAddPoints(1000)}>1000</h5>
                  <h5 onClick={() => handleAddPoints(5000)}>5000</h5>
                  <h5 onClick={() => handleAddPoints(7500)}>7500</h5>
                </>
              )}
            </div>
          </div>
        </AddCoinsModal>
      )}
    </div>
  );
};

export { Header };
