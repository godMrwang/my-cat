import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';

export const Shop: React.FC = () => {
  const [lifeStage, setLifeStage] = useState<string[]>([]);
  const [dietary, setDietary] = useState<string[]>([]);
  const [protein, setProtein] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchLifeStage = lifeStage.length === 0 || (p.lifeStage && lifeStage.includes(p.lifeStage));
      const matchDietary = dietary.length === 0 || (p.dietaryPreference && dietary.some(d => p.dietaryPreference?.includes(d)));
      const matchProtein = !protein || (p.protein && p.protein.includes(protein));
      return matchLifeStage && matchDietary && matchProtein;
    });
  }, [lifeStage, dietary, protein]);

  const toggleFilter = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, val: string) => {
    setList(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-16">
          <h1 className="font-display text-5xl text-primary mb-4">Precision Nutrition</h1>
          <p className="font-sans text-lg text-on-surface-variant max-w-2xl italic">
            Scientifically formulated recipes designed for the biological needs of the modern feline. From playful kittens to serene seniors.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-32 space-y-10">
              <div>
                <h3 className="font-label-caps text-primary mb-6 tracking-widest">Life Stage</h3>
                <ul className="space-y-4">
                  {['Kitten', 'Adult', 'Senior'].map(stage => (
                    <li key={stage}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={lifeStage.includes(stage)}
                          onChange={() => toggleFilter(lifeStage, setLifeStage, stage)}
                          className="rounded-none border-outline text-primary focus:ring-primary w-4 h-4 cursor-pointer" 
                        />
                        <span className={`font-sans text-sm transition-colors ${lifeStage.includes(stage) ? 'text-primary font-medium' : 'text-on-surface group-hover:text-primary'}`}>
                          {stage}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-label-caps text-primary mb-6 tracking-widest">Dietary Preference</h3>
                <ul className="space-y-4">
                  {['Grain-Free', 'Indoor Formula', 'Sensitive Stomach', 'High Protein'].map(pref => (
                    <li key={pref}>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={dietary.includes(pref)}
                          onChange={() => toggleFilter(dietary, setDietary, pref)}
                          className="rounded-none border-outline text-primary focus:ring-primary w-4 h-4 cursor-pointer" 
                        />
                        <span className={`font-sans text-sm transition-colors ${dietary.includes(pref) ? 'text-primary font-medium' : 'text-on-surface group-hover:text-primary'}`}>
                          {pref}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-label-caps text-primary mb-6 tracking-widest">Primary Protein</h3>
                <div className="flex flex-wrap gap-2">
                  {['Wild Salmon', 'Free-Range Chicken', 'Grass-Fed Beef', 'Atlantic Tuna'].map(p => (
                    <button 
                      key={p}
                      onClick={() => setProtein(protein === p ? null : p)}
                      className={`px-3 py-1.5 border text-[10px] font-label-caps transition-all ${
                        protein === p 
                        ? 'border-primary bg-primary text-white' 
                        : 'border-slate-200 text-slate-500 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <div className="text-secondary mb-4 opacity-70">
                   <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <p className="font-display text-sm italic text-on-surface-variant leading-relaxed">
                  "The microbiome of the domestic cat requires precise enzyme support. These formulas reflect that clinical reality."
                </p>
                <p className="font-label-caps text-[10px] mt-4 text-primary uppercase">— Dr. Elena Vance, DVM</p>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-10 pb-4 border-b border-slate-100">
              <span className="font-sans text-sm text-on-surface-variant">Showing {filteredProducts.length} Gourmet Recipes</span>
              <div className="flex items-center gap-4">
                <span className="font-label-caps text-[10px] text-slate-400">Sort by</span>
                <select className="border-none bg-transparent font-sans text-sm text-primary focus:ring-0 cursor-pointer">
                  <option>Most Recommended</option>
                  <option>Price: High to Low</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
