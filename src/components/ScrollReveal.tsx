'use client';

import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3;
}

export default function ScrollReveal({ children, className, delay = 1 }: ScrollRevealProps) {
  const { ref, revealed } = useScrollReveal();
  if (revealed) {
    return (
      <div ref={ref} className={cn(className, 'opacity-100 translate-y-0 scale-100')}>
        {children}
      </div>
    );
  }
  return (
    <div
      ref={ref}
      className={cn(
        'reveal',
        `reveal-delay-${delay}`,
        'opacity-0 translate-y-[24px] scale-[0.98]',
        className
      )}
    >
      {children}
    </div>
  );
}
