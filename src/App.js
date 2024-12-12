import React from "react";
import PatternGen from "./PatternGen";

const App = () => {
  return (
    <div >
      <h1>Center</h1>
      <PatternGen type="centered" />
      <h1>left</h1>
      <PatternGen type="left" />
      <h1>custom</h1>
      <PatternGen type="custom" />
      <h1>Right</h1>
      <PatternGen type="right" />
    </div>
  );
};

export default App;
