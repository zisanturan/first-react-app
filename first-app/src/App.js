import React from "react";
import "./App.css";
import Navbar, { Alt_Navbar } from "./components/navbar";
import Govde from "./components/body";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Alt_Navbar></Alt_Navbar>
      <Govde></Govde>
    </div>
  );
}

export default App;
