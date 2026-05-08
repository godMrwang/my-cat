import { Instagram, Youtube, Twitter, ArrowRight, Globe, Share2 } from 'lucide-react';
import { Page } from '../../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full border-t border-slate-200 bg-background pt-20">
      <div className="max-w-7xl mx-auto px-10 pb-20 grid grid-cols-1 md:grid-cols-4 gap-16 text-primary-container">
        <div className="col-span-1">
          <span className="text-lg font-bold mb-4 block uppercase tracking-tighter">Feline Wellness</span>
          <p className="text-slate-600 text-xs leading-relaxed mb-6 font-serif opacity-80">
            Scientific warmth for the discerning companion. Expertly formulated, ethically sourced. Precision nutrition for the modern domestic cat.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 cursor-pointer hover:text-secondary transition-colors" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-secondary transition-colors" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-secondary transition-colors" />
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="label-caps mb-4">The Brand</h5>
          <ul className="space-y-2 text-xs font-serif">
            <li><a className="text-slate-600 hover:text-primary transition-all underline-offset-4" href="#">Our Story</a></li>
            <li><a className="text-slate-600 hover:text-primary transition-all underline-offset-4" href="#">Sourcing Ethos</a></li>
            <li><a className="text-slate-600 hover:text-primary transition-all underline-offset-4" href="#">Wholesale</a></li>
            <li><a className="text-slate-600 hover:text-primary transition-all underline-offset-4" href="#">Sustainability</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="label-caps mb-4">Support</h5>
          <ul className="space-y-2 text-xs font-serif">
            <li><a className="text-slate-600 hover:text-primary transition-all underline-offset-4" href="#">Help Center</a></li>
            <li><a className="text-slate-600 hover:text-primary transition-all underline-offset-4" href="#">Shipping & Returns</a></li>
            <li><a className="text-slate-600 hover:text-primary transition-all underline-offset-4" href="#">Subscription Care</a></li>
            <li><a className="text-slate-600 hover:text-primary transition-all underline-offset-4" href="#">Contact</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h5 className="label-caps mb-4">Newsletter</h5>
          <p className="text-slate-600 text-xs font-serif mb-4">Join our community for insights into feline longevity.</p>
          <form className="flex border-b border-slate-300 pb-2 group focus-within:border-primary transition-colors">
            <input 
              className="bg-transparent border-none focus:ring-0 w-full text-xs font-serif placeholder:text-slate-400" 
              placeholder="Email address" 
              type="email" 
            />
            <button className="text-slate-400 hover:text-primary transition-colors" type="submit">
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-serif text-[10px] text-slate-500 uppercase tracking-widest">
          © 2024 Feline Wellness. Precision Nutrition for the Discerning Cat.
        </p>
        <div className="flex gap-8 text-[10px] items-center text-slate-500 uppercase tracking-widest font-serif font-semibold">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">Accessibility</a>
          <div className="flex gap-4 ml-4 opacity-50">
            <Globe className="w-4 h-4 cursor-pointer hover:text-primary" />
            <Share2 className="w-4 h-4 cursor-pointer hover:text-primary" />
          </div>
        </div>
      </div>
    </footer>
  );
}
