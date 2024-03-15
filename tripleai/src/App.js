import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";
import {BrowserRouter as Router, Routes,Navigate, Route} from 'react-router-dom';
import CodeEditor from './components/CodeEditor';
import Chat from './components/chat';
import Forum from './components/forum';
import Code from "./components/code"
import YouTubePlayer from "./components/videos";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<YouTubePlayer/>}/>
        {/*<Route path="/code-editor" element={<CodeEditor />} />*/}
        {/*<Route path="/cha/t" element={<Chat />} />*/}
        {/*<Route path="/forum" element={<Forum />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
