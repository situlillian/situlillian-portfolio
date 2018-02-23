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
          <div className="container">
            <div className="col-xs-12 text-center hero">
              <div className="heroText">
                <h1>Front-end Web Developer.</h1>
                <p className="text-left">
                  Based out of Austin, TX. Specializing in front-end React development. Interested in solving problems. If you are a
                  business seeking a web presence or an employer looking to hire, you can get in touch with me here.
                </p>
              </div>
              <div className="col-xs-12 col-md-8 text-left btns">
                <button className="action1">
                  I need a website <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                </button>
                <button className="action2">
                  I'm looking to hire <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Projects />
      </div>
    );
  }
}

module.exports = Home;
