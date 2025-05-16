import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.nav`
    height: 60px;
    padding: 0 20px;
    background: white;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: black;
      text-decoration: none;
    }
  `;

const Burger = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 6px;
  `;

export const Bar = styled.div`
    width: 25px;
    height: 3px;
    background: #000000;
    border-radius: 2px;
    transition: all 0.3s ease;

    ${({ open }) =>
    open &&
    `
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    `}
  `;

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-250px")};
    width: 250px;
    height: 100vh;
    background: white;
    color: #000000;
    display: flex;
    flex-direction: column;
    padding: 80px 20px;
    gap: 20px;
    transition: right 0.3s ease;
    z-index: 1000;

    hr {
      width: 100%;
      color: black
    }

  `;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  `;

const BurgerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 200px;
  `;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #000000;
    font-size: 18px;
    transition: color 0.2s ease;

  

    &:hover {
      color: #2c2c2c;
      transform: scale(1.03);
      transition: ease .3s;
   
    }

      &.active {
      color: #000000;
      font-weight: bold;
    }
  `;

export const BurgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <h2>
          <Link to="/">
            CineVault
          </Link>
        </h2>
        <Burger onClick={() => setIsOpen(!isOpen)}>
          <Bar open={isOpen} />
          <Bar open={isOpen} />
          <Bar open={isOpen} />
        </Burger>
      </Nav>

      <BurgerWrapper>
        <Sidebar open={isOpen}>
          <StyledNavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </StyledNavLink>
          <StyledNavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </StyledNavLink>
          <hr />
          <StyledNavLink to="/" onClick={() => setIsOpen(false)}>
            🇺🇸 English
          </StyledNavLink>
          <StyledNavLink to="/es-ES" onClick={() => setIsOpen(false)}>
            🇪🇸 Spanish
          </StyledNavLink>
          <StyledNavLink to="/ru-RU" onClick={() => setIsOpen(false)}>
            🇷🇺 Russian
          </StyledNavLink>
        </Sidebar>
      </BurgerWrapper>

      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
    </>
  );
};