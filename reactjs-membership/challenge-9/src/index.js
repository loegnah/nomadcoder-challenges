import React from "react";
import ReactDOM from "react-dom";
import panel from "./panel";

function App() {
  return (
    <div className="App">
      <h1>Infinite Movies</h1>
      {panel()}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
