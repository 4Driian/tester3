import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Search, Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from '../components/Footer';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Spaces', href: '/spaces' },
    { name: 'Products', href: '/catalog' },
    { name: 'Showrooms', href: '/showrooms' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-100 py-4 shadow-sm' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif text-neutral-900 tracking-[0.15em] flex items-center gap-2 group">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'}`}>R</div>
          <span className={isScrolled || location.pathname !== '/' ? 'text-neutral-900' : 'text-white'}>RAMSTACK</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors relative group py-1 ${
                (isScrolled || location.pathname !== '/') ? 'text-neutral-500 hover:text-neutral-900' : 'text-white/70 hover:text-white'
              } ${location.pathname === link.href ? (isScrolled || location.pathname !== '/' ? 'text-neutral-900' : 'text-white') : ''}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled || location.pathname !== '/' ? 'bg-neutral-900' : 'bg-white'}`} />
            </Link>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <button className={isScrolled || location.pathname !== '/' ? 'text-neutral-500 hover:text-neutral-900' : 'text-white/70 hover:text-white'}>
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            className={`lg:hidden ${isScrolled || location.pathname !== '/' ? 'text-neutral-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
               <span className="text-2xl font-serif text-neutral-900 tracking-[0.2em]">RAMSTACK</span>
               <button onClick={() => setMobileMenuOpen(false)}>
                 <X className="w-8 h-8 text-neutral-900" />
               </button>
            </div>
            <div className="flex flex-col gap-10 text-center">
               {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-4xl font-serif text-neutral-900 hover:italic"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-16 border-t border-neutral-100 flex flex-col gap-4">
              <button className="w-full py-4 border border-neutral-200 rounded-2xl text-[10px] font-bold tracking-widest uppercase text-neutral-900">Account Access</button>
              <button className="w-full py-4 bg-neutral-900 text-white rounded-2xl text-[10px] font-bold tracking-widest uppercase">Request Digital Catalog</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#FCFBFA] relative">
      <Navbar />
      <Outlet />
      
      {/* WhatsApp CTA */}
      <a 
        href="https://wa.me/your-number" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest">
          Chat with us
        </span>
      </a>

      <Footer />
    </div>
  );
};
