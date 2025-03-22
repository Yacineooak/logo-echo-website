
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-3 px-4 sm:px-6 lg:px-8',
        scrolled ? 'backdrop-blur-lg bg-white/90 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex space-x-4 space-x-reverse">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/eae4a9d5-8e3d-4420-a594-db79c99d1b5e.png" 
              alt="أنوبيس ويب" 
              className="h-8 md:h-10 object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 space-x-reverse">
          <a 
            href="#" 
            className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            قوالب بلوجر
          </a>
          <a 
            href="#" 
            className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            قوالب ووردبريس
          </a>
          <a 
            href="#" 
            className="px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            اضافات
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4 space-x-reverse">
          <div className="flex items-center space-x-2 space-x-reverse">
            <a href="#" className="social-icon social-icon-youtube">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a href="#" className="social-icon social-icon-telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.133.43.166.619.084.188-.08.293-.285.24-.477-.715-2.636-2.155-10.447-2.654-12.51-.068-.282-.372-.428-.605-.347-.234.081-.363.323-.296.605l2.696 12.645zm-6.284-7.987l5.878 4.182c.229.116.489.018.579-.199s.045-.465-.18-.589l-5.881-3.109c-.230-.115-.487-.017-.576.199-.89.217-.46.463.18.588z"/>
              </svg>
            </a>
            <a href="#" className="social-icon social-icon-whatsapp">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.288.131.332.202.043.72.43.375-.101.737z"/>
              </svg>
            </a>
            <a href="#" className="social-icon social-icon-facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">فتح القائمة الرئيسية</span>
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
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col space-y-4 px-8 py-6">
          <a 
            href="#" 
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            قوالب بلوجر
          </a>
          <a 
            href="#" 
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            قوالب ووردبريس
          </a>
          <a 
            href="#" 
            className="px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            اضافات
          </a>
          
          <div className="flex justify-center space-x-4 space-x-reverse pt-4">
            <a href="#" className="social-icon social-icon-youtube">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a href="#" className="social-icon social-icon-telegram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.133.43.166.619.084.188-.08.293-.285.24-.477-.715-2.636-2.155-10.447-2.654-12.51-.068-.282-.372-.428-.605-.347-.234.081-.363.323-.296.605l2.696 12.645zm-6.284-7.987l5.878 4.182c.229.116.489.018.579-.199s.045-.465-.18-.589l-5.881-3.109c-.230-.115-.487-.017-.576.199-.89.217-.46.463.18.588z"/>
              </svg>
            </a>
            <a href="#" className="social-icon social-icon-whatsapp">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.288.131.332.202.043.72.43.375-.101.737z"/>
              </svg>
            </a>
            <a href="#" className="social-icon social-icon-facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
