import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navigation from './components/Navbar/Navbar.jsx';
import PortfolioLoader from './PortfolioLoader.jsx'; // 👈 Import your loader

// Pages
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Projects from './Pages/Project/Projects.jsx';
const Contact = lazy(() => import('./Pages/Contact/Contact.jsx'));


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PortfolioLoader />; // Show the animated loader
  }
   return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
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