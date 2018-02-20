"use strict";

import React, { Component } from "react";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>Google Maps goes here</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <p>avatar</p>
            <p>contact info</p>
            <p>social media</p>
          </div>
          <div className="col-xs-12 col-md-8">
            <form>
              <button>click me</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Projects;
