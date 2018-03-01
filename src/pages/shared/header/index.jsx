"use strict";

import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nav = [];

    // Add future links lowercase with hyphens
    ["projects", "about", "contact"].forEach((item, index) => {
      const link = "/" + item;
      nav.push(
        <li key={index}>
          <NavLink activeClassName="active" to={link}>
            <p className="text-capitalize navText">{item}</p>
          </NavLink>
        </li>
      );
    });

    return (
      <div>
        <div className="topSection">
          <div className="nameLogo">
            <Link to="/">
              <span data-letters-l="Lill" data-letters-r="ian">
                Lillian
              </span>
            </Link>
          </div>
          <p className="tagLogo">WEB DEVELOPER</p>
        </div>
        <nav className="navbar">
          <div className="container">
            <ul className="nav navbar-nav navbar-right">{nav}</ul>
          </div>
        </nav>
      </div>
    );
  }
}

module.exports = PageHeader;
