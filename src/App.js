import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h5 className="center-align">Center aliment</h5>
        <h5 className="left-align">Left aliment</h5>
        <h5 className="right-align">Right aliment</h5>
      </div>

      <div className="container grey lighten-2 box valign-wrapper">
        <h5>Vertical aliment</h5>
      </div>

      <div className="container">
        <p className="truncate">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus
          ultrices in iaculis nunc sed augue lacus. Quam nulla porttitor massa
          id neque aliquam. Ultrices mi tempus imperdiet nulla malesuada. Eros
          in cursus turpis massa tincidunt dui ut ornare lectus. Egestas sed sed
          risus pretium. Lorem dolor sed viverra ipsum. Gravida rutrum quisque
          non tellus. Rutrum tellus pellentesque eu tincidunt tortor. Sed
          blandit libero volutpat sed cras ornare. Et netus et malesuada fames
          ac. Ultrices eros in cursus turpis massa tincidunt dui ut ornare.
          Lacus sed viverra tellus in. Sollicitudin ac orci phasellus egestas.
          Purus in mollis nunc sed. Sollicitudin ac orci phasellus egestas
          tellus rutrum tellus pellentesque. Interdum consectetur libero id
          faucibus nisl tincidunt eget.
        </p>
      </div>

      <div className="container">
        <h4>Button</h4>
        <a href="#" className="btn wave-effect wave-dark">
          Normal Button
        </a>
        <a href="#" className="btn indigo wave-effect wave-light">
          Indigo Button
        </a>
        <a href="#" className="btn disabled">
          Disable Button
        </a>
      </div>

      <div className="container">
        <h4>Icon</h4>
        <i className="material-icons red-text">error</i>
        <a href="#" className="btn indigo">
          <span>Send</span>
          <i className="material-icons right">send</i>
        </a>
      </div>
    </div>
  );
}

export default App;
