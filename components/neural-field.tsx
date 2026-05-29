"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 9) * 0.35,
  duration: 8 + (index % 7),
  opacity: 0.18 + (index % 5) * 0.06
}));

const paths = [
  "M-8 42 C 18 14, 44 78, 72 34 S 126 18, 146 66",
  "M-4 72 C 22 58, 45 18, 72 46 S 112 92, 142 42",
  "M8 18 C 34 38, 48 6, 78 24 S 114 54, 138 18",
  "M12 88 C 38 72, 54 103, 86 76 S 116 48, 146 82",
  "M4 54 C 28 86, 58 60, 82 66 S 112 82, 138 58"
];

export function NeuralField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 fine-grid opacity-45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_8%,rgba(255,244,214,0.09),transparent_44%)]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 140 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="neuralLine" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,244,214,0)" />
            <stop offset="48%" stopColor="rgba(255,244,214,0.48)" />
            <stop offset="100%" stopColor="rgba(255,230,168,0)" />
          </linearGradient>
        </defs>
        {paths.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="url(#neuralLine)"
            strokeWidth={index === 1 ? 0.16 : 0.1}
            strokeDasharray="6 14"
            initial={{ strokeDashoffset: 160, opacity: 0.18 }}
            animate={{ strokeDashoffset: 0, opacity: [0.16, 0.52, 0.22] }}
            transition={{
              duration: 12 + index * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </svg>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-[2px] w-[2px] rounded-full bg-ivory shadow-[0_0_14px_rgba(255,245,210,0.75)]"
          style={{
            left: particle.left,
            top: particle.top,
            opacity: particle.opacity
          }}
          animate={{
            y: [0, -16, 0],
            x: [0, particle.id % 2 ? 10 : -10, 0],
            scale: [0.7, 1.35, 0.75]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-obsidian to-transparent" />
    </div>
  );
}
