import React from 'react';
import { motion } from 'motion/react';
import { Biotech, Eco, ClinicalNotes } from '../components/Icons';

export const Story: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCSc39IxJdBYdJU0kKNye5sXs3v9HSNo5pdfkAzxFRAl9oSn_aTOx6q5N5kA-golbNtGOs9QyPTFlaRP__LWRb-zw8qjY7-zILI4bcbcM79X09pPiiS7WxOlJ_E7WRcLrqGFYiqN7VMVIoKVYYmCbrSy8aildSQI5DTu5oQnZpl_-FgJCtSTvSgnTl1N3XcTxTOI9HnUgKzCnOA6SOTmfgPeznHG75fU_5_Oz9J9b7Oy4jc7sYn6okQzpnzQ6L_9R9Z4F8YkucPKA" 
            alt="Our Ethos" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-label-caps tracking-[0.3em] mb-6 block"
          >
            OUR GENESIS
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl mb-8"
          >
            Scientific Warmth.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xl italic max-w-2xl mx-auto leading-relaxed"
          >
            Bridging the gap between ancestral biological requirements and modern clinical outcomes.
          </motion.p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-10">
          <div className="space-y-12 font-sans text-lg text-on-surface-variant italic leading-relaxed">
            <p>
              Feline Wellness was born from a singular clinical observation: the commonality of lifestyle-related ailments in domestic cats was not a failure of genetics, but a failure of diet.
            </p>
            <p>
              As practitioners, we saw the same recurring inflammatory markers, the same chronic dehydration, and the same metabolic stress caused by "filler-heavy" commercial diets. We realized that a cat's bowl should not be a disposal site for the by-products of human agriculture.
            </p>
            <div className="py-12 border-y border-slate-100 grid md:grid-cols-2 gap-12 items-center">
               <h2 className="font-display text-4xl text-primary not-italic">The Clinical Standard</h2>
               <p className="text-sm not-italic">We reject the industry standard of "pet grade" ingredients. Every protein and botanical in our recipes is verified for purity and bioavailability.</p>
            </div>
            <p>
              Our team of veterinary nutritionists and ethologists worked for three years to refine the perfect protein-to-fat ratios that mirror a wild-caught dietary profile, while adjusting for the caloric needs of the modern indoor companion.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-background-warm">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6 text-center">
              <div className="text-secondary mx-auto flex justify-center"><Biotech /></div>
              <h3 className="font-display text-2xl text-primary uppercase tracking-tighter">Precision</h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed italic">
                Molecular-level analysis of every ingredient to ensure optimal nutrient absorption.
              </p>
            </div>
            <div className="space-y-6 text-center">
              <div className="text-secondary mx-auto flex justify-center"><Eco /></div>
              <h3 className="font-display text-2xl text-primary uppercase tracking-tighter">Purity</h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed italic">
                Traceable sourcing from local fisherman and organic ranches who share our commitment.
              </p>
            </div>
            <div className="space-y-6 text-center">
              <div className="text-secondary mx-auto flex justify-center"><ClinicalNotes /></div>
              <h3 className="font-display text-2xl text-primary uppercase tracking-tighter">Longevity</h3>
              <p className="font-sans text-sm text-slate-500 leading-relaxed italic">
                Our goal isn't just health for today, but a robust microbiome for a lifetime of vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-32 text-center bg-primary text-white">
        <div className="max-w-2xl mx-auto px-10">
          <h2 className="font-display text-4xl mb-8">Meet the Clinical Board</h2>
          <p className="font-sans text-slate-300 mb-10 italic">Our research is led by industry pioneers in feline endocrinology and gastrointestinal health.</p>
          <button className="bg-secondary text-white px-10 py-4 font-button-text hover:bg-secondary-container hover:text-primary transition-all">
            View Research Board
          </button>
        </div>
      </section>
    </div>
  );
};
