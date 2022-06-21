import React, { FC } from "react";
import * as S from "./Navbar.style.tsx";

type Props = {
  navElts?: Array<{
    text: string;
    link: string;
    active: boolean;
  }>;
};

const navElements = [
  {
    text: "Home",
    link: "/",
    active: true,
  },
  {
    text: "Collection",
    link: "/collection",
    active: false,
  },
  {
    text: "About",
    link: "/about",
    active: false,
  },
  {
    text: "Contact",
    link: "/contact",
    active: false,
  },
];

const Logo: FC = () => {
  return (
    <S.StyledContainerLogo>
      <S.StyledLogoButton>THIS INTERIOR</S.StyledLogoButton>
    </S.StyledContainerLogo>
  );
};

const NavBar: FC<Props> = ({ navElts }) => {
  return (
    <S.StyledContainerNav>
      <S.StyledContainerLogo>
        <Logo />
      </S.StyledContainerLogo>
      <S.StyledContainer>
        {navElements.map((element, index) => {
          return (
            <S.StyledNavElement href={element.link} key={index}>
              {element.text}
            </S.StyledNavElement>
          );
        })}
      </S.StyledContainer>
    </S.StyledContainerNav>
  );
};

export default NavBar;
