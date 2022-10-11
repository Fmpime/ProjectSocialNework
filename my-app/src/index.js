import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const dialogsData = [
  { id: "1", name: "pasha Durov" },
  { id: "2", name: "Sacha Beliy" },
  { id: "3", name: "Kiril ustyan" },
  { id: "4", name: "Masha Medova" },
  { id: "5", name: "Lyosha Makarov" },
];
const messageData = [
  { id: "1", message: "rodine ya ne nuzhen" },
  { id: "2", message: "sila v pravde" },
  { id: "3", message: "ya livay parni" },
  { id: "4", message: "lublu cocks" },
  { id: "5", message: "lesha i zhopa toscja" },
];
const postItemData = [
  {id:'1',content:'daite mne belie crilya va utopayu v imute hcherex trrni  i provoffs v nrbo  toks nr muchicsd',heading:'filmi dla etey',likes:'12'},
  {id:'2',content:'daite chto za jizni doktor tema  i provoffs v nrbo  toks nr muchicsd',heading:'faerery',likes:'13'},
  {id:'3',content:'ya lubly nuchego ne delatn',heading:'vwfwr dla wrrr',likes:'123'},
  

]
root.render(
  <BrowserRouter>
    <App 
    dialogsData={dialogsData}
    messageData={messageData}
    postItemData={postItemData}
    />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
