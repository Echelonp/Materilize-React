import React from "react";
import { Parallax, Tabs, Tab, DatePicker, Checkbox } from "react-materialize";
// images
import star_img from "./img/stars.jpg";
import street_img from "./img/street.jpg";

const ParallaxMe = (props) => {
  return (
    <div>
      {/* 1st Parallax */}
      <div className="parallax-container">
        <div className="parallax">
          <Parallax
            image={<img alt="" src={street_img} />}
            options={{
              responsiveThreshold: 0,
            }}
          />
        </div>
      </div>
      <div className="container section">
        <div className="row">
          <div className="col s12 l4">
            <h2 className="indigo-text text-darken-4">What I do...</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dapibus ultrices in iaculis nunc sed augue lacus.
            </p>
          </div>
          <div className="col s12 l6 offset-l2">
            <Tabs className="tab-demo z-depth-1">
              <Tab
                options={{
                  duration: 300,
                  onShow: null,
                  responsiveThreshold: Infinity,
                  swipeable: false,
                }}
                title="Photography"
              >
                <div className="col s12">
                  <p className="flow-text indigo-text text-darken-4">
                    Photography
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Dapibus ultrices in iaculis nunc sed augue lacus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Dapibus ultrices in iaculis nunc sed augue lacus.
                  </p>
                </div>
              </Tab>
              <Tab
                active
                options={{
                  duration: 300,
                  onShow: null,
                  responsiveThreshold: Infinity,
                  swipeable: false,
                }}
                title="Editing"
              >
                <div className="col s12">
                  <p className="flow-text indigo-text text-darken-4">Editing</p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>

      {/* 2nd Parallax */}
      <div className="parallax-container">
        <div className="parallax">
          <Parallax
            image={<img alt="" src={star_img} />}
            options={{
              responsiveThreshold: 0,
            }}
          />
        </div>
      </div>

      {/* Contact Form */}
      <section className="section container">
        <div className="row">
          <div className="col s12 l5">
            <h2 className="indigo-text text-darken-4">Get In Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dapibus ultrices in iaculis nunc sed augue lacus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dapibus ultrices in iaculis nunc sed augue lacus.
            </p>
          </div>
          <div className="col s12 l5 offset-l2">
            <form>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input type="email" id="email"></input>
                <label htmlFor="email">Your E-mail</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">message</i>
                <textarea
                  id="message"
                  className="materialize-textarea"
                ></textarea>
                <label htmlFor="message">Your message</label>
              </div>

              <div className="input-field">
                <DatePicker
                  id="DatePicker-5"
                  className="center"
                  options={{
                    autoClose: false,
                    container: null,
                    defaultDate: null,
                    disableDayFn: null,
                    disableWeekends: true,
                    events: [],
                    firstDay: 0,
                    format: "mmm dd, yyyy",
                  }}
                />
                <label htmlFor="date">Choose a date you need for me...</label>
              </div>

              <div className="input-field right">
                <button className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParallaxMe;
