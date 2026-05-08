import { Search, User, ShoppingCart } from 'lucide-react';
import { Page } from '../../App';

interface TopNavBarProps {
  currentPage: Page;
  cartCount: number;
  onNavigate: (page: Page) => void;
}

export default function TopNavBar({ currentPage, cartCount, onNavigate }: TopNavBarProps) {
  return (
    <header className="fixed top-0 w-full z-50 border-b bg-white/95 backdrop-blur-sm shadow-sm border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center h-24">
        <div className="flex items-center gap-12">
          <button 
            onClick={() => onNavigate('home')}
            className="text-xl md:text-2xl font-bold text-primary-container uppercase tracking-tighter hover:opacity-80 transition-opacity"
          >
            Feline Wellness
          </button>
          <nav className="hidden md:flex items-center gap-8 font-serif text-sm tracking-wide">
            <button 
              onClick={() => onNavigate('collection')}
              className={`${currentPage === 'collection' ? 'text-primary-container border-b-2 border-primary-container pb-1' : 'text-slate-500'} hover:text-primary-container transition-all`}
            >
              Shop
            </button>
            <button 
              onClick={() => onNavigate('nutrition')}
              className={`${currentPage === 'nutrition' ? 'text-primary-container border-b-2 border-primary-container pb-1' : 'text-slate-500'} hover:text-primary-container transition-all`}
            >
              Nutrition
            </button>
            <a className="text-slate-500 hover:text-primary-container transition-colors" href="#">Our Story</a>
            <a className="text-slate-500 hover:text-primary-container transition-colors" href="#">Journal</a>
            <a className="text-slate-500 hover:text-primary-container transition-colors" href="#">Help</a>
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center border-b border-slate-200 py-1">
            <Search className="text-slate-400 w-5 h-5" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm font-sans w-32 md:w-48 placeholder:italic" 
              placeholder="Search our collection..." 
              type="text"
            />
          </div>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-slate-50 transition-all duration-300 scale-95 active:scale-90 text-primary-container">
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onNavigate('cart')}
              className="p-2 hover:bg-slate-50 transition-all duration-300 scale-95 active:scale-90 text-primary-container relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-container text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
