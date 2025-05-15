import styled from "styled-components";
import { Media } from "../components/Media";
// import { Link, NavLink } from "react-router-dom";
import { DesktopNav } from "./DesktopNav copy";
import { BurgerNav } from "./BurgerNav";

//#region ---- Styling ----
const DesktopNavWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 3px white;
  padding: 0rem 2rem;

  div {
    height: 7dvh;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 50px;    
    margin: 0;
    }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  li {
    display: inline-block;
    margin: 25px;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    display: inline-block; 
    transition: transform 0.2s ease-in-out; 
  }
  
  a:hover {
 transform: scale(1.07);
  }

  a.active {
  text-decoration: underline;
  transform: scale(1.2);
  color: #fa5555;
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