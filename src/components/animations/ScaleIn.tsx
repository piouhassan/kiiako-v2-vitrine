'use client';

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  initialScale?: number;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.8,
  className = '',
  threshold = 0.2,
  initialScale = 0.85
}: ScaleInProps) {
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
        transform: isVisible ? `scale(1) translateY(0)` : `scale(${initialScale}) translateY(50px)`,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
}
