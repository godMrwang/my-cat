import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS, ARTICLES } from '../data';
import { ProductCard } from '../components/ProductCard';
import { Biotech, Eco, ClinicalNotes, QuoteIcon } from '../components/Icons';

export const Home: React.FC = () => {
  const bestSellers = PRODUCTS.slice(0, 3);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background-warm">
        <div className="max-w-7xl mx-auto px-10 w-full grid md:grid-cols-2 gap-16 items-center py-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <span className="font-label-caps text-secondary mb-4 block">SCIENTIFICALLY FORMULATED</span>
            <h1 className="font-display text-5xl md:text-6xl text-primary leading-tight mb-6">
              Nutrition that respects their biology.
            </h1>
            <p className="font-sans text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed italic">
              Precision-crafted feline diets inspired by ancestral biology and refined by modern veterinary science. No fillers, no compromises.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="bg-primary-container text-white px-10 py-5 font-button-text hover:bg-primary transition-all shadow-lg">
                Shop The Collection
              </Link>
              <button className="border border-slate-300 text-primary px-10 py-5 font-button-text hover:bg-white transition-all">
                Our Ethos
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex justify-end items-center"
          >
            <div className="w-full max-w-[500px] aspect-[4/5] bg-white rounded-sm overflow-hidden shadow-2xl relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCSc39IxJdBYdJU0kKNye5sXs3v9HSNo5pdfkAzxFRAl9oSn_aTOx6q5N5kA-golbNtGOs9QyPTFlaRP__LWRb-zw8qjY7-zILI4bcbcM79X09pPiiS7WxOlJ_E7WRcLrqGFYiqN7VMVIoKVYYmCbrSy8aildSQI5DTu5oQnZpl_-FgJCtSTvSgnTl1N3XcTxTOI9HnUgKzCnOA6SOTmfgPeznHG75fU_5_Oz9J9b7Oy4jc7sYn6okQzpnzQ6L_9R9Z4F8YkucPKA" 
                alt="Premium Feline Wellness" 
                className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="text-secondary opacity-80"><Biotech /></div>
              <h3 className="font-display text-2xl text-primary">Biologically Appropriate</h3>
              <p className="font-sans text-on-surface-variant leading-relaxed">
                We prioritize high-quality animal proteins that mirror a cat's natural carnivorous requirements.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-secondary opacity-80"><Eco /></div>
              <h3 className="font-display text-2xl text-primary">Traceable Sourcing</h3>
              <p className="font-sans text-on-surface-variant leading-relaxed">
                Every ingredient is ethically sourced from suppliers who meet our rigorous standards for purity.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-secondary opacity-80"><ClinicalNotes /></div>
              <h3 className="font-display text-2xl text-primary">Clinical Integrity</h3>
              <p className="font-sans text-on-surface-variant leading-relaxed">
                Formulated in collaboration with leading veterinary nutritionists for optimal organ health and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-background-warm">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label-caps text-secondary mb-2 block tracking-widest">CURATED SELECTION</span>
              <h2 className="font-display text-4xl text-primary">Best Sellers</h2>
            </div>
            <Link to="/shop" className="font-button-text text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all">
              View All Products
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-primary-container text-white">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <div className="flex justify-center mb-10 text-secondary-container opacity-50">
            <QuoteIcon />
          </div>
          <p className="font-display text-3xl md:text-4xl italic leading-relaxed mb-12">
            "Feline Wellness isn't just about feeding; it's about honoring the biology of the animal. Their commitment to ingredient transparency and nutritional density is unmatched in the industry."
          </p>
          <div className="space-y-1">
            <h4 className="font-label-caps tracking-[0.2em] text-white">DR. ELIZABETH THORNE</h4>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">CHIEF VETERINARY OFFICER, DVM</span>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-20 text-center">
            <span className="font-label-caps text-secondary mb-2 block tracking-widest">KNOWLEDGE CENTER</span>
            <h2 className="font-display text-4xl text-primary">Latest from the Journal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {ARTICLES.map(article => (
              <motion.article 
                key={article.id}
                whileHover={{ y: -5 }}
                className="flex flex-col md:flex-row gap-8 group"
              >
                <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <span className="font-label-caps text-[10px] text-slate-400">{article.category} • {article.readTime}</span>
                  <h4 className="font-display text-2xl text-primary mt-4 group-hover:text-secondary transition-colors leading-tight">
                    {article.title}
                  </h4>
                  <p className="font-sans text-sm text-on-surface-variant mt-4 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                  <Link to="#" className="inline-block mt-8 font-button-text self-start border-b border-primary text-primary hover:text-secondary hover:border-secondary transition-all">
                    Read Story
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
