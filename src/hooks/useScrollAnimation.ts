'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  baseDelay?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0,
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true);
                if (triggerOnce) setHasAnimated(true);
              }, delay);
            } else {
              setIsVisible(true);
              if (triggerOnce) setHasAnimated(true);
            }
          } else if (!triggerOnce && !hasAnimated) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { ref, isVisible, hasAnimated };
}

export function useStaggeredScrollAnimation(itemCount: number, options: ScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true, baseDelay = 100 } = options;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation for each child
            for (let i = 0; i < itemCount; i++) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set([...prev, i]));
              }, i * baseDelay);
            }
            if (triggerOnce) setHasAnimated(true);
          } else if (!triggerOnce && !hasAnimated) {
            setVisibleItems(new Set());
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, itemCount, baseDelay, hasAnimated]);

  return { containerRef, visibleItems, hasAnimated };
}

// Scroll progress indicator
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
}

// Parallax effect hook
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translateY(0px)');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element has scrolled into view
      const distanceFromTop = scrolled - elementTop + windowHeight;
      const parallaxOffset = distanceFromTop * speed;
      
      setTransform(`translateY(${parallaxOffset}px)`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, transform };
}

// Reveal on scroll with direction
export function useReveal(direction: 'up' | 'down' | 'left' | 'right' = 'up', options: ScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true, delay = 0 } = options;
  
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => setIsVisible(true), delay);
            } else {
              setIsVisible(true);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay]);

  const directionStyles = {
    up: { initial: { opacity: 0, transform: 'translateY(40px)' }, visible: { opacity: 1, transform: 'translateY(0)' } },
    down: { initial: { opacity: 0, transform: 'translateY(-40px)' }, visible: { opacity: 1, transform: 'translateY(0)' } },
    left: { initial: { opacity: 0, transform: 'translateX(40px)' }, visible: { opacity: 1, transform: 'translateX(0)' } },
    right: { initial: { opacity: 0, transform: 'translateX(-40px)' }, visible: { opacity: 1, transform: 'translateX(0)' } },
  };

  const style = isVisible ? directionStyles[direction].visible : directionStyles[direction].initial;

  return { ref, style, isVisible };
}