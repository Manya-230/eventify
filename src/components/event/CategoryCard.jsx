import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Radio, Disc, Music, Sparkles, Moon, BookOpen, Smile, GraduationCap } from 'lucide-react';
import { cn } from '../../utils/helpers';

const iconMap = {
  Radio,
  Disc,
  Music,
  Sparkles,
  Moon,
  BookOpen,
  Smile,
  GraduationCap
};

export function CategoryCard({ category }) {
  const IconComponent = iconMap[category.iconName] || Sparkles;

  return (
    <Link to={`/discover?category=${encodeURIComponent(category.name)}`}>
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative h-40 rounded-2xl overflow-hidden border border-gray-800/80 p-5 flex flex-col justify-between shadow-lg transition-all duration-300 hover:border-purple-500/50"
      >
        {/* Background Image with Gradient Overlay */}
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={cn("absolute inset-0 bg-gradient-to-t opacity-90 transition-opacity group-hover:opacity-95", category.color)} />

        {/* Category Icon */}
        <div className="relative z-10 w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md">
          <IconComponent className="w-5 h-5" />
        </div>

        {/* Text Details */}
        <div className="relative z-10 space-y-1">
          <h4 className="text-lg font-bold text-white font-heading tracking-tight group-hover:text-purple-200 transition-colors">
            {category.name}
          </h4>
          <p className="text-[11px] text-gray-200/90 line-clamp-1 leading-tight">
            {category.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
