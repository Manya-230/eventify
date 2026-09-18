import React from 'react';
import { cn } from '../../utils/helpers';

export function Badge({ children, variant = 'category', className = '', ...props }) {
  const variants = {
    category: "bg-purple-950/80 text-purple-300 border border-purple-800/50 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm",
    trending: "bg-amber-950/80 text-amber-300 border border-amber-700/50 text-xs font-semibold px-2.5 py-1 rounded-full",
    featured: "bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md shadow-purple-600/30",
    confirmed: "bg-emerald-950/90 text-emerald-300 border border-emerald-700/50 text-xs font-medium px-2.5 py-1 rounded-full",
    cancelled: "bg-rose-950/90 text-rose-300 border border-rose-700/50 text-xs font-medium px-2.5 py-1 rounded-full",
    outline: "border border-gray-700 text-gray-400 text-xs font-medium px-2.5 py-1 rounded-full"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 shrink-0 select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
