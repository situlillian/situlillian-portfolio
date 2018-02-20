"use strict";

import React, { Component } from "react";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // need to set up contentful and loop through projects
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <h1>PREVIEW GOES HERE</h1>
          </div>
          <div className="col-md-6 col-xs-12">
            <h1>NAME OF PROJECT</h1>
            {/* link to the project */}
            <div>
              <p>Description of the project goes here</p>
            </div>
          </div>
        </div>
        <div className="row">
          <p>tags go here</p>
          <p>link to github or code here?</p>
        </div>
      </div>
    );
  }
}

module.exports = Projects;
