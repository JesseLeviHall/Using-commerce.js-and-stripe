import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainComponent";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <div className="gradient__bg">
        <MainComponent />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
