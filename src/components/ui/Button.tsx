import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold';
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const baseStyles = "rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center gap-2";

const variantStyles = {
  primary: "bg-tawf-green text-tawf-sand hover:bg-tawf-green-light",
  secondary: "border border-tawf-green text-tawf-green hover:bg-tawf-green hover:text-tawf-sand",
  gold: "bg-tawf-gold text-tawf-green hover:bg-white"
};

const sizeStyles = {
  sm: "px-6 py-2.5",
  md: "px-8 py-4",
  lg: "px-10 py-5"
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  size = 'md'
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();

  if (href) {
    return <Link to={href} className={classes}>{children}</Link>;
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
