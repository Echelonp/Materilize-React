import React from "react";
import { Footer } from "react-materialize";

const FooterMe = () => {
  return (
    <div>
      <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col s12 l6">
              <h5>About Me</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col s12 l4 offset-l2">
              <h5>Connect</h5>
              <ul>
                <li>
                  <a href="#" className="grey-text text-lighten-3">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="grey-text text-lighten-3">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="grey-text text-lighten-3">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="grey-text text-lighten-3">
                    Linked
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright grey darken-4">
          <div className="container center-align">&copy; 2018 Photo Nanjas</div>
        </div>
      </footer>
    </div>
  );
};

export default FooterMe;
