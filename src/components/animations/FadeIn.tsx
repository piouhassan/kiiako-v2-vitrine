'use client';

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1
}: FadeInProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    freezeOnceVisible: true
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(16px)',
        transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
        transition: `opacity ${duration}s ease-out ${delay}s, filter ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`
      }}
    >
      {children}
    </div>
  );
}
