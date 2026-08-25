'use client';

import React, { ReactNode, forwardRef } from 'react';
import { useReveal, useStaggeredScrollAnimation, useParallax } from '@/hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  triggerOnce?: boolean;
  threshold?: number;
}

export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, direction = 'up', delay = 0, className = '', triggerOnce = true, threshold = 0.1 }, ref) => {
    const { ref: revealRef, style, isVisible } = useReveal(direction, { delay, triggerOnce, threshold });
    
    const combinedRef = (node: HTMLDivElement | null) => {
      revealRef.current = node;
      if (ref) {
        if (typeof ref === 'function') ref(node);
        else ref.current = node;
      }
    };

    return (
      <div
        ref={combinedRef}
        className={className}
        style={{
          ...style,
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'opacity, transform',
        }}
      >
        {children}
      </div>
    );
  }
);

ScrollReveal.displayName = 'ScrollReveal';

interface StaggeredRevealProps {
  children: ReactNode[];
  direction?: 'up' | 'down' | 'left' | 'right';
  baseDelay?: number;
  className?: string;
  itemClassName?: string;
  triggerOnce?: boolean;
  threshold?: number;
}

export function StaggeredReveal({ 
  children, 
  direction = 'up', 
  baseDelay = 100, 
  className = '', 
  itemClassName = '',
  triggerOnce = true,
  threshold = 0.1 
}: StaggeredRevealProps) {
  const { containerRef, visibleItems } = useStaggeredScrollAnimation(children.length, { 
    baseDelay, 
    triggerOnce, 
    threshold 
  });

  const directionStyles = {
    up: { initial: { opacity: 0, transform: 'translateY(30px)' }, visible: { opacity: 1, transform: 'translateY(0)' } },
    down: { initial: { opacity: 0, transform: 'translateY(-30px)' }, visible: { opacity: 1, transform: 'translateY(0)' } },
    left: { initial: { opacity: 0, transform: 'translateX(30px)' }, visible: { opacity: 1, transform: 'translateX(0)' } },
    right: { initial: { opacity: 0, transform: 'translateX(-30px)' }, visible: { opacity: 1, transform: 'translateX(0)' } },
  };

  return (
    <div ref={containerRef} className={className}>
      {React.Children.toArray(children).map((child, index) => {
        const isVisible = visibleItems.has(index);
        const style = isVisible ? directionStyles[direction].visible : directionStyles[direction].initial;
        
        return (
          <div
            key={index}
            className={itemClassName}
            style={{
              ...style,
              transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
              transitionDelay: `${index * baseDelay}ms`,
              willChange: 'opacity, transform',
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

// Parallax wrapper component
interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.3, className = '' }: ParallaxProps) {
  const { ref, transform } = useParallax(speed);
  
  return (
    <div ref={ref} className={className} style={{ transform, willChange: 'transform' }}>
      {children}
    </div>
  );
}


