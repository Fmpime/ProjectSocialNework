

import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
import store from './redux/ReduxStore'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
const renderEntireThree = (store) => {
  root.render(
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  );
}
renderEntireThree(store);
store.subscribe(()=>{
  renderEntireThree(store)})
=======
import state, { updaterContent, updaterHead } from './redux/State'
import {addPost} from './redux/State'
import { renderEntireThree } from "./render";



renderEntireThree(state,addPost,updaterHead,updaterContent);

>>>>>>> 13df775fae716b50a420ad7c160450bd33bd1cea
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
