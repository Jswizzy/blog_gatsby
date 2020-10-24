/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: 'normal';
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.24rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 0.2rem solid #222;
    font-weight: bold;
  }

  &.last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      background: #eee;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
    `}
  >
    <NavLink to="/">Rocket City Dev Blog</NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Home
      </NavLink>
      <NavLink to="/contact" activeClassName="current-page">
        Contact
      </NavLink>
    </nav>
  </header>
);

export default Header;
