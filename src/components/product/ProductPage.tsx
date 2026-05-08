import { useState } from 'react';
import { Star, ShieldCheck, Microscope, ArrowRight, Minus, Plus } from 'lucide-react';
import { Page } from '../../App';

interface ProductPageProps {
  onNavigate: (page: Page) => void;
}

export default function ProductPage({ onNavigate }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('science');

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-10 py-16 grid lg:grid-cols-2 gap-16 md:gap-20">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-white rounded-sm overflow-hidden shadow-sm">
            <img 
              alt="Atlantic Cod Heritage Turkey" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 h-24 sm:h-32">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-sm overflow-hidden cursor-pointer border border-transparent hover:border-primary transition-all">
                <img 
                  alt={`Thumbnail ${i}`} 
                  className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" 
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=400" 
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <div className="mb-10 space-y-4">
            <div className="flex gap-4 items-center">
              <span className="label-caps text-secondary text-[11px] tracking-[0.2em]">Wet Micro-Batch No. 402</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-primary leading-tight">Atlantic Cod & Heritage Turkey.</h1>
            <p className="text-2xl font-sans font-medium text-primary-container">$4.50 <span className="text-sm font-normal text-slate-400">/ per 3oz unit</span></p>
          </div>

          <p className="font-serif text-lg text-on-surface-variant italic mb-10 leading-relaxed max-w-lg">
            A high-moisture, taurine-enriched formulation designed to mirror the dietary hydration cats receive in the wild. Gentle on kidneys, potent in protein.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-center gap-4 py-4 border-y border-slate-100">
               <div className="flex items-center border border-slate-300 rounded-sm">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-slate-50 transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-ui font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-slate-50 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
               </div>
               <button 
                onClick={() => onNavigate('cart')}
                className="flex-grow bg-primary-container text-white py-4 label-caps tracking-[0.25em] text-xs hover:bg-primary transition-all shadow-lg"
              >
                  Add To Synthesis Bag
               </button>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="space-y-6">
            <div className="flex border-b border-slate-200">
              {['science', 'nutrition', 'shipping'].map((tab) => (
                <button 
                  key={tab}
                  className={`px-6 py-3 label-caps text-[10px] transition-all relative ${activeTab === tab ? 'text-primary' : 'text-slate-400'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></div>}
                </button>
              ))}
            </div>
            
            <div className="min-h-[150px] font-sans text-sm text-slate-600 leading-relaxed">
              {activeTab === 'science' && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <p className="mb-4 font-serif italic">The Biological Invariant: 96% Animal Tissue Protein Content.</p>
                  <ul className="space-y-3 list-disc pl-4 italic opacity-80">
                    <li>Atlantic Cod: Bioavailable omega-3 fatty acids for cognitive health.</li>
                    <li>Heritage Turkey: Grass-read and humanely dispatched for muscle maintenance.</li>
                    <li>Synthesized Taurine: Ensuring cardiac efficiency and vision longevity.</li>
                  </ul>
                </div>
              )}
              {activeTab === 'nutrition' && <p>Detailed nutritional profile for batch 402 provided upon request or visible in physical labeling.</p>}
              {activeTab === 'shipping' && <p>Chilled logistics ensures structural integrity of proteins during transit. Arrival guaranteed in 48 hours for active subscribers.</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <section className="bg-primary/5 py-20 mt-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 flex flex-col items-center">
                <Microscope className="w-8 h-8 text-secondary" />
                <h5 className="label-caps !text-[10px] tracking-[0.3em]">Lab Verified</h5>
                <p className="text-xs font-serif text-slate-500 max-w-[200px]">Strict contaminant testing for heavy metals and pesticides.</p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
                <ShieldCheck className="w-8 h-8 text-secondary" />
                <h5 className="label-caps !text-[10px] tracking-[0.3em]">Gentle Ingress</h5>
                <p className="text-xs font-serif text-slate-500 max-w-[200px]">Formula optimized for the obligate carnivorous digestive tract.</p>
            </div>
            <div className="space-y-4 flex flex-col items-center">
                <ArrowRight className="w-8 h-8 text-secondary" />
                <h5 className="label-caps !text-[10px] tracking-[0.3em]">Rapid Transition</h5>
                <p className="text-xs font-serif text-slate-500 max-w-[200px]">Nutri-dense composition minimizes litter box output.</p>
            </div>
        </div>
      </section>
    </div>
  );
}
