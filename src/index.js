import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyC5GnDOgfCgi-GrifIrWQ5QTQ2j2dbFGEY",
  authDomain: "react-coder-tienda.firebaseapp.com",
  projectId: "react-coder-tienda",
  storageBucket: "react-coder-tienda.appspot.com",
  messagingSenderId: "414452796654",
  appId: "1:414452796654:web:c17a54f5c7dce9034537ff"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode> */}
  </> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
