import { Microscope, Leaf, ScrollText } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      icon: Microscope,
      title: 'Biologically Appropriate',
      description: 'We prioritize high-quality animal proteins that mirror a cat\'s natural carnivorous requirements.'
    },
    {
      icon: Leaf,
      title: 'Traceable Sourcing',
      description: 'Every ingredient is ethically sourced from suppliers who meet our rigorous standards for purity.'
    },
    {
      icon: ScrollText,
      title: 'Clinical Integrity',
      description: 'Formulated in collaboration with leading veterinary nutritionists for optimal organ health and longevity.'
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-3 gap-16 md:gap-12">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="space-y-6 group">
              <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center transition-all duration-500 group-hover:bg-primary-container">
                <pillar.icon className="text-secondary w-8 h-8 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl text-primary font-semibold tracking-tight">{pillar.title}</h3>
              <p className="body-md text-on-surface-variant leading-relaxed opacity-80">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
