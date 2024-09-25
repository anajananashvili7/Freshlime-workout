import React, { useEffect, useState } from 'react';

function Header({ scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-opacity-90 backdrop-blur'} z-50`}>
      <div className="flex items-center justify-between p-4 bg-[#e6f2ef] h-[6rem] z-50">
        <a href="#">
          <img src='/logo.png' alt="Logo" className="h-10" />
        </a>
        <div className="hidden md:flex flex-grow justify-end">
          <ul className="flex space-x-4">
            {['howitworks', 'gym', 'testimonial', 'pricing'].map(section => (
              <li key={section}>
                <button
                  onClick={() => { scrollToSection(section); }}
                  className="text-gray-800 transition duration-300 font-bold hover:text-[#087f5b] py-2 px-4"
                >
                  {section.replace(/([A-Z])/g, ' $1').trim()}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  scrollToSection('cta'); 
                  closeMenu();
                }}
                className="py-2 px-4 flex items-center justify-center rounded-lg bg-[#087f5b] text-white transition duration-300 hover:bg-[#077252]"
              >
                Try for Free
              </button>
            </li>
          </ul>
        </div>
        <button onClick={toggleMenu} className="block md:hidden">
          <div className="space-y-1">
            <div className="h-1 w-8 bg-gray-800"></div>
            <div className="h-1 w-8 bg-gray-800"></div>
            <div className="h-1 w-8 bg-gray-800"></div>
          </div>
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMenu} />
      )}
      <nav className={`fixed inset-0 bg-white bg-opacity-90 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden z-50`}>
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-[#333] text-2xl w-12 h-12 font-bold border-2 border-solid border-[#e5e7eb] flex items-center justify-center">X</button>
        </div>
        <ul className={`flex flex-col items-center justify-center h-full space-y-4`}>
          {['howitworks', 'gym', 'testimonial', 'pricing'].map(section => (
            <li key={section}>
              <button
                onClick={() => { scrollToSection(section); closeMenu(); }}
                className="text-gray-800 transition duration-300 font-bold hover:text-[#087f5b] py-2 px-4 text-lg"
              >
                {section.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                scrollToSection('cta'); 
                closeMenu();
              }}
              className="py-2 px-4 flex items-center justify-center rounded-lg bg-[#087f5b] text-white transition duration-300 hover:bg-[#077252]"
            >
              Try for Free
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

