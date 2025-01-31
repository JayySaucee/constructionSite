import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import './App.css';
import SitePreparation from './pages/SitePreparation';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/sitepreparation" element={<SitePreparation/>} />
            <Route path="/gallery" element={<Gallery/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
