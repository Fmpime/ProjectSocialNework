import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Profile from "./components/pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
