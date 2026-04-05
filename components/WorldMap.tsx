import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import DottedMap from 'dotted-map';

const LINE_COLOR = '#C5A059';

interface ArcDot {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
}

// Fewer, cleaner arcs — one big reach arc per language, no spiderweb
const ARCS: ArcDot[] = [
  // EN: London → India
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
  // EN: London → Singapore
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 1.3521, lng: 103.8198 } },
  // EN: London → South Africa
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: -33.9249, lng: 18.4241 } },
  // EN: London → Australia
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: -33.8688, lng: 151.2093 } },
  // FR: Paris → Dakar
  { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 14.7167, lng: -17.4677 } },
  // ES: Madrid → Buenos Aires
  { start: { lat: 40.4168, lng: -3.7038 }, end: { lat: -34.6037, lng: -58.3816 } },
  // ES: Madrid → Mexico City
  { start: { lat: 40.4168, lng: -3.7038 }, end: { lat: 19.4326, lng: -99.1332 } },
  // PT: Lisbon → São Paulo
  { start: { lat: 38.7223, lng: -9.1393 }, end: { lat: -23.5505, lng: -46.6333 } },
  // DE: Berlin → Dubai
  { start: { lat: 52.52, lng: 13.405 }, end: { lat: 25.2048, lng: 55.2708 } },
];

// All unique hub cities (the 6 language HQs)
const HUBS = [
  { lat: 51.5074, lng: -0.1278, label: 'EN', name: 'English', region: 'UK, Nordics, Global' },
  { lat: 48.8566, lng: 2.3522, label: 'FR', name: 'French', region: 'France, Benelux, Africa' },
  { lat: 52.52, lng: 13.405, label: 'DE', name: 'German', region: 'DACH region' },
  { lat: 40.4168, lng: -3.7038, label: 'ES', name: 'Spanish', region: 'Spain, LATAM' },
  { lat: 41.9028, lng: 12.4964, label: 'IT', name: 'Italian', region: 'Italy, Central EU' },
  { lat: 38.7223, lng: -9.1393, label: 'PT', name: 'Portuguese', region: 'Portugal, Brazil' },
];

// Reach endpoint dots — one per arc destination
const REACH_POINTS = [
  { lat: 28.6139, lng: 77.209 },    // New Delhi
  { lat: 1.3521, lng: 103.8198 },   // Singapore
  { lat: -33.9249, lng: 18.4241 },  // Cape Town
  { lat: -33.8688, lng: 151.2093 }, // Sydney
  { lat: 14.7167, lng: -17.4677 },  // Dakar
  { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
  { lat: 19.4326, lng: -99.1332 },  // Mexico City
  { lat: -23.5505, lng: -46.6333 }, // São Paulo
  { lat: 25.2048, lng: 55.2708 },   // Dubai
];

export const WorldMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: 'diagonal' });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: '#FFFFFF20',
    shape: 'circle',
    backgroundColor: 'transparent',
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const dx = Math.abs(end.x - start.x);
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - Math.max(30, dx * 0.3);
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
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

      {/* Arcs, hubs, reach points */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="lynn-arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={LINE_COLOR} stopOpacity="1" />
            <stop offset="95%" stopColor={LINE_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <filter id="lynn-glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Arc paths */}
        {ARCS.map((arc, i) => {
          const s = projectPoint(arc.start.lat, arc.start.lng);
          const e = projectPoint(arc.end.lat, arc.end.lng);
          const path = createCurvedPath(s, e);
          return (
            <g key={`arc-${i}`}>
              <path d={path} fill="none" stroke="rgba(197,160,89,0.06)" strokeWidth="1" />
              <motion.path
                d={path}
                fill="none"
                stroke="url(#lynn-arc-grad)"
                strokeWidth="1.2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.4, delay: 0.2 * i, ease: 'easeOut' }}
              />
            </g>
          );
        })}

        {/* Reach endpoints — small dots */}
        {REACH_POINTS.map((pt, i) => {
          const p = projectPoint(pt.lat, pt.lng);
          return (
            <motion.circle
              key={`reach-${i}`}
              cx={p.x}
              cy={p.y}
              r="2"
              fill={LINE_COLOR}
              opacity={0.5}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.3, delay: 0.15 * i + 0.5 }}
            />
          );
        })}

        {/* Hub cities — larger dots with labels and pulse */}
        {HUBS.map((hub, i) => {
          const p = projectPoint(hub.lat, hub.lng);
          return (
            <g key={`hub-${i}`}>
              {/* Pulse */}
              <circle cx={p.x} cy={p.y} r="3" fill={LINE_COLOR} opacity="0.3">
                <animate attributeName="r" from="3" to="14" dur="2.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.3" to="0" dur="2.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              </circle>
              {/* Dot */}
              <motion.circle
                cx={p.x}
                cy={p.y}
                r="4"
                fill={LINE_COLOR}
                filter="url(#lynn-glow)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.2 * i, ease: [0.34, 1.56, 0.64, 1] }}
              />
              {/* Label */}
              <motion.text
                x={p.x}
                y={p.y - 12}
                textAnchor="middle"
                fill="rgba(255,255,255,0.7)"
                fontSize="10"
                fontWeight="700"
                className="select-none"
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.3, delay: 0.2 * i + 0.2 }}
              >
                {hub.label}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
