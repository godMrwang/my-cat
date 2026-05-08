import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Page } from '../../App';

const PRODUCTS = [
  { id: 1, name: 'Atlantic Cod & Heritage Turkey', category: 'Wet Micro-Batch', price: '$4.50', image: 'https://images.unsplash.com/photo-1548546738-8509cb246ed3?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Sockeye Salmon & Kelp', category: 'Freeze-Dried Raw', price: '$38.00', image: 'https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'Pasture-Raised Poultry Pate', category: 'Whole Prey', price: '$4.25', image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'Venison & Rabbit Ancestral Blend', category: 'Raw Chilled', price: '$52.00', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600' },
  { id: 5, name: 'Ocean Whitefish & Crab', category: 'Wet Micro-Batch', price: '$4.80', image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=600' },
  { id: 6, name: 'Quail & Duck Confit', category: 'Gourmet Selection', price: '$6.50', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600' },
];

interface CollectionPageProps {
  onNavigate: (page: Page) => void;
}

export default function CollectionPage({ onNavigate }: CollectionPageProps) {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-12 px-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <span className="label-caps text-secondary mb-4 block">THE ARCHIVE</span>
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6 pr-10">Precision Nutrition.</h1>
          <p className="font-serif text-lg text-on-surface-variant max-w-2xl italic opacity-80">
            A curated selection of ancestral-inspired feline diets. Each formulation is rooted in evolutionary biology and refined by modern veterinary insights.
          </p>
        </div>
      </section>

      {/* Filters & Sorting */}
      <div className="sticky top-24 bg-background/90 backdrop-blur-sm z-40 border-b border-slate-100 px-10">
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
          <button className="flex items-center gap-2 button-text text-[10px] text-primary-container">
            <SlidersHorizontal className="w-4 h-4" /> Filter By
          </button>
          
          <div className="flex gap-8">
            <button className="flex items-center gap-1 button-text text-[10px] text-primary-container border-b-2 border-transparent hover:border-primary-container transition-all">
              All Products
            </button>
            <button className="flex items-center gap-1 button-text text-[10px] text-slate-400 hover:text-primary-container transition-all">
              Wet Micro-Batch
            </button>
            <button className="flex items-center gap-1 button-text text-[10px] text-slate-400 hover:text-primary-container transition-all">
              Freeze-Dried Raw
            </button>
          </div>

          <div className="flex items-center gap-2 button-text text-[10px] text-primary-container">
            Sort: Recommended <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {PRODUCTS.map((product) => (
          <div 
            key={product.id} 
            className="editorial-card group cursor-pointer overflow-hidden p-4"
            onClick={() => onNavigate('product')}
          >
            <div className="aspect-[4/5] overflow-hidden mb-6 bg-slate-50 relative rounded-sm">
              <img 
                alt={product.name} 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                src={product.image} 
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="text-[9px] bg-white text-primary-container py-1 px-3 label-caps shadow-sm">Ref. {product.id.toString().padStart(3, '0')}</span>
              </div>
            </div>
            
            <div className="space-y-1 mb-8">
              <span className="label-caps text-secondary text-[10px] tracking-[0.2em]">{product.category}</span>
              <h4 className="text-xl text-primary font-serif tracking-tight leading-snug">{product.name}</h4>
              <p className="text-sm font-sans font-medium text-slate-500">{product.price}</p>
            </div>

            <button className="w-full py-4 bg-primary-container text-surface button-text text-[10px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              Select Options — {product.price}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="max-w-7xl mx-auto px-10 py-20 flex justify-center border-t border-slate-100">
        <button className="button-text text-primary-container border-b-2 border-primary-container pb-1 text-xs">Load More Scientific Batches</button>
      </div>
    </div>
  );
}
