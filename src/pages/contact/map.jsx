"use strict";

import React, { Component } from "react";
import { StaticGoogleMap, Marker, Path } from "react-static-google-map";

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let key = "AIzaSyBEIu1x98HNpcjtqObMTTiniPiN4wjXy2k";

    return (
      <div className="">
        <StaticGoogleMap size="700x250" scale="2" center="30.2672225,-97.7780802" zoom="8">
          <Marker location="30.2672225,-97.7780802" color="red" label="" />
        </StaticGoogleMap>
      </div>
    );
  }
}

module.exports = Map;
