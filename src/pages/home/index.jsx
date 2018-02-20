"use strict";

import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>the hero img goes here</h1>
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <button>CLICK HERE</button>
              </div>
              <div className="col-xs-12 col-md-12">
                <button>CLICK HERE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
