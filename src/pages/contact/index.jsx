"use strict";

import React, { Component } from "react";
import avatar from "../../styles/assets/lilliansitu.jpg";

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
          <div className="col-xs-12 col-sm-4">
            <img className="avatar" src={avatar} />
            <p>contact info</p>
            <p>social media</p>
          </div>
          <div className="col-xs-12 col-sm-8 text-right">
            <form>
              <div className="form-group">
                <input type="name" className="form-control" id="inputName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="phone" className="form-control" id="inputPhone" placeholder="Phone" />
              </div>
              <textarea className="form-control" rows="3" placeholder="Message" />
              <button type="submit" className="btn btn-default">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Projects;
