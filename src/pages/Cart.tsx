import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();
  const upsells = PRODUCTS.slice(0, 4);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-10">
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="font-display text-5xl text-primary mb-2">Your Shopping Cart</h1>
          <p className="font-sans text-on-surface-variant italic">Review your selection of scientific nutrition before proceeding to checkout.</p>
        </header>

        {cart.length === 0 ? (
          <div className="py-20 text-center bg-white border border-slate-100 rounded-sm">
            <h2 className="font-display text-2xl text-slate-400 mb-6">Your cart is empty.</h2>
            <Link to="/shop" className="bg-primary text-white px-10 py-4 font-button-text hover:bg-primary-container transition-all">
              Discover Our Recipes
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-8">
              <AnimatePresence mode="popLayout">
                {cart.map(item => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-slate-100 group"
                  >
                    <div className="w-full md:w-32 h-32 flex-shrink-0 bg-slate-50 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-label-caps text-[10px] text-secondary mb-1 block uppercase">{item.category}</span>
                          <h3 className="font-display text-xl text-primary">{item.name}</h3>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-slate-300 hover:text-error transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex justify-between items-end mt-6">
                        <div className="flex items-center border border-slate-200">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-slate-50 transition-colors"><Minus className="w-4 h-4" /></button>
                          <span className="px-4 font-bold text-primary font-mono text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-slate-50 transition-colors"><Plus className="w-4 h-4" /></button>
                        </div>
                        <div className="text-right">
                          <p className="font-label-caps text-[10px] text-slate-400 mb-1">UNIT PRICE ${item.price.toFixed(2)}</p>
                          <p className="font-display text-xl text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <aside className="lg:col-span-4 h-full">
              <div className="bg-white p-8 border border-slate-100 rounded-sm sticky top-32">
                <h2 className="font-display text-2xl text-primary mb-8 border-b border-slate-50 pb-4">Order Summary</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between font-sans text-sm text-on-surface-variant">
                    <span>Subtotal</span>
                    <span className="font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-sans text-sm text-on-surface-variant">
                    <span>Shipping</span>
                    <span className="text-secondary font-medium italic">Complimentary</span>
                  </div>
                  <div className="flex justify-between font-sans text-sm text-on-surface-variant">
                    <span>Estimated Tax</span>
                    <span className="font-mono">${(subtotal * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="pt-6 border-t border-slate-100 flex justify-between items-end">
                    <span className="font-display text-lg text-primary">Total</span>
                    <span className="font-display text-3xl text-primary">${(subtotal * 1.08).toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout" className="w-full bg-primary-container text-white py-5 px-8 rounded-sm font-button-text transition-all hover:bg-primary flex items-center justify-center gap-3 group shadow-xl">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <div className="mt-8 pt-8 border-t border-slate-50 text-center">
                  <p className="font-sans text-[11px] text-slate-400 italic leading-relaxed">
                    Secure checkout guaranteed. Every purchase supports our commitment to traceable, ethical sourcing.
                  </p>
                  <div className="flex justify-center gap-4 mt-6 opacity-30 grayscale">
                    <ShieldCheck className="w-5 h-5" />
                    <div className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center font-bold text-[8px]">$</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Cross-sell */}
        <section className="mt-32 pt-20 border-t border-slate-100">
           <h2 className="font-display text-3xl text-primary mb-12 text-center">Recommended Additions</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {upsells.map(product => (
               <ProductCard key={product.id} product={product} />
             ))}
           </div>
        </section>
      </div>
    </div>
  );
};
