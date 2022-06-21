import * as S from "./Header.style";

const Header = () => {
  return (
    <S.StyledContainerHeader>
      <S.StyledContainerText>
        <S.StyledTitle>Modern interior</S.StyledTitle>
        <S.StyledPara>
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </S.StyledPara>
      </S.StyledContainerText>
      <S.StyledContainerImages>
        <S.StyledContainerImage
          src={require("../../../public/images/photo1.png")}
        />
      </S.StyledContainerImages>
    </S.StyledContainerHeader>
  );
};

export default Header;
