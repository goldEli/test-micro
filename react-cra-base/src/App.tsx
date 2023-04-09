import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>我是主应用</h1>
      <a href="/my-page">去react webpack子应用</a>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
