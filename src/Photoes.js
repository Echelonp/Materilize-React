import React from "react";
// images
import portrait from "./img/portrait.jpg";
import city_img from "./img/city.jpg";
import nature_img from "./img/nature.jpg";

const Photoes = () => {
  return (
    <div>
      {/* Photo /grid */}
      <section className="container section" id="photoes">
        <div className="row">
          <div className="col s12 m6 14 ">
            <img src={portrait} className="responsive-img"></img>
          </div>
          <div className="col s12 m5  16 offset-l1">
            <h2 className="indigo-text text-darken-4">Portraits</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dapibus ultrices in iaculis nunc sed augue lacus. Quam nulla
              porttitor massa id neque aliquam. Ultrices mi tempus imperdiet
              nulla malesuada.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12  m6 14 push-l7">
            <img src={city_img} className="responsive-img"></img>
          </div>
          <div className="col s12  m5 16 pull-l6 right-align">
            <h2 className="indigo-text text-darken-4">City</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dapibus ultrices in iaculis nunc sed augue lacus. Quam nulla
              porttitor massa id neque aliquam. Ultrices mi tempus imperdiet
              nulla malesuada.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 14">
            <img src={nature_img} className="responsive-img"></img>
          </div>
          <div className="col s12  m5 16 offset-l1">
            <h2 className="indigo-text text-darken-4">Nature</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dapibus ultrices in iaculis nunc sed augue lacus. Quam nulla
              porttitor massa id neque aliquam. Ultrices mi tempus imperdiet
              nulla malesuada.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photoes;
