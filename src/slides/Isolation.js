import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import List from "../components/List";

export default class extends Component {
  render() {
    return (
      <Slide>
        <Title fit={false}>Isolation</Title>
        <List
          items={["Sandboxed (separate test environment)", "Mock functions"]}
        />
      </Slide>
    );
  }
}
