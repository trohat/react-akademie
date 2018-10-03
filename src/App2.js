import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    const arr = ["prase", "nosorožef", "hroch", "slon"];
    const list = arr.map(el => <li>{el}</li>);
    return <ul>{list}</ul>;
  }
}
/*
const App = () => <ul>{list}</ul>;
*/
export default App;
