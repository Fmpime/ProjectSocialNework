import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Messages from "./components/pages/messages/Messages";
import Music from "./components/pages/music/Music";
import News from "./components/pages/news/News";
import Profile from "./components/pages/profile/Profile";
import Settings from "./components/pages/settings/Music";

function App({state}) {
  
  return (
    <div className="App">
      <Header />
      <Navbar state={state.messages.dialogsData}/>
      <div className="app__pages__content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
              state= {state.profile} 
              
              />}
          />

          <Route
            path="/messages/*"
            element={
              <Messages
              state={state.messages}

              />
            }
          />

          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
