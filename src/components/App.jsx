import React from "react";
import Header from "./Header";
import { hot } from "react-hot-loader";

import DadHelper from "./DadHelper";
import "./../styles/App.css";

function App() {
  return (
    <div>
      <Header />
      <DadHelper />
    </div>
  );
}

export default hot(module)(App);
