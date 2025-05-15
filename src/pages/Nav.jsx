import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const NavWrapper = styled.header`
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
    margin-left: 10px;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }

  a.active {
  text-decoration: underline;
}

`;

export const Nav = () => {
  return (
    <NavWrapper>
      <h1>
        <Link to="/">CineVault</Link>
      </h1>    
      <div> 
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>          
        </ul> 
      </div>
    </NavWrapper>
  );
};