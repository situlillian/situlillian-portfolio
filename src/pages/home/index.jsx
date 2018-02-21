"use strict";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Projects from "../projects/index.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="whiteBg">
        <div className="row">
          <div className="hero col-xs-12 text-center">
            <h1>Front-end Web Developer.</h1>
            <p>
              Based out of Austin, TX. Specializing in front-end React development. Interested in solving problems. If you are a business
              seeking a web presence or an employer looking to hire, you can get in touch with me here.
            </p>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <button className="action1">
                  I need a website <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                </button>
                <button className="action2">
                  I'm looking to hire <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                </button>
              </div>
              <div className="col-xs-12 col-md-6" />
            </div>
          </div>
        </div>
        <Projects />
      </div>
    );
  }
}

module.exports = Home;
