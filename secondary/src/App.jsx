import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Navbar from "primary/Navbar";
import Footer from "primary/Footer";

const App = () => (
  <div className="container">
    <Navbar />
 <h2>Welsome to the secondry page</h2>
 <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
