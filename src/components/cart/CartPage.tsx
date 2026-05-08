import { Trash2, ArrowLeft, ArrowRight, Minus, Plus } from 'lucide-react';
import { Page } from '../../App';

interface CartPageProps {
  onNavigate: (page: Page) => void;
}

export default function CartPage({ onNavigate }: CartPageProps) {
  const cartItems = [
    {
      id: 1,
      name: 'Atlantic Cod & Heritage Turkey',
      variant: 'Case of 12 (3oz)',
      price: 54.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: 2,
      name: 'Pure Sockeye Salmon',
      variant: 'Freeze-Dried 8oz',
      price: 38.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1553649033-3fbc8d0fa3cb?auto=format&fit=crop&q=80&w=400'
    }
  ];

  const subtotal: number = cartItems.reduce((acc: number, item) => acc + (item.price * item.quantity), 0);
  const shipping: number = 0; // Complimentary for $75+
  const total: number = subtotal + shipping;

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-10 py-16">
        <div className="flex justify-between items-center mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-serif text-primary">Your Synthesis Bag</h1>
          <button 
            onClick={() => onNavigate('collection')}
            className="flex items-center gap-2 label-caps text-[10px] text-slate-500 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Continue Compiling
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Cart List */}
          <div className="lg:col-span-2 space-y-10">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-8 group">
                <div className="w-24 h-32 md:w-32 md:h-40 bg-white rounded-sm overflow-hidden flex-shrink-0 shadow-sm">
                  <img alt={item.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" src={item.image} referrerPolicy="no-referrer" />
                </div>
                
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif text-primary">{item.name}</h3>
                    <p className="text-xs label-caps text-secondary font-medium">{item.variant}</p>
                    <p className="text-sm font-sans font-semibold text-primary/70">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-slate-200 rounded-sm">
                      <button className="p-2 hover:bg-slate-50 opacity-50 hover:opacity-100 transition-all">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-4 text-xs font-medium font-ui">{item.quantity}</span>
                      <button className="p-2 hover:bg-slate-50 opacity-50 hover:opacity-100 transition-all">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button className="text-slate-300 hover:text-red-400 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="py-20 text-center space-y-6">
                <p className="font-serif text-xl italic text-slate-400">Your synthesis bag is currently empty.</p>
                <button 
                   onClick={() => onNavigate('collection')}
                   className="bg-primary-container text-white px-10 py-4 label-caps text-xs"
                >
                    Visit Collection
                </button>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-10 border border-slate-100 shadow-xl rounded-sm sticky top-32">
              <h4 className="label-caps mb-8 text-[11px] border-b border-slate-100 pb-4">Synthesis Summary</h4>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="font-serif text-slate-500 italic">Subtotal</span>
                  <span className="font-sans font-semibold text-primary">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-serif text-slate-500 italic">Structural Logistics (Shipping)</span>
                  <span className="font-sans font-semibold text-secondary">{shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between">
                  <span className="label-caps">Total Synthesis</span>
                  <span className="text-xl font-sans font-bold text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-primary-container text-white py-5 label-caps text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-primary transition-all shadow-lg active:scale-95 group">
                Begin Dispatch Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-8 space-y-4 text-[10px] font-serif text-slate-400 italic text-center">
                <p>Prices in USD. All formulations are verified before dispatch.</p>
                <div className="flex justify-center gap-4 border-t border-slate-50 pt-4 opacity-50 grayscale">
                    <img alt="Visa" className="h-3" src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" />
                    <img alt="MasterCard" className="h-3" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" />
                    <img alt="Apple Pay" className="h-3" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
