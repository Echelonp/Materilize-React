import React from "react";
import "./App.css";
import Navme from "./Nav";
import Photoes from "./Photoes";
import ParallaxMe from "./Parallax";
import FooterMe from "./Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navme></Navme>
      </header>
      <Photoes></Photoes>
      <ParallaxMe></ParallaxMe>
      <FooterMe></FooterMe>
    </div>
  );
}

export default App;
