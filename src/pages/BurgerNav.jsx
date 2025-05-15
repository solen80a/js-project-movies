import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.nav`
    height: 60px;
    padding: 0 20px;
    background: #111;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    background: #fff;
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
    background: #222;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 80px 20px;
    gap: 20px;
    transition: right 0.3s ease;
    z-index: 1000;

    hr {
      width: 100%;
    }

    h3 {
      font-size: 30px;
      color: #a3a3a3;
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
    color: #fff;
    font-size: 24px;
    transition: color 0.2s ease;

    &.active {
      color: #f73c3c;
    }

    &:hover {
      color: #ff7b7b;
    }
  `;

export const BurgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <h1>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            CineVault
          </Link>
        </h1>
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
          <h3>Movies</h3>
          <StyledNavLink to="/Popular" onClick={() => setIsOpen(false)}>
            Popular
          </StyledNavLink>
          <StyledNavLink to="/Upcoming" onClick={() => setIsOpen(false)}>
            Upcoming
          </StyledNavLink>
          <StyledNavLink to="/Now" onClick={() => setIsOpen(false)}>
            Now Playing
          </StyledNavLink>
        </Sidebar>
      </BurgerWrapper>

      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
    </>
  );
};