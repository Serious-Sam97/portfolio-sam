import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <div className="font-sans text-white bg-gray-900 min-h-screen">
      <Home />
      <Projects />
      <Resume />
      <About />
      <Contact />
    </div>
  );
};


export default App;
