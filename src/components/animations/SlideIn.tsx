'use client';

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface SlideInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  offset?: number;
  className?: string;
  threshold?: number;
}

export function SlideIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  offset = 60,
  className = '',
  threshold = 0.1
}: SlideInProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    freezeOnceVisible: true
  });

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';

    switch (direction) {
      case 'up':
        return `translate(0, ${offset}px)`;
      case 'down':
        return `translate(0, -${offset}px)`;
      case 'left':
        return `translate(${offset}px, 0)`;
      case 'right':
        return `translate(-${offset}px, 0)`;
      default:
        return `translate(0, ${offset}px)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(16px)',
        transform: getTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, filter ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`
      }}
    >
      {children}
    </div>
  );
}
