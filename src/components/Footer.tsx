import React from 'react';
import { Globe, MessageSquare, Mail, Instagram, Youtube, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-background-warm">
      <div className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="md:col-span-1">
          <span className="text-lg font-bold text-primary mb-4 block uppercase tracking-tighter">Feline Wellness</span>
          <p className="font-serif text-xs leading-relaxed text-slate-600 mb-6">
            Scientific warmth for the discerning companion. Expertly formulated, ethically sourced.
          </p>
          <div className="flex gap-4">
            <Globe className="w-5 h-5 text-primary cursor-pointer hover:text-secondary transition-colors" />
            <MessageSquare className="w-5 h-5 text-primary cursor-pointer hover:text-secondary transition-colors" />
            <Mail className="w-5 h-5 text-primary cursor-pointer hover:text-secondary transition-colors" />
          </div>
        </div>

        <div>
          <h5 className="font-label-caps text-primary mb-6">The Brand</h5>
          <ul className="space-y-3 font-serif text-xs">
            <li><a href="#" className="text-slate-600 hover:text-primary transition-all">Our Story</a></li>
            <li><a href="#" className="text-slate-600 hover:text-primary transition-all">Sourcing Ethos</a></li>
            <li><a href="#" className="text-slate-600 hover:text-primary transition-all">Wholesale</a></li>
            <li><a href="#" className="text-slate-600 hover:text-primary transition-all">Sustainability</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-label-caps text-primary mb-6">Support</h5>
          <ul className="space-y-3 font-serif text-xs">
            <li><a href="#" className="text-slate-600 hover:text-primary transition-all">Help Center</a></li>
            <li><a href="#" className="text-slate-600 hover:text-primary transition-all">Shipping & Returns</a></li>
            <li><a href="#" className="text-slate-600 hover:text-primary transition-all">Journal</a></li>
            <li><a href="#" className="text-slate-600 hover:text-primary transition-all">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-label-caps text-primary mb-6">Newsletter</h5>
          <p className="font-serif text-xs text-slate-600 mb-4">Join our community for insights into feline longevity.</p>
          <form className="flex border-b border-slate-300 pb-2 group">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border-none focus:ring-0 w-full text-xs font-serif"
            />
            <button type="submit" className="text-slate-400 group-hover:text-primary transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-10 py-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-serif text-[10px] text-slate-500">© 2024 Feline Wellness. Precision Nutrition for the Discerning Cat.</p>
        <div className="flex gap-8 text-[10px] font-serif text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};
