import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  Academic,
  Contact,
  Experience,
  Community,
  Hero,
  Navbar,
  Extracurricular,
  Hobbies,
} from './components';

const App = () => {
  const [isDarkPattern, setIsDarkPattern] = useState(false);

  
  const handleToggleClick = () => {
    setIsDarkPattern((prevIsDark) => !prevIsDark);
  };

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${isDarkPattern ? 'bg-hero-pattern-dark' : 'bg-hero-pattern'} bg-primary`}>
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar isDarkPattern={isDarkPattern} handleToggleClick={handleToggleClick} />
          <Hero />
        </div>

        <Experience />
        <Hobbies />
        <Academic />
        <Community />
        <Extracurricular />
      </div>
    </BrowserRouter>
  );
};

export default App;
