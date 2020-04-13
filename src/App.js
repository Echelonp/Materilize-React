import React from "react";
import "./App.css";
import Navme from "./Nav";
import Photoes from "./Photoes";

function App() {
  return (
    <div className="App">
      <header>
        <Navme></Navme>
      </header>
      <Photoes></Photoes>
    </div>
  );
}

export default App;
