import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  const activeStyle = { color: "green"};

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact className="header-link">Home</NavLink> {" | "}
      <NavLink to="/contacts" activeStyle={activeStyle} className="header-link">Contacts</NavLink> {" | "}
      <NavLink to="/about" activeStyle={activeStyle} className="header-link">About</NavLink>
    </nav>
  )
}

export default Header;
