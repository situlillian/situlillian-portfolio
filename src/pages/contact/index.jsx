"use strict";

import React, { Component } from "react";
import avatar from "../../assets/lilliansitu.jpg";
import Map from "./map.jsx";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="whiteBg">
        <div className="row">
          <div className="container">
            <div className="col-xs-12">
              <h1> SOMETHING GOES HERE</h1>
              <br />
            </div>
            <div className="col-xs-12 col-sm-4 text-center">
              <img className="avatar" src={avatar} />
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
      </div>
    );
  }
}

module.exports = Contact;
