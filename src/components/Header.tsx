import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

export const Header: React.FC = () => {
  const { totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Nutrition', path: '/journal' },
    { label: 'Journal', path: '/journal' },
    { label: 'Story', path: '/story' },
    { label: 'Help', path: '#' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-white/95 backdrop-blur-sm border-slate-100 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-24">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-display text-primary tracking-tighter uppercase whitespace-nowrap">
            Feline Wellness
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`font-serif text-sm tracking-wide transition-colors ${
                  location.pathname === link.path 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center border-b border-slate-200 py-1 gap-2">
            <Search className="w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none focus:ring-0 text-sm font-sans w-32"
            />
          </div>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-slate-50 rounded-full transition-all text-primary">
              <User className="w-5 h-5" />
            </button>
            <Link to="/cart" className="p-2 hover:bg-slate-50 rounded-full transition-all text-primary relative">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
