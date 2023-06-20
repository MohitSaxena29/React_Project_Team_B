// import React from "react";
// import  ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
// import App from "./App";
// ReactDOM.render(
//   <BrowserRouter><App/></BrowserRouter>
//   ,
//     document.getElementById("root")
// )
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';




const rootElement = document.getElementById("root");

ReactDOM.render(

  <StrictMode>

    <App />

  </StrictMode>,

  rootElement

);