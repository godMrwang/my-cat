import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ARTICLES } from '../data';
import { ArrowLeft, Share2, Bookmark } from 'lucide-react';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === id);

  if (!article) return <div className="pt-40 text-center">Article not found</div>;

  return (
    <div className="pt-24 pb-20">
      <article className="max-w-4xl mx-auto px-10">
        <Link to="/journal" className="inline-flex items-center gap-2 font-button-text text-slate-400 hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> BACK TO JOURNAL
        </Link>

        <header className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="font-label-caps text-xs text-secondary">{article.category}</span>
              <span className="text-slate-200">•</span>
              <span className="font-label-caps text-[10px] text-slate-400">{article.date}</span>
            </div>
            <div className="flex gap-4 opacity-50">
              <Share2 className="w-4 h-4 cursor-pointer hover:text-primary" />
              <Bookmark className="w-4 h-4 cursor-pointer hover:text-primary" />
            </div>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-primary leading-tight mb-8">
            {article.title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200"></div>
            <div>
              <p className="font-label-caps text-[10px] text-primary">{article.author}</p>
              <p className="text-[10px] text-slate-400 uppercase font-sans">CONTRIBUTING EXPERT</p>
            </div>
          </div>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="aspect-video overflow-hidden bg-slate-100 mb-16 shadow-2xl"
        >
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </motion.div>

        <div className="prose prose-slate max-w-none">
          <div 
            className="font-sans text-lg text-on-surface-variant leading-relaxed space-y-8"
            dangerouslySetInnerHTML={{ __html: article.content || '' }}
          />
        </div>

        {/* Author Bio */}
        <div className="mt-24 p-10 bg-background-warm border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
           <div className="w-24 h-24 flex-shrink-0 bg-slate-200 rounded-sm overflow-hidden">
             {/* Placeholder for real author image */}
           </div>
           <div>
             <h4 className="font-display text-xl text-primary mb-2">About the Author</h4>
             <p className="font-sans text-sm text-on-surface-variant italic leading-relaxed">
               {article.author} focuses on clinical feline nutrition and microbiome health. With over 15 years in veterinary practice, she champions the shift towards biologically appropriate nutritional strategies.
             </p>
           </div>
        </div>

        {/* More Articles */}
        <div className="mt-32">
          <h3 className="font-label-caps text-primary mb-12 text-center tracking-[0.2em]">CONTINUE EXPLORING</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {ARTICLES.filter(a => a.id !== id).map(a => (
              <Link key={a.id} to={`/journal/${a.id}`} className="group">
                <div className="aspect-[16/9] overflow-hidden mb-6">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="font-display text-xl text-primary group-hover:text-secondary transition-colors">{a.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
