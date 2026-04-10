import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DottedMap from 'dotted-map';

const LINE_COLOR = '#C5A059';

// Pre-computed positions using dotted-map's getPin() projection (viewBox 0 0 198 100)
const HUBS = [
  { x: 99, y: 25.11, label: 'EN', name: 'English', region: 'UK, Nordics, Global' },
  { x: 100, y: 26.85, label: 'FR', name: 'French', region: 'France, Benelux, W. Africa' },
  { x: 106.5, y: 24.25, label: 'DE', name: 'German', region: 'DACH region' },
  { x: 96.5, y: 34.64, label: 'ES', name: 'Spanish', region: 'Spain, LATAM' },
  { x: 106.5, y: 32.91, label: 'IT', name: 'Italian', region: 'Italy, Central EU' },
  { x: 94, y: 35.51, label: 'PT', name: 'Portuguese', region: 'Portugal, Brazil' },
  { x: 55, y: 33.77, label: 'US', name: 'English', region: 'USA & Canada' },
];

const REACH_POINTS = [
  { x: 144, y: 42.44 },    // New Delhi
  { x: 160, y: 59.76 },    // Singapore
  { x: 109.5, y: 81.41 },  // Cape Town
  { x: 188.5, y: 81.41 },  // Sydney
  { x: 89, y: 51.10 },     // Dakar
  { x: 64.5, y: 81.41 },   // Buenos Aires
  { x: 40.5, y: 48.50 },   // Mexico City
  { x: 71.5, y: 74.48 },   // São Paulo
  { x: 131.5, y: 45.03 },  // Dubai
];

// Arcs: index into HUBS → index into REACH_POINTS
const ARCS = [
  { hubIdx: 0, reachIdx: 0 },  // EN: London → Delhi
  { hubIdx: 0, reachIdx: 1 },  // EN: London → Singapore
  { hubIdx: 0, reachIdx: 2 },  // EN: London → Cape Town
  { hubIdx: 0, reachIdx: 3 },  // EN: London → Sydney
  { hubIdx: 1, reachIdx: 4 },  // FR: Paris → Dakar
  { hubIdx: 3, reachIdx: 5 },  // ES: Madrid → Buenos Aires
  { hubIdx: 3, reachIdx: 6 },  // ES: Madrid → Mexico City
  { hubIdx: 5, reachIdx: 7 },  // PT: Lisbon → São Paulo
  { hubIdx: 2, reachIdx: 8 },  // DE: Berlin → Dubai
];

export const WorldMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredHub, setHoveredHub] = useState<number | null>(null);
  const map = new DottedMap({ height: 100, grid: 'diagonal' });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: '#FFFFFF20',
    shape: 'circle',
    backgroundColor: 'transparent',
  });

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const dx = Math.abs(end.x - start.x);
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - Math.max(8, dx * 0.15);
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Which arcs to highlight when a hub is hovered
  const isArcHighlighted = (arcIdx: number) => {
    if (hoveredHub === null) return true;
    return ARCS[arcIdx].hubIdx === hoveredHub;
  };

  return (
    <div className="w-full relative overflow-hidden -mx-6" style={{ width: 'calc(100% + 48px)' }}>
      {/* Dotted map background */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="w-full pointer-events-none select-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, white 5%, white 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, white 5%, white 95%, transparent)',
        }}
        alt="world map"
        draggable={false}
      />

      {/* Arcs, hubs, reach points — using same viewBox as dotted-map (198 x 100) */}
      <svg
        ref={svgRef}
        viewBox="0 0 198 100"
        className="w-full h-full absolute inset-0 select-none"
      >
        <defs>
          <linearGradient id="lynn-arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={LINE_COLOR} stopOpacity="1" />
            <stop offset="95%" stopColor={LINE_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lynn-arc-dim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={LINE_COLOR} stopOpacity="0.15" />
            <stop offset="95%" stopColor={LINE_COLOR} stopOpacity="0.15" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="lynn-glow">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Arc paths */}
        {ARCS.map((arc, i) => {
          const s = HUBS[arc.hubIdx];
          const e = REACH_POINTS[arc.reachIdx];
          const path = createCurvedPath(s, e);
          const highlighted = isArcHighlighted(i);
          return (
            <g key={`arc-${i}`}>
              <path d={path} fill="none" stroke="rgba(197,160,89,0.06)" strokeWidth="0.25" />
              <motion.path
                d={path}
                fill="none"
                stroke={highlighted ? "url(#lynn-arc-grad)" : "url(#lynn-arc-dim)"}
                strokeWidth={highlighted ? "0.3" : "0.2"}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.4, delay: 0.2 * i, ease: 'easeOut' }}
                style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
              />
            </g>
          );
        })}

        {/* Reach endpoints — small dots */}
        {REACH_POINTS.map((pt, i) => {
          // Check if this reach point is connected to the hovered hub
          const isConnected = hoveredHub === null || ARCS.some(a => a.hubIdx === hoveredHub && a.reachIdx === i);
          return (
            <motion.circle
              key={`reach-${i}`}
              cx={pt.x}
              cy={pt.y}
              r="0.5"
              fill={LINE_COLOR}
              opacity={isConnected ? 0.5 : 0.1}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.3, delay: 0.15 * i + 0.5 }}
              style={{ transition: 'opacity 0.3s' }}
            />
          );
        })}

        {/* Hub cities — interactive dots with labels, pulse, and hover tooltip */}
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
              {/* Invisible larger hit area for easier hovering */}
              <circle cx={hub.x} cy={hub.y} r="4" fill="transparent" pointerEvents="all" />

              {/* Pulse */}
              <circle cx={hub.x} cy={hub.y} r="0.8" fill={LINE_COLOR} opacity={isDimmed ? 0.1 : 0.3} pointerEvents="none">
                <animate attributeName="r" from="0.8" to="3.5" dur="2.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" from={isDimmed ? "0.1" : "0.3"} to="0" dur="2.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              </circle>

              {/* Dot */}
              <motion.circle
                cx={hub.x}
                cy={hub.y}
                r={isHovered ? 1.5 : 1}
                fill={LINE_COLOR}
                filter="url(#lynn-glow)"
                opacity={isDimmed ? 0.3 : 1}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.2 * i, ease: [0.34, 1.56, 0.64, 1] }}
                style={{ transition: 'r 0.2s, opacity 0.3s' }}
                pointerEvents="none"
              />

              {/* Label */}
              <motion.text
                x={hub.x}
                y={hub.y - 3}
                textAnchor="middle"
                fill={isDimmed ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.7)"}
                fontSize="2.5"
                fontWeight="700"
                className="select-none"
                initial={{ opacity: 0, y: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.3, delay: 0.2 * i + 0.2 }}
                style={{ transition: 'fill 0.3s' }}
                pointerEvents="none"
              >
                {hub.label}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {/* HTML tooltip overlay — positioned outside SVG for better rendering */}
      <AnimatePresence>
        {hoveredHub !== null && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute pointer-events-none"
            style={{
              left: `${(HUBS[hoveredHub].x / 198) * 100}%`,
              top: `${(HUBS[hoveredHub].y / 100) * 100 - 12}%`,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="bg-white text-[#1a1a1a] rounded-lg px-3 py-2 shadow-xl text-center whitespace-nowrap">
              <div className="text-xs font-bold">{HUBS[hoveredHub].name}</div>
              <div className="text-[10px] text-stone-500">{HUBS[hoveredHub].region}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
