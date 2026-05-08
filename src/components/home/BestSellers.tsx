import { ArrowRight, Star } from 'lucide-react';
import { Page } from '../../App';

const BEST_SELLERS = [
  {
    id: 1,
    name: 'Wild Atlantic Cod / Turkey',
    type: 'Wet Micro-Batch',
    price: '$4.50/unit',
    image: 'https://images.unsplash.com/photo-1548546738-8509cb246ed3?auto=format&fit=crop&q=80&w=600',
    tag: 'ANALOGS'
  },
  {
    id: 2,
    name: 'Pure Sockeye Salmon',
    type: 'Freeze-Dried Raw',
    price: '$38.00',
    image: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&q=80&w=600',
    tag: 'ANALOGS'
  },
  {
    id: 3,
    name: 'Organic Pasture-Raised Chicken',
    type: 'Whole Prey Pate',
    price: '$4.25/unit',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=600',
    tag: 'ANALOGS'
  },
  {
    id: 4,
    name: 'Ancestral Blend',
    type: 'Raw Chilled',
    price: '$52.00',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600',
    tag: 'ANALOGS'
  }
];

interface BestSellersProps {
  onNavigate: (page: Page) => void;
}

export default function BestSellers({ onNavigate }: BestSellersProps) {
  return (
    <section className="py-24 bg-background overflow-hidden px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 px-4">
          <div className="max-w-xl">
            <h2 className="display-xl text-primary mb-4">Precision Batches.</h2>
            <p className="text-on-surface-variant font-serif opacity-80 italic">
              Each recipe is micro-batched to preserve essential amino acids and optimize mineral absorption. Available until sold out.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('collection')}
            className="hidden sm:flex items-center gap-2 button-text text-secondary border-b border-transparent hover:border-secondary transition-all"
          >
            View Entire Collection <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BEST_SELLERS.map((product) => (
            <div 
              key={product.id} 
              className="editorial-card p-6 flex flex-col group cursor-pointer"
              onClick={() => onNavigate('product')}
            >
              <div className="overflow-hidden mb-6 aspect-square bg-slate-50 relative rounded-sm">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  src={product.image} 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] bg-primary text-white py-1 px-3 label-caps tracking-[0.2em]">New Batch</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-6 flex-grow">
                <div className="flex justify-between items-start">
                  <span className="label-caps text-secondary text-[10px]">{product.type}</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-2.5 h-2.5 fill-accent-lavender text-accent-lavender" />)}
                  </div>
                </div>
                <h4 className="text-xl text-primary leading-tight font-serif tracking-tight pr-4">{product.name}</h4>
                <p className="text-sm font-sans font-medium text-on-surface/60">{product.price}</p>
              </div>

              <button className="w-full py-3 border border-primary text-primary button-text text-[10px] hover:bg-primary-container hover:text-white hover:border-primary-container transition-all">
                Select Options
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
