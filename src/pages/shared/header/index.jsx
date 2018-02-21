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
    ["home", "contact", "about"].forEach((item, index) => {
      const link = "/" + item;
      nav.push(
        <li key={index}>
          <NavLink activeClassName="active" to={link}>
            <p className="text-uppercase navText">{item}</p>
          </NavLink>
        </li>
      );
    });

    return (
      <div>
        <div className="top">
          <p className="text-right">Lillian Situ</p>
        </div>
        <nav className="navbar">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              LS
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">{nav}</ul>
            {/* <!-- /.navbar-collapse --> */}
          </div>
        </nav>
      </div>
    );
  }
}

module.exports = PageHeader;
