import React from "react";
import SideNavMe from "./Sidenav";

const Navme = () => {
  return (
    <nav className="nav-wrapper transparent">
      <div className="container">
        <SideNavMe></SideNavMe>
        <a href="#" className="brand-logo">
          Photo Ninja
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="#photoes">Photo's</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="#"
              className="tooltipped btn-floating btn-small indigo darken-4"
              data-tooltip="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tooltipped btn-floating btn-small indigo darken-4"
              data-tooltip="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tooltipped btn-floating btn-small indigo darken-4"
              data-tooltip="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navme;
