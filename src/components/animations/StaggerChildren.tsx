'use client';

import { ReactNode, ReactElement, Children, cloneElement, isValidElement } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  threshold?: number;
}

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className = '',
  threshold = 0.1
}: StaggerChildrenProps) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold,
    freezeOnceVisible: true
  });

  const childrenArray = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          const element = child as ReactElement<Record<string, unknown>>;
          const existingStyle = typeof element.props.style === 'object' && element.props.style !== null ? element.props.style as React.CSSProperties : {};
          const childProps = {
            ...element.props,
            style: {
              ...existingStyle,
              opacity: isVisible ? 1 : 0,
              filter: isVisible ? 'blur(0px)' : 'blur(16px)',
              transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
              transition: `opacity 0.6s ease-out ${index * staggerDelay}s, filter 0.6s ease-out ${index * staggerDelay}s, transform 0.6s ease-out ${index * staggerDelay}s`
            }
          };
          return cloneElement(element, childProps);
        }
        return child;
      })}
    </div>
  );
}
