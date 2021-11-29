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
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/downloadResume" element={<DownloadResume />} />
        </Routes>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
