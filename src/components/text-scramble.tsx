'use client';

import { useState, useEffect, useRef } from 'react';

export function TextScramble({ text }: { text: string }) {
  const [currentText, setCurrentText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const animationFrameId = useRef<number>();
  const lastUpdateTime = useRef<number>(0);
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  
  const scramble = (timestamp: number) => {
    if (!lastUpdateTime.current) lastUpdateTime.current = timestamp;

    const deltaTime = timestamp - lastUpdateTime.current;
    if (deltaTime < 20) {
      animationFrameId.current = requestAnimationFrame(scramble);
      return;
    }

    const newText = Array.from(text).map((char, index) => {
        if (Math.random() > 0.9) {
            return chars[Math.floor(Math.random() * chars.length)];
        }
        return char;
    }).join('');

    setCurrentText(newText);
    lastUpdateTime.current = timestamp;

    animationFrameId.current = requestAnimationFrame(scramble);
  };
  
  const reset = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    setCurrentText(text);
    lastUpdateTime.current = 0;
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('mouseenter', () => requestAnimationFrame(scramble));
      currentRef.addEventListener('mouseleave', reset);
    }
    
    return () => {
        if (currentRef) {
            currentRef.removeEventListener('mouseenter', () => requestAnimationFrame(scramble));
            currentRef.removeEventListener('mouseleave', reset);
        }
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
    }
  }, [text]);

  return <span ref={ref} className="transition-colors duration-300 hover:text-primary">{currentText}</span>;
}
