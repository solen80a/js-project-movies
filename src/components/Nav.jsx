import styled from "styled-components";
import { Media } from "../components/Media";
// import { Link, NavLink } from "react-router-dom";
import { DesktopNav } from "./DesktopNav";
import { BurgerNav } from "./BurgerNav";

//#region ---- Styling ----
const DesktopNavWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: white;

  div {
    height: 7dvh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 50px;    
    margin: 0;
    }

  @media ${Media.smallerSizes}{ 
    display: none;
  }
`;

const BurgerNavWrapper = styled.header`
  
  @media ${Media.biggerSizes}{ 
    display: none;
  }

`;
//#endregion

export const Nav = () => {
  return (
    <>
      <DesktopNavWrapper>
        <DesktopNav>
        </DesktopNav>
      </DesktopNavWrapper>

      <BurgerNavWrapper>
        <BurgerNav>
        </BurgerNav>
      </BurgerNavWrapper>
    </>
  );
};