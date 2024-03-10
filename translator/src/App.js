import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";      
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import TextToSpeech from './components/TextToSpecch/TextToSpeech';
import Tranlator from './components/Translator/Tranlator';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="texttospeech" element={<TextToSpeech/>} />
        <Route path="translator" element={<Tranlator/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
