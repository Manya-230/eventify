import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  icon: Icon,
  fullWidth = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary: "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/25 active:bg-purple-700",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700/60 active:bg-gray-800",
    outline: "border border-purple-500/50 hover:bg-purple-500/10 text-purple-300 hover:text-purple-200 active:bg-purple-500/20",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800/60 active:bg-gray-800",
    danger: "bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/25 active:bg-rose-700",
    glass: "bg-white/10 hover:bg-white/15 text-white backdrop-blur-md border border-white/10 active:bg-white/5"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5 font-semibold"
  };

  return (
    <motion.button
      whileTap={disabled ? undefined : { scale: 0.97 }}
      whileHover={disabled ? undefined : { y: -1 }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {Icon && <Icon className={cn("w-4 h-4 shrink-0", size === 'lg' && "w-5 h-5", size === 'sm' && "w-3.5 h-3.5")} />}
      {children}
    </motion.button>
  );
}
