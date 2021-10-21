import React from 'react';
import ReactDOM from 'react-dom';
//import FormValidation from './Components/FormValidation';
//import Home from "./Components/Home"
//import Useref from './Components/Useref';
//import App from './App';
//import Root from './Components/Root';
import reportWebVitals from './reportWebVitals';
import "./App.css"
//import ProjectThree from './Components/ProjectThree';
//import ReactForm from './Components/ReactForm';
//import ProjectTwo from './Components/ProjectTwo';
import Clock from './Components/ProjectThree';
//import ProjectOne from './Components/ProjectOne';
//import FetchBitcoin from './Components/FetchBitcoin';
//import ReactHook from './Components/ReactHook';
ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
