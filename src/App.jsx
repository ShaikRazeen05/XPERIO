import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import './style.css';
import ScrollToTop from './components/ScrollToTop'; // Add this import
import { Homepage } from './components/Homepage.jsx';
import Premium from './components/Premium.jsx';
import  Food  from './components/Food.jsx';
import Culture from './components/Culture.jsx';
import Translator from './components/Translator.jsx';
import Loginpage from './components/Loginpage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <ScrollToTop /> {/* Add this component */}
      <div className="h-screen w-screen">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Premium" element={<Premium />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Culture" element={<Culture />} />
          <Route path="/Translator" element={<Translator />} />
          <Route path="/Loginpage" element={<Loginpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
