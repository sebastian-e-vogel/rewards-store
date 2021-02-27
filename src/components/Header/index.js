import React from "react";
import { HeaderImg, HeaderUser, LogoImg, UserNameAndCoins } from "./components";
import headerImg from "../../assets/header-x2.png";
import logo from "../../assets/aerolab-logo.svg";

const Header = () => {
  return (
    <div>
      <HeaderUser>
        <LogoImg src={logo} alt="logo" />
        <UserNameAndCoins>
          <div>nombde de usuario</div>
          <div>coins</div>
        </UserNameAndCoins>
      </HeaderUser>
      <HeaderImg>
        <img src={headerImg} alt="HeaderImg" />
        <h1>Electronics</h1>
      </HeaderImg>
    </div>
  );
};

export { Header };
