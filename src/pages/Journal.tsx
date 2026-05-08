import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../data';

export const Journal: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="font-label-caps text-secondary mb-4 block tracking-[0.2em]">KNOWLEDGE CENTER</span>
          <h1 className="font-display text-5xl text-primary mb-6">The Journal</h1>
          <p className="font-sans text-lg text-on-surface-variant italic leading-relaxed">
            In-depth explorations into feline biology, longevity, and clinical nutritional science. Written for the discerning companion who seeks efficacy over artifice.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {ARTICLES.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <Link to={`/journal/${article.id}`}>
                <div className="aspect-[16/10] overflow-hidden bg-slate-100 mb-8 relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-label-caps text-[10px] text-secondary tracking-widest">{article.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                    <span className="font-label-caps text-[10px] text-slate-400">{article.readTime}</span>
                  </div>
                  <h2 className="font-display text-3xl text-primary leading-tight group-hover:text-secondary transition-colors">
                    {article.title}
                  </h2>
                  <p className="font-sans text-on-surface-variant leading-relaxed line-clamp-3 italic">
                    {article.summary}
                  </p>
                  <div className="pt-4 flex items-center gap-2 font-button-text text-primary text-[10px] group-hover:translate-x-2 transition-transform">
                    READ TRANSCRIPT <span className="text-xl leading-none">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mt-32 pt-20 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-label-caps text-primary mb-6">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['Metabolism', 'Immunity', 'Hydration', 'Renal Health', 'Wild Sourcing', 'Microbiome'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-500 font-sans text-xs hover:border-primary hover:text-primary transition-all cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
             <h3 className="font-label-caps text-primary mb-6">Ask a Specialist</h3>
             <p className="font-sans text-sm text-on-surface-variant mb-6">Have a specific question about your cat's dietary requirements? Our clinical team is available for deep-dive consultations.</p>
             <button className="font-button-text text-primary border-b border-primary pb-1">Contact Clinic</button>
          </div>
        </div>
      </div>
    </div>
  );
};
