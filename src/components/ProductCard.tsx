import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-white mb-6 aspect-[4/5] flex items-center justify-center cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tags?.[0] && (
          <div className="absolute top-4 left-4">
            <span className="bg-secondary-container/20 text-secondary border border-secondary/20 px-3 py-1 font-label-caps text-[10px] rounded-sm">
              {product.tags[0]}
            </span>
          </div>
        )}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="absolute bottom-4 left-4 right-4 bg-primary text-white py-4 font-button-text opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 active:scale-95 z-10"
        >
          Quick Add — ${product.price.toFixed(2)}
        </button>
      </div>
      <div className="cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
        <h3 className="font-display text-lg text-primary mb-1">{product.name}</h3>
        <p className="font-sans text-on-surface-variant text-sm mb-3 line-clamp-2">{product.description}</p>
        <span className="font-label-caps text-primary tracking-widest">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};
