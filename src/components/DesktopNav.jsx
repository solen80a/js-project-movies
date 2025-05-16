import styled from "styled-components";
import { Media } from "./Media";
import { Link, NavLink } from "react-router-dom";

const Wrapper = styled.div`

width: 100%;

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
    color: #000000;
    text-decoration: none;
    display: inline-block; 
    transition: transform 0.2s ease-in-out; 
    font-size: 18px;

  }
  
  a:hover {
 transform: scale(1.02);
  }

  a.active {
  /* text-decoration: underline; */
  transform: scale(1.02);
  color: #000000;
  font-weight: bold;
}

/* h2{
  font-size: 30px;
} */

`
const StyledLink = styled(Link)`
  && {
    font-size: 22px;
  }
`;


export const DesktopNav = () => {
  return (
    <Wrapper>
      <div>
        <h2>
          <StyledLink to="/">CineVault</StyledLink>
        </h2>
        <ul>
          <li>
            <NavLink to="/">English</NavLink>
          </li>
          <li>
            <NavLink to="/es-ES">Spanish</NavLink>
          </li>
          <li>
            <NavLink to="/ru-RU">Russian</NavLink>
          </li>
        </ul>

      </div>

      <NavLink to="/about">About</NavLink>


    </Wrapper>
  );
};