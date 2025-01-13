import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FeaturedWork from './pages/FeaturedWork';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/featured" element={<FeaturedWork/>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
