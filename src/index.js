import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import Css
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/swipe.css";
import "./assets/css/app.css";
import "./assets/css/pixel.css";
import "./assets/css/glipe.css";
// import "./assets/css/leaflet.css";
// import "./assets/css/space.css";

// Import Js
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "headroom.js/dist/headroom.min.js";
import "onscreen/dist/on-screen.umd.min.js";
import "smooth-scroll/dist/smooth-scroll.polyfills.min.js";

// import './assets/js/glipe.min.js';
// import './assets/js/pixel.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
