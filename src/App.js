import React from "react";
import "./App.css";
import SideNavMe from "./Sidenav";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav-wrapper transparent">
          <div className="container">
            <SideNavMe></SideNavMe>
            <a href="#" className="brand-logo">
              Photo Ninja
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#">Photo's</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>

            <ul className="sidenav grey lighten-2" id="mobile-menu">
              <li>
                <a href="#">Photo's</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
