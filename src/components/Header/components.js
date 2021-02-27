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
  min-width: 300px;
  justify-content: space-between;
  margin-right: 20px;
`;
export const LogoImg = styled.img`
  width: 39px;
  height: 36px;
`;
