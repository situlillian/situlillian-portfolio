"use strict";

import React, { Component } from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className: ""
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    alert("hi");
    this.setState({ className: "scrollPast" });
  }

  render() {
    return (
      <div>
        <div className="whiteBg parallaxContainer">
          <b className="ball1 trans" />
          <b className="ball2 trans" />
          <b className="ball3 trans" />
          <b className="ball4 trans" />
          <b className="ball5 trans" />
          <b className="square1 trans" />
          <b className="square3 trans" />
          <div className="triangle trans" />
          <div className="triangle2 trans" />
          <div className="row">
            <div className="container">
              <div>
                <div id="title" className="header col-xs-12" />

                <div id="slide1" className="slide scrollPast">
                  <div className="title col-xs-12 col-md-8">
                    <h1>WHERE ARE WE NOW, AND WHERE ARE WE GOING?</h1>
                    <p>
                      Many of the problems our communities face can be solved or improved via innovations in technology and creative
                      software tools. I'm interested in impacting and improving local communities
                    </p>
                  </div>
                </div>

                <div id="slide2" className="slide scrollPast">
                  <div className="col-xs-12 col-md-4">
                    <img
                      className="imgP"
                      src="https://scontent-dfw5-1.cdninstagram.com/t51.2885-15/e35/26153710_137841810231026_1249543455424643072_n.jpg"
                    />
                    <img
                      className="imgP"
                      src="https://scontent-dfw5-1.cdninstagram.com/t51.2885-15/e35/20347209_643655809171681_6839694736949772288_n.jpg"
                    />
                  </div>
                  <div className="title col-xs-12 col-md-8">
                    <h1>ROCK CLIMBING IS A LOT LIKE LIFE.</h1>
                    <p>
                      Exploring inner and outer limits, rock climbing is exhilarating and addictive. You develop the skills, drive, and
                      resilience to overcome obstacles and achieve anything you want to.<br />
                      <br />When I'm not in front of the computer, you can find me bouldering/climbing in sunny ATX and enjoying every
                      second of it.
                    </p>
                  </div>
                </div>

                <div id="slide3" className="slide scrollPast">
                  <div className="title col-xs-12 col-md-8">
                    <h1>ETHOS</h1>
                    <p>
                      Minimalism: design can never be too simple.<br />
                      <br />You don't have to like it, but you have to try it. Then try it twice just to be sure.<br />
                      <br />There's more than one solution to every problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = About;
