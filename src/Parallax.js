import React from "react";
import { Parallax } from "react-materialize";

const ParallaxMe = (props) => {
  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <Parallax
            image={<img alt="" src={props.img} />}
            options={{
              responsiveThreshold: 0,
            }}
          />
        </div>
      </div>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus
          ultrices in iaculis nunc sed augue lacus. Quam nulla porttitor massa
          id neque aliquam. Ultrices mi tempus imperdiet nulla malesuada.
        </p>
      </div>
    </div>
  );
};

export default ParallaxMe;
