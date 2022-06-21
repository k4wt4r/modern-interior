import styled from "styled-components";

export const StyledContainerNav = styled.nav`
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
  padding: 18px;
  justify-content: space-between;
`;

export const StyledContainerLogo = styled.div`
  width: 130px;
  height: 30px;
  border: 1px solid white;
`;

export const StyledContainer = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  justify-content: space-around;
`;

export const StyledNavElement = styled.a`
  padding: 6px;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  color: white;
  text-decoration: none;
`;

export const StyledLogoButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: #fdfdfd;
  border: none;
  &:focus {
    outline: 0 !important;
  }

  &:hover {
    cursor: pointer;
  }
`;
