import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
// export { default as Navigation } from "../src/components/Navigation";
// export { default as Footer } from "../src/components/Footer";
// //export { default as Home } from "../src/components/Home";
// export { default as About } from "../src/components/About";
// export { default as Contact } from "../src/components/Contact";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();