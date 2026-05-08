/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import TopNavBar from './components/layout/TopNavBar';
import Footer from './components/layout/Footer';
import HomePage from './components/home/HomePage';
import CollectionPage from './components/collection/CollectionPage';
import ProductPage from './components/product/ProductPage';
import CartPage from './components/cart/CartPage';
import NutritionPage from './components/nutrition/NutritionPage';
import ArticlePage from './components/nutrition/ArticlePage';

export type Page = 'home' | 'collection' | 'product' | 'cart' | 'nutrition' | 'article';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [articleParams, setArticleParams] = useState<{ articleId: string } | null>(null);
  const [cartCount, setCartCount] = useState(2);

  const navigateTo = (page: Page, params?: any) => {
    if (page === 'article' && params) {
      setArticleParams(params);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopNavBar 
        currentPage={currentPage} 
        cartCount={cartCount} 
        onNavigate={navigateTo} 
      />
      
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
            {currentPage === 'collection' && <CollectionPage onNavigate={navigateTo} />}
            {currentPage === 'product' && <ProductPage onNavigate={navigateTo} />}
            {currentPage === 'cart' && <CartPage onNavigate={navigateTo} />}
            {currentPage === 'nutrition' && <NutritionPage onNavigate={navigateTo} />}
            {currentPage === 'article' && articleParams && (
              <ArticlePage articleId={articleParams.articleId} onNavigate={navigateTo} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
