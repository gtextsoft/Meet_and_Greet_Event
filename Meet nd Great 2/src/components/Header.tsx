import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import safLogo from '../../SAF logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      const menuButton = document.querySelector('button.md\\:hidden');
      
      if (isMenuOpen && nav && !nav.contains(event.target as Node) && 
          menuButton && !menuButton.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="shadow-md py-4 px-6 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={safLogo} alt="SAF Logo" className="h-30 w-auto" />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen
              ? 'absolute top-full left-0 right-0 bg-white shadow-lg md:shadow-none'
              : 'hidden'
          } md:flex md:items-center md:static w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-yellow-500 py-2 block w-full text-left md:w-auto transition-colors"
              >
                About Dr. Stephen
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('who-should-attend')}
                className="text-gray-700 hover:text-yellow-500 py-2 block w-full text-left md:w-auto transition-colors"
              >
                Who Should Attend
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('topics')}
                className="text-gray-700 hover:text-yellow-500 py-2 block w-full text-left md:w-auto transition-colors"
              >
                What You'll Learn
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('why-attend')}
                className="text-gray-700 hover:text-yellow-500 py-2 block w-full text-left md:w-auto transition-colors"
              >
                Why Attend
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('bonuses')}
                className="text-gray-700 hover:text-yellow-500 py-2 block w-full text-left md:w-auto transition-colors"
              >
                Bonuses
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;