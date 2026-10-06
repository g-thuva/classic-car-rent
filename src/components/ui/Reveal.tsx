import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds */
  delay?: number;
  /** Vertical travel in px */
  y?: number;
  /** Horizontal travel in px (optional) */
  x?: number;
}

/**
 * Fade-up on scroll. Animation always ends at opacity 1 / no transform, and is
 * skipped entirely when the user prefers reduced motion.
 */
export const Reveal = ({ children, className, delay = 0, y = 24, x = 0 }: RevealProps) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
