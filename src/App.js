import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./Input";

const binaryValues = [1, 2, 4, 8, 16, 32, 64, 128];

class App extends React.Component {
  evaluateBinary = byte => {
    var i;
    const toBeEvaluated = byte
      .toString()
      .split("")
      .map(Number);
    console.log(toBeEvaluated);
    let runningTotal = 0;
    for (i = 0; i <= 7; i++) {
      if (toBeEvaluated[i] === 1) {
        runningTotal += binaryValues[i];
      } else {
      }
    }
    console.log(runningTotal);
  };

  render() {
    return (
      <div className="App">
        <Input submit={this.evaluateBinary} placeholder="byte" />
      </div>
    );
  }
}

export default App;
