import { connect } from "react-redux";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Header from "./components/header/Header";
import LoginContainer from "./components/header/login/login/LoginContainer";
import Navbar from "./components/nav/Navbar";
import FindUsers from "./components/pages/finduser/FindUsers";
import MessagesContainer from "./components/pages/messages/MessagesContainer";
import Music from "./components/pages/music/Music";
import News from "./components/pages/news/News";
import ProfileConainer from "./components/pages/profile/ProfileContainer";
import Settings from "./components/pages/settings/Settings";
import { withRouter } from "./hoc/WithRouerHOC";
import {inicializedThunkCreator} from './redux/AppReducer.ts'
import Feching from "./components/UI/Fetching/Feching";
class App extends React.Component {
  componentDidMount() {
    this.props.inicializedThunkCreator()
  }
  render() {
    if(this.props.inicialized){
    return (
      <div className="App">
        <Header />
        <Navbar />
        <div className="app__pages__content">
          <Routes>
            <Route path="/" element={<LoginContainer />} />
            <Route path="/profile/:userId" element={<ProfileConainer />} />
            <Route path="/findusers/*" element={<FindUsers />} />

            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path="/login/*" element={<LoginContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    );}else{
      return<Feching/>
    }
  }
}
const mstp = (state)=>({
  inicialized: state.app.inicialized,
})

export default compose(connect(mstp,{inicializedThunkCreator}))(withRouter(App));
