import styled from "styled-components";

const NavWrapper = styled.div`
height: 7dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  border-bottom: solid 3px white;
  margin: 0;
`;

export const Nav = () => {
  return (
    <NavWrapper>
      <p>Home</p>
      <p>About</p>
    </NavWrapper>
  );
};