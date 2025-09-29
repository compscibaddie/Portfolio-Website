import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Statement from './components/Statement';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Education />
      <Skills />
      <Statement />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;