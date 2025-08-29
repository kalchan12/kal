"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

export function useAnimatedCounter(targetValue: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const animate = useCallback((startTime: number) => {
    const animateStep = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentCount = Math.floor(progress * targetValue);
        setCount(currentCount);

        if (progress < 1) {
            requestAnimationFrame(animateStep);
        } else {
            setCount(targetValue);
        }
    };
    requestAnimationFrame(animateStep);
  }, [targetValue, duration]);


  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(performance.now());
            observer.unobserve(currentRef);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    return () => {
      if(currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animate]);

  return { count, ref };
}
