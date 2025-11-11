import { memo, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Noise() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-soft-light"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 300 300\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.6\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.4\\'/></svg>')",
        backgroundSize: '300px 300px',
      }}
    />
  )
}

function GlowGradients() {
  const blobs = useMemo(
    () => [
      { c: 'from-emerald-400/30 to-teal-500/30', x: '10%', y: '10%', s: 500, d: 30 },
      { c: 'from-lime-400/30 to-emerald-500/30', x: '80%', y: '20%', s: 420, d: 28 },
      { c: 'from-sky-400/20 to-emerald-400/20', x: '20%', y: '80%', s: 520, d: 36 },
    ],
    []
  )

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -40])
  const y2 = useTransform(scrollY, [0, 600], [0, 30])
  const y3 = useTransform(scrollY, [0, 600], [0, -20])

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute left-[10%] top-[10%]">
        <div className="blur-3xl">
          <div className="h-[36rem] w-[36rem] bg-gradient-to-br from-emerald-400/30 to-emerald-600/20 rounded-full" />
        </div>
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute right-[10%] top-[15%]">
        <div className="blur-3xl">
          <div className="h-[28rem] w-[28rem] bg-gradient-to-tr from-lime-300/30 to-emerald-400/20 rounded-full" />
        </div>
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute left-[15%] bottom-[15%]">
        <div className="blur-3xl">
          <div className="h-[34rem] w-[34rem] bg-gradient-to-tl from-sky-400/20 to-emerald-400/20 rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}

function BackgroundFX() {
  return (
    <>
      <GlowGradients />
      <Noise />
    </>
  )
}

export default memo(BackgroundFX)
