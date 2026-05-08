import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { CheckCircle, ShieldCheck, ArrowRight, CreditCard, Ship, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const { cart, subtotal } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const total = subtotal * 1.08;

  if (cart.length === 0 && step !== 4) {
    return (
      <div className="pt-40 text-center min-h-[60vh]">
        <h2 className="font-display text-2xl text-slate-400 mb-6">Your cart is empty.</h2>
        <Link to="/shop" className="bg-primary text-white px-10 py-4 font-button-text uppercase tracking-widest">Shop Now</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-background-warm min-h-screen">
      <div className="max-w-6xl mx-auto px-10">
        <header className="mb-12 text-center">
          <h1 className="font-display text-4xl text-primary mb-4">Checkout</h1>
          <div className="flex justify-center items-center gap-4 max-w-sm mx-auto">
            {[1, 2, 3].map(i => (
              <React.Fragment key={i}>
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${step >= i ? 'bg-primary border-primary text-white' : 'border-slate-200 text-slate-300 bg-white'}`}>
                  {step > i ? <CheckCircle className="w-4 h-4" /> : i}
                </div>
                {i < 3 && <div className={`flex-1 h-0.5 transition-all ${step > i ? 'bg-primary' : 'bg-slate-200'}`}></div>}
              </React.Fragment>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 border border-slate-100 rounded-sm space-y-8"
                >
                  <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
                    <MapPin className="text-secondary w-5 h-5" />
                    <h2 className="font-label-caps text-primary">Shipping Information</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 border-b border-slate-200">
                      <input type="text" placeholder="First Name" className="w-full border-none px-0 py-3 font-sans text-sm focus:ring-0" />
                    </div>
                    <div className="col-span-1 border-b border-slate-200">
                      <input type="text" placeholder="Last Name" className="w-full border-none px-0 py-3 font-sans text-sm focus:ring-0" />
                    </div>
                    <div className="col-span-2 border-b border-slate-200">
                      <input type="text" placeholder="Address" className="w-full border-none px-0 py-3 font-sans text-sm focus:ring-0" />
                    </div>
                    <div className="col-span-1 border-b border-slate-200">
                      <input type="text" placeholder="City" className="w-full border-none px-0 py-3 font-sans text-sm focus:ring-0" />
                    </div>
                    <div className="col-span-1 border-b border-slate-200">
                      <input type="text" placeholder="Postal Code" className="w-full border-none px-0 py-3 font-sans text-sm focus:ring-0" />
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full bg-primary text-white py-5 font-button-text uppercase tracking-widest hover:bg-primary-container transition-all flex items-center justify-center gap-2 group"
                  >
                    Next: Shipping Method <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 border border-slate-100 rounded-sm space-y-8"
                >
                  <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
                    <Ship className="text-secondary w-5 h-5" />
                    <h2 className="font-label-caps text-primary">Shipping Method</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="p-5 border-2 border-primary bg-slate-50 flex justify-between items-center cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-primary"></div>
                        <div>
                          <p className="font-sans text-sm font-bold text-primary">Priority Courier (Feline Wellness Exclusive)</p>
                          <p className="text-[10px] text-slate-500">2-3 Business Days • Temperature Controlled</p>
                        </div>
                      </div>
                      <span className="font-label-caps text-secondary">FREE</span>
                    </div>
                    <div className="p-5 border border-slate-100 flex justify-between items-center opacity-50 cursor-not-allowed">
                       <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full border border-slate-300"></div>
                        <p className="font-sans text-sm text-slate-400">Standard Delivery (5-7 Days)</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(1)} className="flex-1 border border-slate-200 text-slate-400 py-5 font-button-text uppercase tracking-widest hover:border-primary hover:text-primary transition-all">Back</button>
                    <button 
                      onClick={() => setStep(3)}
                      className="flex-[2] bg-primary text-white py-5 font-button-text uppercase tracking-widest hover:bg-primary-container transition-all flex items-center justify-center gap-2 group"
                    >
                      Next: Payment <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 border border-slate-100 rounded-sm space-y-8"
                >
                  <div className="flex items-center gap-3 border-b border-slate-50 pb-4">
                    <CreditCard className="text-secondary w-5 h-5" />
                    <h2 className="font-label-caps text-primary">Payment Details</h2>
                  </div>
                  <div className="space-y-6">
                    <div className="border-b border-slate-200">
                      <input type="text" placeholder="Cardholder Name" className="w-full border-none px-0 py-3 font-sans text-sm focus:ring-0" />
                    </div>
                    <div className="border-b border-slate-200">
                      <input type="text" placeholder="Card Number" className="w-full border-none px-0 py-3 font-sans text-sm focus:ring-0" />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                       <div className="border-b border-slate-200">
                          <input type="text" placeholder="MM/YY" className="w-full border-none px-0 py-3 font-sans text-sm focus:ring-0" />
                       </div>
                       <div className="border-b border-slate-200">
                          <input type="text" placeholder="CVV" className="w-full border-none px-0 py-3 font-sans text-sm focus:ring-0" />
                       </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(2)} className="flex-1 border border-slate-200 text-slate-400 py-5 font-button-text uppercase tracking-widest hover:border-primary hover:text-primary transition-all">Back</button>
                    <button 
                      onClick={() => setStep(4)}
                      className="flex-[2] bg-primary text-white py-5 font-button-text uppercase tracking-widest hover:bg-primary-container transition-all"
                    >
                      Complete Order — ${total.toFixed(2)}
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3 h-3" /> Secure SSL Encryption Enabled
                  </p>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div 
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-12 border border-slate-100 rounded-sm text-center space-y-8"
                >
                  <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h2 className="font-display text-4xl text-primary">Your Receipt is Confirmed.</h2>
                  <p className="font-sans text-on-surface-variant italic max-w-md mx-auto">
                    Thank you for choosing Feline Wellness. Your order #FW-10294 is being prepared in our climate-controlled kitchen.
                  </p>
                  <div className="pt-8 border-t border-slate-50">
                    <button 
                      onClick={() => navigate('/')}
                      className="bg-primary text-white px-12 py-5 font-button-text uppercase tracking-widest"
                    >
                      Return to Home
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar Summary */}
          {step < 4 && (
            <aside className="lg:col-span-5">
              <div className="bg-white p-8 border border-slate-100 rounded-sm sticky top-32">
                <h3 className="font-label-caps text-primary mb-8 border-b border-slate-50 pb-4">In Your Bag</h3>
                <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 bg-slate-50 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <p className="font-display text-sm text-primary">{item.name}</p>
                        <p className="font-sans text-[10px] text-slate-400">QTY: {item.quantity}</p>
                        <p className="font-mono text-xs text-primary mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  <div className="flex justify-between font-sans text-xs text-slate-500">
                    <span>Subtotal</span>
                    <span className="font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-sans text-xs text-slate-500">
                    <span>Shipping</span>
                    <span className="text-secondary font-medium tracking-tight italic">COMPLIMENTARY</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="font-display text-lg text-primary">Final Balance</span>
                    <span className="font-display text-2xl text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};
