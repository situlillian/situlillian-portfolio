"use strict";

import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/index.jsx";
import NotFound from "./pages/shared/404/index.jsx";
import PageHeader from "./pages//shared/header/index.jsx";
import PageFooter from "./pages/shared/footer/index.jsx";
import Projects from "./pages/projects/index.jsx";

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <PageHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
            <Route exact path="/projects" component={Projects} />
            {/* <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} /> */}
          </Switch>
          <PageFooter />
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = AppRouter;
