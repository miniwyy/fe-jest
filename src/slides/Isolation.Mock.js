import React, { Component } from "react";
import { Slide } from "spectacle";
import Title from "../components/Title";
import CodeSlide from "../components/CodeSlide";

export default class extends Component {
  render() {
    return (
      <Slide>
        <CodeSlide
          {...this.props}
          lang="js"
          code={require("raw-loader!../codes/mockExample.txt")}
          fullAfterIndex={1}
          ranges={[
            { loc: [0, 3] },
            { loc: [2, 3], note: "Mock the module" },
            { loc: [5, 8], note: "Set some mock data" },
            { loc: [9, 14], note: "No need to care about axios/network fetch" }
          ]}
        >
          <Title desc="Isolated from complex dependencies">
            Mock Functions
          </Title>
        </CodeSlide>
      </Slide>
    );
  }
}
