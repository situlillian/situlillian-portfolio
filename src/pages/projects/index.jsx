"use strict";

import React, { Component } from "react";
import * as contentful from "contentful";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    const client = contentful.createClient({
      space: "7mu3j4uwl6w5",
      accessToken: "bdcbc77cf2e7254a92ebd8ba4bf5aa434f9910c6e2bade6aa7c4e50eb39a9938"
    });

    client
      .getEntries({})
      .then(response => {
        this.setState({
          projects: response.items
        });
      })
      .catch(console.error);
  }

  render() {
    let projects = [];
    console.log(this.state.projects);

    this.state.projects.map((item, i) => {
      let tags = [];

      item.fields.tags.map((tag, i) => {
        tags.push(
          <li key={i} className="tag">
            {tag}
          </li>
        );
      });

      let source = item.fields.sourceCode ? (
        <a href={item.fields.soureCode} target="blank">
          Source
        </a>
      ) : (
        ""
      );

      projects.push(
        <div key={i}>
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <h1>PREVIEW IMG HERE</h1>
            </div>
            <div className="col-sm-6 col-xs-12">
              <h2>
                <a href={item.fields.link} target="blank">
                  {item.fields.name}
                </a>
              </h2>
              <div>
                <p>{item.fields.description}</p>
              </div>
              <div>
                <ul className="list-unstyled skills">{tags}</ul>
                {source}
              </div>
            </div>
          </div>
        </div>
      );
    });

    return <div className="container">{projects}</div>;
  }
}

module.exports = Projects;
