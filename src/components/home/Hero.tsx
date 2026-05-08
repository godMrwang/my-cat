import { motion } from 'motion/react';
import { Page } from '../../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative h-[calc(100vh-120px)] min-h-[700px] flex items-center overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="z-10 order-2 md:order-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="label-caps text-secondary mb-4 block">SCIENTIFICALLY FORMULATED</span>
          <h1 className="display-xl text-primary mb-6">Nutrition that respects their biology.</h1>
          <p className="body-lg text-on-surface-variant max-w-lg mb-10 italic">
            Precision-crafted feline diets inspired by ancestral biology and refined by modern veterinary science. No fillers, no compromises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('collection')}
              className="bg-primary-container text-surface px-8 py-4 button-text hover:bg-primary transition-all shadow-lg active:scale-95"
            >
              Shop The Collection
            </button>
            <button className="border border-slate-300 text-primary-container px-8 py-4 button-text hover:bg-white transition-all active:scale-95">
              Our Ethos
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="relative h-full flex justify-end items-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full aspect-[4/5] bg-white rounded-sm overflow-hidden shadow-2xl relative group">
            <img 
              alt="Premium Feline Wellness Cat" 
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-[2000ms]" 
              src="https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/20 to-transparent"></div>
            <div className="absolute bottom-8 right-8 text-white/50 text-[10px] uppercase tracking-[0.2em] font-serif italic">
              Scientific Warmth: Plate 01
            </div>
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-lavender/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-sky/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
