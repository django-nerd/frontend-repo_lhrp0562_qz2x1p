import { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function Marquee({ items = [], speed = 30, reverse = false }) {
  const data = useMemo(() => [...items, ...items, ...items], [items])
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      <motion.div
        className="flex gap-8 py-3"
        animate={{ x: reverse ? [0, 2000] : [0, -2000] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {data.map((t, i) => (
          <span key={`${t}-${i}`} className="text-sm text-gray-700/80">{t}</span>
        ))}
      </motion.div>
    </div>
  )
}
