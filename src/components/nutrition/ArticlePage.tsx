import { ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { Page } from '../../App';

interface ArticlePageProps {
  articleId: string;
  onNavigate: (page: Page) => void;
}

const ARTICLE_CONTENT: Record<string, any> = {
  'carnivore-biology': {
    title: 'The Biology of the Obligate Carnivore',
    author: 'Dr. Elena Vance',
    date: 'March 15, 2024',
    readTime: '8 min read',
    content: `
      <p class="mb-6">The domestic cat (Felis catus) is a descendant of the Near Eastern wildcat. For over 10,000 years, their digestive system has remained virtually unchanged. Unlike dogs, which are scavenging omnivores, cats are <strong>obligate carnivores</strong>.</p>
      
      <h2 class="text-2xl font-serif text-primary mt-12 mb-6 italic">The Metabolic Invariant</h2>
      <p class="mb-6">Cats lack the metabolic pathways to synthesize certain essential nutrients from plant matter. They require pre-formed nutrients that are only found in animal tissue, such as Taurine, Vitamin A, and Arachidonic Acid.</p>
      
      <h2 class="text-2xl font-serif text-primary mt-12 mb-6 italic">Carbohydrate Maladaptation</h2>
      <p class="mb-6">A cat's liver lacks the enzyme glucokinase, which is used to process large amounts of glucose. When fed high-carbohydrate diets (common in commercial kibble), cats often experience insulin spikes and chronic inflammation, leading to metabolic syndromes.</p>
      
      <blockquote class="border-l-4 border-secondary pl-6 py-2 my-10 italic text-lg text-primary/80">
        "Feeding a cat plant-based protein is like fueling a jet engine with wood chips. It might burn, but the internal damage is catastrophic over time."
      </blockquote>
      
      <h2 class="text-2xl font-serif text-primary mt-12 mb-6 italic">Ancestral Ratios</h2>
      <p class="mb-6">Studies of feral cat diets show a preference for caloric intake of 52% protein, 46% fat, and only 2% carbohydrates. Our mission is to mirror these ratios in every batch we craft.</p>
    `,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800'
  },
  'hydration-mechanisms': {
    title: 'Hydration and the Feline Kidney',
    author: 'Dr. Julian Thorne',
    date: 'April 02, 2024',
    readTime: '6 min read',
    content: `
      <p class="mb-6">Wild felines derive most of their hydration directly from their prey, which is typically 70-75% water. Consequently, cats have evolved a very low thirst drive. They are biologically programmed to "eat" their water.</p>
      
      <h2 class="text-2xl font-serif text-primary mt-12 mb-6 italic">The Chronic Dehydration Crisis</h2>
      <p class="mb-6">When domestic cats are fed dry food (only 10% moisture), they rarely drink enough water to compensate. This leads to a state of chronic low-level dehydration, stressing the kidneys and concentrating urine, which can lead to crystals and blockages.</p>
      
      <h2 class="text-2xl font-serif text-primary mt-12 mb-6 italic">Renal Preservation</h2>
      <p class="mb-6">High-moisture diets take the workload off the kidneys by allowing toxins to be flushed more efficiently. A hydrated cat has better circulation, clearer skin, and significantly reduced risk of urinary tract disease.</p>
      
      <div class="bg-primary-container text-white p-8 my-12 rounded-sm shadow-inner italic">
        "Transitioning from kibble to a high-moisture diet can increase a cat's total daily water intake by up to 200% without the cat ever visiting the water bowl."
      </div>
      
      <h2 class="text-2xl font-serif text-primary mt-12 mb-6 italic">The Synthesis</h2>
      <p class="mb-6">At Feline Wellness, our wet formulations maintain a 78% moisture content, providing structural hydration that mirrors ancestral prey and protects organ integrity for years to come.</p>
    `,
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=800'
  }
};

export default function ArticlePage({ articleId, onNavigate }: ArticlePageProps) {
  const article = ARTICLE_CONTENT[articleId] || ARTICLE_CONTENT['carnivore-biology'];

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-10 pt-16">
        <button 
          onClick={() => onNavigate('nutrition')}
          className="flex items-center gap-2 label-caps text-[10px] text-slate-500 hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Research
        </button>
        
        <div className="space-y-6 mb-12">
          <span className="label-caps text-secondary tracking-[0.3em] font-bold text-[10px]">SCIENTIFIC REPORT</span>
          <h1 className="text-4xl md:text-5xl font-serif text-primary leading-tight italic">{article.title}</h1>
          
          <div className="flex justify-between items-center py-6 border-y border-slate-100 italic">
            <div className="flex gap-10 text-xs text-slate-500 font-serif">
               <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 not-italic mb-1">Author</span>
                  {article.author}
               </div>
               <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 not-italic mb-1">Date Published</span>
                  {article.date}
               </div>
               <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 not-italic mb-1">Reading Time</span>
                  {article.readTime}
               </div>
            </div>
            <div className="flex gap-4">
              <button className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400 hover:text-primary"><Share2 className="w-4 h-4" /></button>
              <button className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400 hover:text-primary"><Bookmark className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-10 mb-16">
        <div className="aspect-[21/9] rounded-sm overflow-hidden shadow-sm lg:scale-105">
          <img alt={article.title} className="w-full h-full object-cover grayscale-[20%]" src={article.image} />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-10 font-serif text-lg leading-relaxed text-on-surface-variant italic">
        <div 
          dangerouslySetInnerHTML={{ __html: article.content }} 
          className="prose prose-slate prose-lg lg:prose-xl italic"
        />
      </article>

      {/* Related Footer */}
      <div className="max-w-4xl mx-auto px-10 mt-24 pt-16 border-t border-slate-200 text-center space-y-8">
        <h4 className="label-caps text-xs">Ready for Biological Precision?</h4>
        <button 
          onClick={() => onNavigate('collection')}
          className="bg-primary-container text-white px-12 py-5 label-caps tracking-[0.3em] text-xs hover:bg-primary transition-all shadow-xl"
        >
          Shop The Synthesis
        </button>
      </div>
    </div>
  );
}
