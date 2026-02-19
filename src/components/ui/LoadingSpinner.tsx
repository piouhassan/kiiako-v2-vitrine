'use client';

import { HTMLAttributes } from 'react';

interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'white' | 'accent';
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const variantClasses = {
  primary: 'border-primary-500 border-t-transparent',
  secondary: 'border-secondary border-t-transparent',
  white: 'border-white border-t-transparent',
  accent: 'border-accent border-t-transparent'
};

export default function LoadingSpinner({ 
  size = 'md', 
  variant = 'primary', 
  className = '',
  ...props 
}: LoadingSpinnerProps) {
  return (
    <div
      className={`
        animate-spin rounded-full border-2
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    />
  );
}
