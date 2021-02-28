import styled from "styled-components/macro";

export const HeaderImg = styled.div`
  position: relative;
  & img {
    width: 100%;
    max-width: 1440px;
    max-height: 300px;
  }
  & h1 {
    color: white;
    position: absolute;
    top: 50%;
    left: 100px;
    font-weight: 700;
  }
`;

export const HeaderUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
`;
export const UserNameAndCoins = styled.div`
  display: flex;
  min-width: 150px;
  justify-content: space-around;
  margin-right: 20px;
`;
export const LogoImg = styled.img`
  width: 39px;
  height: 36px;
`;

export const AddCoinsModal = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  .modal-content {
    background-color: #fefefe;
    position: relative;
    text-align: center;
    border-radius: 20px;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 400px;
  }
  .close {
    position: absolute;
    top: 3%;
    right: 3%;
    font-size: 28px;
    font-weight: bold;
  }
  .buttons-container {
    display: flex;
    justify-content: space-around;
  }

  & h5 {
    width: 20%;
    border: 1px solid #25bbf1;
    padding: 10px;
    border-radius: 25px;
  }
  & h5:hover {
    cursor: pointer;
    background: #25bbf1;
    box-shadow: 0px 1px 3px 0px #000000;
  }
  .close:hover {
    cursor: pointer;
  }
`;
