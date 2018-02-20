"use strict";

import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nav = [];

    // Add future links lowercase with hyphens
    ["projects", "contact", "about"].forEach((item, index) => {
      nav.push(
        <li key={index}>
          <NavLink exact activeClassName="active" to="{`/${item}`}">
            <p className="navText">{item.replace("-", " ")}</p>
          </NavLink>
        </li>
      );
    });

    return (
      // bootstrap ??
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/">
              <p className="logo">LS</p>
            </Link>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink activeClassName="active" to="/projects">
                  <p className="navText">Projects</p>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/contact">
                  <p className="navText">Contact</p>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/about">
                  <p className="navText">About</p>
                </NavLink>
              </li>
              {/* {nav} */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

module.exports = PageHeader;
