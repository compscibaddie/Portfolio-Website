import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="py-6 sticky top-0 bg-white z-50 shadow-sm backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="logo text-center md:text-left mb-4 md:mb-0 cursor-pointer"
          >
            <h1 className="font-montserrat font-black text-4xl md:text-5xl uppercase text-gray-900 hover:text-accent transition-colors duration-300">
              Itumeleng Kekana
            </h1>
            <p className="font-space-grotesk text-lg relative inline-block mt-2 text-gray-600">
              Hello World
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </p>
          </button>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-space-grotesk font-bold relative py-2 px-1 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-accent scale-105'
                    : 'text-gray-700 hover:text-accent hover:scale-105'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0'
                  }`}
                ></span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;