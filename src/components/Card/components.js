import styled from "styled-components/macro";

export const CardContainer = styled.div`
  display: flex;
  background-color: white;
  max-width: 350px;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-right: 15px;
  margin-left: 15px;
  padding: 10px;
  button {
    width: 50%;
    height: 30px;
    background: transparent;
    border: 2px solid #0ad4fa;
    transition: all 0.5s ease-out;
    & :hover {
      background-color: #0ad4fa;
      cursor: pointer;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  max-width: 350px;
  justify-content: center;
`;
