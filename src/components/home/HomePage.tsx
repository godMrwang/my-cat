import Hero from './Hero';
import Philosophy from './Philosophy';
import BestSellers from './BestSellers';
import { Page } from '../../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="flex flex-col">
      <Hero onNavigate={onNavigate} />
      <Philosophy />
      <BestSellers onNavigate={onNavigate} />
      
      {/* Editorial Content Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 z-10">
            <span className="label-caps text-accent-sky">The Journal</span>
            <h2 className="display-xl italic font-normal">Beyond the bowl: Understanding the obligate carnivore.</h2>
            <p className="font-serif text-lg opacity-70 leading-relaxed max-w-md">
              Dive into our latest research on taurine synthesis, hydration mechanisms, and the impact of ancestral feeding on feline longevity.
            </p>
            <button className="flex items-center gap-4 group">
              <span className="button-text border-b border-white pb-1 group-hover:pr-4 transition-all">Read The Full Report</span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                <span className="text-xl">→</span>
              </div>
            </button>
          </div>
          <div className="relative">
            <img 
              alt="Scientific illustration" 
              className="w-full aspect-square object-cover rounded-sm opacity-60 grayscale scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCSc39IxJdBYdJU0kKNye5sXs3v9HSNo5pdfkAzxFRAl9oSn_aTOx6q5N5kA-golbNtGOs9QyPTFlaRP__LWRb-zw8qjY7-zILI4bcbcM79X09pPiiS7WxOlJ_E7WRcLrqGFYiqN7VMVIoKVYYmCbrSy8aildSQI5DTu5oQnZpl_-FgJCtSTvSgnTl1N3XcTxTOI9HnUgKzCnOA6SOTmfgPeznHG75fU_5_Oz9J9b7Oy4jc7sYn6okQzpnzQ6L_9R9Z4F8YkucPKA" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 bg-background flex flex-col items-center text-center px-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-serif mb-6 text-primary tracking-tight">Stay informed on feline longevity.</h2>
          <p className="body-lg text-slate-500 mb-10 font-serif italic">Join 12,000+ discerning cat owners receiving our bi-weekly nutritional synthesis.</p>
          <div className="flex w-full max-w-md mx-auto border-b-2 border-primary-container pb-2">
            <input 
              className="bg-transparent border-none focus:ring-0 w-full text-center font-serif text-lg" 
              placeholder="Your email address" 
              type="email" 
            />
            <button className="button-text text-primary-container">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
