import styled from "styled-components";

const NavWrapper = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;
  column-gap: 50px;
`;

export const Nav = () => {
  return (
    <NavWrapper>
      <p>Home</p>
      <p>About</p>
    </NavWrapper>
  );
};