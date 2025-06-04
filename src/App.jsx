import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navbar/Navbar.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Projects from './Pages/Project/Projects.jsx';


// Lazy load only the Contact component
const Contact = lazy(() => import('./Pages/Contact/Contact.jsx'));

function App() {
  return (
    <Router>
    
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        
        {/* Lazy-loaded Contact route with Suspense boundary */}
        <Route 
          path="/contact" 
          element={
            <Suspense fallback={<div className="loading-spinner">Loading Contact Page...</div>}>
              <Contact />
            </Suspense>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;