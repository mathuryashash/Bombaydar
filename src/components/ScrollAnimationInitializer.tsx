'use client';

import { useEffect } from 'react';

export default function ScrollAnimationInitializer() {
  useEffect(() => {
    const cleanupFns: Array<() => void> = [];

    // Initialize reveal-on-scroll elements
    const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
    
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // Initialize stagger-reveal containers
    const staggerContainers = document.querySelectorAll('.stagger-reveal:not(.is-visible)');
    
    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            staggerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    staggerContainers.forEach((el) => staggerObserver.observe(el));

    // Initialize section-reveal elements
    const sectionElements = document.querySelectorAll('.section-reveal:not(.in-view)');
    
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -100px 0px' }
    );

    sectionElements.forEach((el) => sectionObserver.observe(el));

    // Parallax elements — desktop only (skips scroll-jank on low-end phones)
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    const parallaxElements = document.querySelectorAll('.parallax-element');

    if (isDesktop) {
      const handleParallax = () => {
        parallaxElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const scrolled = window.scrollY;
          const elementTop = rect.top + scrolled;
          const windowHeight = window.innerHeight;
          const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.3');

          const distanceFromTop = scrolled - elementTop + windowHeight;
          const parallaxOffset = distanceFromTop * speed;

          (el as HTMLElement).style.transform = `translateY(${parallaxOffset}px)`;
        });
      };

      // Throttled parallax
      let ticking = false;
      const throttledParallax = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleParallax();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', throttledParallax, { passive: true });
      handleParallax(); // Initial

      cleanupFns.push(() => window.removeEventListener('scroll', throttledParallax));
    }

    // Scroll progress bar
    const progressBar = document.querySelector('.scroll-progress-bar');
    const updateProgress = () => {
      if (progressBar) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(scrollTop / docHeight, 1);
        (progressBar as HTMLElement).style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    cleanupFns.push(() => revealObserver.disconnect());
    cleanupFns.push(() => staggerObserver.disconnect());
    cleanupFns.push(() => sectionObserver.disconnect());
    cleanupFns.push(() => window.removeEventListener('scroll', updateProgress));

    // Cleanup
    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return null;
}