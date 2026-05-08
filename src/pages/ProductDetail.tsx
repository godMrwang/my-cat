import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Pets, WaterDrop, CheckCircle } from '../components/Icons';
import { PRODUCTS } from '../data';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const [purchaseType, setPurchaseType] = useState<'subscribe' | 'one-time'>('subscribe');

  const relatedProducts = PRODUCTS.filter(p => p.id !== id).slice(0, 3);

  if (!product) return <div className="pt-32 text-center">Product not found</div>;

  return (
    <div className="pt-24 min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-square bg-slate-50 border border-slate-100 overflow-hidden"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
          <div className="grid grid-cols-4 gap-4 opacity-50">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square border border-slate-100 bg-slate-50 cursor-pointer"></div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-primary">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} />)}
              </div>
              <span className="font-label-caps text-slate-400">124 REVIEWS</span>
            </div>
            <h1 className="font-display text-4xl text-primary mb-4">{product.name}</h1>
            <p className="font-sans text-on-surface-variant leading-relaxed italic">
              {product.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
             {product.tags?.map(tag => (
               <span key={tag} className="px-3 py-1 bg-primary/5 border border-primary/20 text-primary font-label-caps rounded-full">{tag}</span>
             ))}
             <span className="px-3 py-1 border border-primary/20 text-primary font-label-caps rounded-full">REAL MEAT FIRST</span>
          </div>

          {/* Selection */}
          <div className="space-y-4">
            <label 
              className={`group relative flex items-center justify-between p-5 border-2 cursor-pointer transition-all ${purchaseType === 'subscribe' ? 'border-primary bg-slate-50' : 'border-slate-100'}`}
              onClick={() => setPurchaseType('subscribe')}
            >
              <div className="flex items-center gap-4">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${purchaseType === 'subscribe' ? 'border-primary' : 'border-slate-300'}`}>
                  {purchaseType === 'subscribe' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                </div>
                <div>
                  <span className="font-button-text block text-primary">Subscribe & Save 15%</span>
                  <span className="text-[10px] text-slate-500">Free shipping included • Cancel anytime</span>
                </div>
              </div>
              <span className="font-display text-xl text-primary">${(product.price * 0.85).toFixed(2)}</span>
            </label>

            <label 
              className={`group relative flex items-center justify-between p-5 border-2 cursor-pointer transition-all ${purchaseType === 'one-time' ? 'border-primary bg-slate-50' : 'border-slate-100'}`}
              onClick={() => setPurchaseType('one-time')}
            >
              <div className="flex items-center gap-4">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${purchaseType === 'one-time' ? 'border-primary' : 'border-slate-300'}`}>
                  {purchaseType === 'one-time' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                </div>
                <div>
                  <span className="font-button-text block text-primary">One-time purchase</span>
                </div>
              </div>
              <span className="font-display text-xl text-primary">${product.price.toFixed(2)}</span>
            </label>
          </div>

          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-primary text-white font-button-text py-5 uppercase tracking-widest hover:bg-primary-container transition-all shadow-lg active:scale-[0.98]"
          >
            Add to Cart
          </button>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100">
            <div className="flex gap-3">
              <Pets className="text-secondary w-5 h-5" />
              <div>
                <p className="font-label-caps text-[10px] text-primary">Digestive Ease</p>
                <p className="text-[10px] text-slate-500">Probiotics for health</p>
              </div>
            </div>
            <div className="flex gap-3">
              <WaterDrop className="text-secondary w-5 h-5" />
              <div>
                <p className="font-label-caps text-[10px] text-primary">Omega-3 Rich</p>
                <p className="text-[10px] text-slate-500">For a lustrous coat</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Nutritional Details */}
      <section className="bg-background-warm py-24">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-4xl text-primary mb-6">Nutrition and Efficacy</h2>
              <p className="font-sans text-slate-600 mb-8 leading-relaxed">
                Our philosophy is built on transparency. We utilize whole-food ingredients that provide a full spectrum of vitamins and minerals without synthetic additives.
              </p>
              <blockquote className="border-l-2 border-primary pl-6 py-2 italic font-serif text-primary text-sm">
                "The bioavailability of salmon protein in this formula ensures lean muscle maintenance while supporting renal health in aging cats."
                <footer className="mt-4 font-label-caps text-[10px] not-italic text-slate-400">— Dr. Elena Vance, DVM</footer>
              </blockquote>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 border border-slate-100 rounded-sm">
                <h3 className="font-label-caps text-primary mb-6">Core Ingredients</h3>
                <ul className="space-y-4">
                  {(product.ingredients || ['Premium Protein', 'Complex Carbs', 'Omega-3', 'Fiber Sources']).map(ing => (
                    <li key={ing} className="flex items-center gap-3">
                      <CheckCircle className="text-secondary w-4 h-4" />
                      <span className="font-sans text-sm text-slate-600">{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 border border-slate-100 rounded-sm">
                <h3 className="font-label-caps text-primary mb-6">Guaranteed Analysis</h3>
                <div className="space-y-3">
                  {Object.entries(product.analysis || { Protein: '38%', Fat: '17%', Fiber: '4%', Moisture: '10%' }).map(([key, val]) => (
                    <div key={key} className="flex justify-between border-b border-slate-50 pb-2">
                       <span className="text-xs font-sans text-slate-500 uppercase tracking-wide">{key}</span>
                       <span className="text-xs font-bold text-primary">{val.toString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <span className="font-label-caps text-secondary mb-2 block tracking-widest">DIETARY SYNERGY</span>
            <h2 className="font-display text-4xl text-primary">Complete the Meal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
