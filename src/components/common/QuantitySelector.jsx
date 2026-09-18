import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

export function QuantitySelector({ quantity, onChange, min = 1, max = 10, disabled = false }) {
  const handleDecrement = () => {
    if (quantity > min && !disabled) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max && !disabled) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center gap-3 bg-gray-900/90 border border-gray-800 rounded-xl p-1 shrink-0">
      <motion.button
        whileTap={{ scale: 0.9 }}
        type="button"
        disabled={quantity <= min || disabled}
        onClick={handleDecrement}
        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
      >
        <Minus className="w-4 h-4" />
      </motion.button>
      <span className="w-6 text-center text-sm font-bold text-white font-mono">
        {quantity}
      </span>
      <motion.button
        whileTap={{ scale: 0.9 }}
        type="button"
        disabled={quantity >= max || disabled}
        onClick={handleIncrement}
        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
      >
        <Plus className="w-4 h-4" />
      </motion.button>
    </div>
  );
}
