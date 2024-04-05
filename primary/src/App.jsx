import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => (
<div className="container">
    <Navbar />
 <h2>Welsome to the first page</h2>
 <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
