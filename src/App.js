import React from "react";
import "./App.css";
import Navme from "./Nav";
import Photoes from "./Photoes";
import ParallaxMe from "./Parallax";

// images
import star_img from "./img/stars.jpg";
import street_img from "./img/street.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <Navme></Navme>
      </header>
      <Photoes></Photoes>
      <ParallaxMe img={street_img}></ParallaxMe>
      <ParallaxMe img={star_img}></ParallaxMe>
    </div>
  );
}

export default App;
