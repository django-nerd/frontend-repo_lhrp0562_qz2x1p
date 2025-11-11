import { useEffect, useMemo, useRef } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'

const rand = (min, max) => Math.random() * (max - min) + min

export default function FloatingSeeds({ count = 24 }) {
  const seeds = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: rand(0, 100),
        y: rand(0, 100),
        s: rand(6, 14),
        d: rand(16, 32),
        t: rand(6, 18),
        r: rand(-20, 20),
      })),
    [count]
  )

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
      {seeds.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{
            y: [0, -p.d, 0],
            x: [0, p.d * 0.3, 0],
            rotate: [0, p.r, 0],
          }}
          transition={{ duration: p.t, repeat: Infinity, ease: 'easeInOut' }}
        />)
      )}
    </div>
  )
}
