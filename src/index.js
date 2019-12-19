import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE
};

const appJsx = (
  <HashRouter>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </HashRouter>
);

ReactDOM.render(appJsx, document.getElementById("root"));

