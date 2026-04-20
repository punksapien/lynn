import React from 'react';
import { motion } from 'framer-motion';

export const INK = '#1a1a1a';
export const CREAM = '#F9F8F4';
export const GOLD = '#C5A059';
export const BURGUNDY = '#6B1F2E';
export const RULE = 'rgba(26,26,26,0.14)';

export const Eyebrow: React.FC<{ children: React.ReactNode; color?: string; className?: string }> = ({
  children,
  color = '#8a8580',
  className = '',
}) => (
  <span
    className={`text-[10px] font-bold tracking-[0.22em] uppercase ${className}`}
    style={{ color }}
  >
    {children}
  </span>
);

export const SectionNum: React.FC<{ n: string; kicker: string; title: string; accent?: string }> = ({
  n,
  kicker,
  title,
  accent = INK,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <div className="flex items-center gap-3 mb-3">
      <span className="text-[13px] font-medium tabular-nums" style={{ color: accent }}>§{n}</span>
      <span className="h-px w-6" style={{ background: accent }} />
      <Eyebrow color={accent === INK ? '#8a8580' : accent}>{kicker}</Eyebrow>
    </div>
    <h2 className="font-serif text-[28px] md:text-[36px] leading-[1.12] tracking-tight max-w-[30ch]" style={{ color: accent }}>
      {title}
    </h2>
  </motion.div>
);
