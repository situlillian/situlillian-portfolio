"use strict";

import React, { Component } from "react";

class PageFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer text-right">
        <p className="brand">Lillian Situ</p>
        <p>
          ©2018. All Rights Reserved.<br />
          Core services: Web Design and Development
        </p>
      </div>
    );
  }
}

module.exports = PageFooter;
