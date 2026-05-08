import { ArrowRight, BookOpen, Microscope, Droplets } from 'lucide-react';
import { Page } from '../../App';

interface NutritionPageProps {
  onNavigate: (page: Page, params?: any) => void;
}

export default function NutritionPage({ onNavigate }: NutritionPageProps) {
  const articles = [
    {
      id: 'carnivore-biology',
      title: 'The Biology of the Obligate Carnivore',
      excerpt: 'Understanding the evolutionary necessity of high-animal-protein diets and why carbohydrates are a biological misfit for felines.',
      icon: Microscope,
      readTime: '8 min read',
      tag: 'EVOLUTIONARY BIOLOGY'
    },
    {
      id: 'hydration-mechanisms',
      title: 'Hydration and the Feline Kidney',
      excerpt: 'Why cats have a low thirst drive and how high-moisture diets prevent common renal issues in domestic cats.',
      icon: Droplets,
      readTime: '6 min read',
      tag: 'RENAL HEALTH'
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <span className="label-caps text-secondary mb-4 block">THE SCIENCE OF FEEDING</span>
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-8 max-w-4xl mx-auto leading-tight italic">
            Nutrition is the primary lever for feline longevity.
          </h1>
          <p className="font-serif text-lg text-on-surface-variant max-w-2xl mx-auto italic opacity-80 leading-relaxed">
            Our research library provides a synthesis of evolutionary biology and modern clinical nutrition, empowering you to make informed decisions for your companion.
          </p>
        </div>
      </section>

      {/* Core Knowledge Section */}
      <section className="py-24 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {articles.map((article) => (
              <div 
                key={article.id}
                className="bg-surface border border-slate-100 p-10 flex flex-col group cursor-pointer hover:shadow-xl transition-all duration-500"
                onClick={() => onNavigate('article', { articleId: article.id })}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center group-hover:bg-primary-container transition-colors duration-500">
                    <article.icon className="text-secondary w-6 h-6 group-hover:text-white transition-colors" />
                  </div>
                  <span className="label-caps text-[10px] text-slate-400 group-hover:text-primary transition-colors">{article.readTime}</span>
                </div>
                <span className="label-caps text-[10px] text-secondary mb-4 tracking-[0.3em]">{article.tag}</span>
                <h3 className="text-3xl font-serif text-primary mb-6 leading-tight group-hover:italic transition-all">{article.title}</h3>
                <p className="font-serif text-slate-600 mb-10 leading-relaxed opacity-80 italic flex-grow">
                  "{article.excerpt}"
                </p>
                <button className="flex items-center gap-3 button-text text-[10px] text-primary self-start border-b border-transparent group-hover:border-primary transition-all">
                  Access Full Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Insights List */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-10">
          <h2 className="text-3xl font-serif mb-16 text-center italic">Nutritional Invariants</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h4 className="label-caps text-accent-sky">01. TAURINE</h4>
              <p className="font-serif text-sm opacity-70 leading-relaxed">Essential amino acid that cats cannot synthesize. Lack of taurine leads to irreversible cardiac dilation and vision loss.</p>
            </div>
            <div className="space-y-4">
              <h4 className="label-caps text-accent-sky">02. ARACHIDONIC ACID</h4>
              <p className="font-serif text-sm opacity-70 leading-relaxed">An essential fatty acid found only in animal fat. Necessary for inflammatory response and reproductive health.</p>
            </div>
            <div className="space-y-4">
              <h4 className="label-caps text-accent-sky">03. GLUCONEOGENESIS</h4>
              <p className="font-serif text-sm opacity-70 leading-relaxed">Cats constantly convert protein into energy, even when food is scarce. High protein isn't just a preference; it's a metabolic requirement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Synthesis Section */}
      <section className="py-24 px-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BookOpen className="w-10 h-10 text-secondary mx-auto mb-4" />
          <h3 className="text-3xl font-serif text-primary italic">"The transition to biological feeding is the most impactful intervention for feline longevity."</h3>
          <p className="body-md text-slate-500 font-serif italic max-w-2xl mx-auto">— Dr. Elena Vance, Lead Nutritional Architect</p>
        </div>
      </section>
    </div>
  );
}
