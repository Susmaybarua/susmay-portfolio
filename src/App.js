import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Project from './Components/Projects/Project';
import DownloadResume from './Components/DownloadResume/DownloadResume';
import ContactForm from './Components/Home/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/downloadResume" element={<DownloadResume />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
