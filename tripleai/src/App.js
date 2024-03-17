import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";
import {BrowserRouter as Router, Routes,Navigate, Route} from 'react-router-dom';
import CodeEditor from './components/CodeEditor';
import Chat from './components/chat';
import Forum from './components/forum';
import Code from "./components/Code";
import GlobalChat from "./components/GlobalChat";
// import YouTubePlayer from "./components/videos";
import Login from "./components/Login";
import Videos from "./components/Main";
import Study from "./components/Study";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Support from "./components/Support";
import SignUp from "./components/SignUp";
function App() {
  return (
    <Router>
      <Routes>
          <Route exact path = "/" element = {<Login/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Study" element = {<Study/>}/>
          <Route path = "/Main" element = {<Main/>}/>
          <Route path = "/HomePage" element={<HomePage/>}/>
          <Route path = "/Dashboard" element = {<Dashboard/>}/>
          <Route path="/support" element={<Support />} />
          <Route path="/profile" element={<Profile />} />
          <Route path = "/code" element = {<Code/>}/>
        {/*<Route path="/forum" element={<Forum />} />*/}
      <Route path = "/SignUp" element = {<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
