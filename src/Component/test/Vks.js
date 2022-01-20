import React, { Component } from "react";

class Vks extends Component {
  componentDidMount() {
    console.log("Component DidMount...");
  }
  componentWillMount() {
    console.log("ComponentWillMount....");
  }
  render() {
    return (
      <div>
        <h1>This is Test Component</h1>
      </div>
    );
  }
}
export default Vks;
