"use strict";

import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class PageFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nav = [];

    // Add future links lowercase with hyphens
    ["about", "contact"].forEach((item, index) => {
      const link = "/" + item;
      nav.push(
        <Link key={index} to={link}>
          <p className="text-uppercase navText">{item}</p>
        </Link>
      );
    });

    return (
      <div className="footer">
        <div className="col-xs-12 text-right footerNav">{nav}</div>
        <div className="container">
          <div className="row text-center">
            <div className="col-xs-12 col-md-4">
              <h4>Austin, TX</h4>
            </div>
            <div className="col-xs-12 col-md-4">
              <a href="mailto:mslilliansitu@gmail.com" target="blank">
                <h4>hello@lilliansitu.com</h4>
              </a>
            </div>
            <div className="col-xs-12 col-md-4">
              <div className="contactIcons">
                <a href="https://github.com/situlillian" target="blank">
                  <i className="fab fa-linkedin fa-2x" />
                </a>
                <a href="https://www.linkedin.com/in/situlillian/" target="blank">
                  <i className="fab fa-github fa-2x" />
                </a>
                <a href="mailto:mslilliansitu@gmail.com" target="blank">
                  <i className="fas fa-envelope fa-2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 text-left footerText">
          <p>
            ©2018. All Rights Reserved.<br />
            Core services: Web Design and Development
          </p>
        </div>
      </div>
    );
  }
}

module.exports = PageFooter;
