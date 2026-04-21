import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DottedMap from 'dotted-map';

const LINE_COLOR = '#C5A059';

// 6 European hubs (positions in dotted-map's 198 x 100 viewBox)
// y values approximated from same projection used in WorldMap.tsx
const HUBS = [
  { x: 99,    y: 25.11, label: 'EN', name: 'English',    region: 'UK & Ireland',     city: 'London' },
  { x: 100.5, y: 26.85, label: 'FR', name: 'French',     region: 'France',           city: 'Paris' },
  { x: 106.5, y: 24.25, label: 'DE', name: 'German',     region: 'DACH (DE/AT/CH)',  city: 'Berlin' },
  { x: 94,    y: 36.20, label: 'PT', name: 'Portuguese', region: 'Portugal & Brazil', city: 'Lisbon' },
  { x: 96.5,  y: 34.64, label: 'ES', name: 'Spanish',    region: 'Spain & Iberia',   city: 'Madrid' },
  { x: 106.5, y: 32.91, label: 'IT', name: 'Italian',    region: 'Italy',            city: 'Milan' },
];

// Network of connecting lines between hubs (subtle "we run as one team" visual)
const LINKS: [number, number][] = [
  [0, 1], // London → Paris
  [0, 4], // London → Madrid
  [1, 2], // Paris → Berlin
  [1, 4], // Paris → Madrid
  [3, 4], // Lisbon → Madrid
  [2, 5], // Berlin → Milan
  [4, 5], // Madrid → Milan
];

// Cropped Europe viewBox — focuses on the cluster
const VIEW_X = 86;
const VIEW_Y = 12;
const VIEW_W = 32;
const VIEW_H = 32;

export const EuropeMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredHub, setHoveredHub] = useState<number | null>(null);

  const map = new DottedMap({ height: 100, grid: 'diagonal' });
  const svgMap = map.getSVG({
    radius: 0.30,
    color: '#FFFFFF22',
    shape: 'circle',
    backgroundColor: 'transparent',
  });

  const createCurvedPath = (s: { x: number; y: number }, e: { x: number; y: number }) => {
    const dx = Math.abs(e.x - s.x);
    const midX = (s.x + e.x) / 2;
    const midY = Math.min(s.y, e.y) - Math.max(2, dx * 0.2);
    return `M ${s.x} ${s.y} Q ${midX} ${midY} ${e.x} ${e.y}`;
  };

  const isLinkActive = (a: number, b: number) =>
    hoveredHub === null || hoveredHub === a || hoveredHub === b;

  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl bg-[#1a1a1a]">
      {/* Atmospheric background glow */}
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-stone-700/30 rounded-full blur-[80px] pointer-events-none" />

      {/* Dotted Europe background */}
      <svg
        viewBox={`${VIEW_X} ${VIEW_Y} ${VIEW_W} ${VIEW_H}`}
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <image
          href={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          x="0"
          y="0"
          width="198"
          height="100"
          preserveAspectRatio="none"
        />
      </svg>

      {/* Markers, links, labels */}
      <svg
        ref={svgRef}
        viewBox={`${VIEW_X} ${VIEW_Y} ${VIEW_W} ${VIEW_H}`}
        className="absolute inset-0 w-full h-full select-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="europe-link-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={LINE_COLOR} stopOpacity="0" />
            <stop offset="50%" stopColor={LINE_COLOR} stopOpacity="0.9" />
            <stop offset="100%" stopColor={LINE_COLOR} stopOpacity="0" />
          </linearGradient>
          <filter id="europe-glow">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Links between hubs */}
        {LINKS.map(([a, b], i) => {
          const path = createCurvedPath(HUBS[a], HUBS[b]);
          const active = isLinkActive(a, b);
          return (
            <g key={`link-${i}`}>
              <path d={path} fill="none" stroke={LINE_COLOR} strokeOpacity="0.05" strokeWidth="0.15" />
              <motion.path
                d={path}
                fill="none"
                stroke="url(#europe-link-grad)"
                strokeWidth={active ? 0.18 : 0.10}
                opacity={active ? 1 : 0.25}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1.2, delay: 0.15 * i, ease: 'easeOut' }}
                style={{ transition: 'opacity 0.3s, stroke-width 0.3s' }}
              />
            </g>
          );
        })}

        {/* Hub markers */}
        {HUBS.map((hub, i) => {
          const isHovered = hoveredHub === i;
          const isDimmed = hoveredHub !== null && hoveredHub !== i;
          return (
            <g
              key={`hub-${i}`}
              onMouseEnter={() => setHoveredHub(i)}
              onMouseLeave={() => setHoveredHub(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Hit area */}
              <circle cx={hub.x} cy={hub.y} r="3" fill="transparent" pointerEvents="all" />

              {/* Pulse */}
              <circle
                cx={hub.x}
                cy={hub.y}
                r="0.6"
                fill={LINE_COLOR}
                opacity={isDimmed ? 0.1 : 0.4}
                pointerEvents="none"
              >
                <animate attributeName="r" from="0.6" to="2.6" dur="2.5s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" from={isDimmed ? '0.1' : '0.4'} to="0" dur="2.5s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
              </circle>

              {/* Dot */}
              <motion.circle
                cx={hub.x}
                cy={hub.y}
                r={isHovered ? 1.1 : 0.75}
                fill={LINE_COLOR}
                filter="url(#europe-glow)"
                opacity={isDimmed ? 0.4 : 1}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: 0.15 * i, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ transition: 'r 0.2s, opacity 0.3s' }}
                pointerEvents="none"
              />

              {/* Label */}
              <motion.text
                x={hub.x}
                y={hub.y - 1.6}
                textAnchor="middle"
                fill={isDimmed ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.85)'}
                fontSize="1.6"
                fontWeight="700"
                className="select-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.3, delay: 0.15 * i + 0.2 }}
                style={{ transition: 'fill 0.3s' }}
                pointerEvents="none"
              >
                {hub.label}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {/* Hover tooltip */}
      <AnimatePresence>
        {hoveredHub !== null && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute pointer-events-none z-10"
            style={{
              left: `${((HUBS[hoveredHub].x - VIEW_X) / VIEW_W) * 100}%`,
              top: `${((HUBS[hoveredHub].y - VIEW_Y) / VIEW_H) * 100 - 4}%`,
              transform: 'translate(-50%, -100%)',
            }}
          >
            <div className="bg-white text-[#1a1a1a] rounded-lg px-3 py-2 shadow-xl text-center whitespace-nowrap">
              <div className="text-xs font-bold">{HUBS[hoveredHub].name}</div>
              <div className="text-[10px] text-stone-500">{HUBS[hoveredHub].region}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Caption strip */}
      <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent pointer-events-none">
        <div className="text-[10px] tracking-[0.25em] text-stone-400 uppercase text-center">
          Native-language outbound across 6 European markets
        </div>
      </div>
    </div>
  );
};
