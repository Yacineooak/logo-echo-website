
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-4 sm:px-6 lg:px-8',
        scrolled ? 'backdrop-blur-lg bg-white/80 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/eae4a9d5-8e3d-4420-a594-db79c99d1b5e.png" 
            alt="ThemesX Logo" 
            className="h-8 md:h-10 object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a 
            href="#features" 
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="bg-transparent text-sm border border-gray-300 hover:bg-gray-50">
            Log in
          </Button>
          <Button className="bg-primary text-white text-sm hover:opacity-90">
            Get started
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 flex flex-col pt-20 bg-white z-40 transition-transform duration-300 ease-in-out transform',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-4 px-8 py-6">
          <a 
            href="#features" 
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <div className="flex flex-col space-y-3 pt-4">
            <Button variant="outline" className="w-full justify-center bg-transparent border border-gray-300 hover:bg-gray-50">
              Log in
            </Button>
            <Button className="w-full justify-center bg-primary text-white hover:opacity-90">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
