import styled from "styled-components";

export const StyledContainer = styled.div.attrs({
  isDark: (props) => props.isDark,
})`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.isDark ? "black" : "white")};
  color: ${(props) => (props.isDark ? "white" : "black")};
  display: flex;
`;

export const StyledHeader = styled.div``;
