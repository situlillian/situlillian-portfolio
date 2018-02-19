"use strict";

require("./styles/main.scss");

import React, { Component } from "react";
import Router from "./router.jsx";
import ReactDOM from "react-dom";

ReactDOM.render(<Router />, document.getElementById("container"));
