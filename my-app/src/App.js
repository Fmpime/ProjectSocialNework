import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import LoginContainer from "./components/header/login/login/LoginContainer";
import Navbar from "./components/nav/Navbar";
import FindUsers from "./components/pages/finduser/FindUsers";
import MessagesContainer from "./components/pages/messages/MessagesContainer";
import Music from "./components/pages/music/Music";
import News from "./components/pages/news/News";
import ProfileConainer from "./components/pages/profile/ProfileContainer";
import Settings from "./components/pages/settings/Music";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar/>
      <div className="app__pages__content">
        <Routes>
          <Route
            path="/profile/:userId"
            element={
              <ProfileConainer />}
          />
          <Route
            path="/findusers/*"
            element={
              <FindUsers/>}
          />

          <Route
            path="/messages/*"
            element={
              <MessagesContainer
              />
            }/>
          <Route
            path="/login/*"
            element={
              <LoginContainer
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
