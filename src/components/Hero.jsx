import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.55])

  // mouse-based parallax for 3D container
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const ry = (x - 0.5) * 10
    const rx = (0.5 - y) * 8
    setTilt({ rx, ry })
  }

  return (
    <section ref={heroRef} className="relative overflow-hidden pt-28">
      {/* background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute top-20 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Copy */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-blue-200/80 text-xs mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Next‑gen external • Zero clutter • Real speed
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.05]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Syntax — Roblox External
          </motion.h1>

          <motion.p
            className="mt-5 text-lg text-blue-200/90 max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.55 }}
          >
            Ultra‑clean, performance‑first and crafted for daily use. Glide through updates with a
            minimal interface and powerful features.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55 }}
          >
            <a
              href="https://syntax.store"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
            >
              Buy now
            </a>
            <a
              href="https://discord.gg/syntax"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/10 backdrop-blur transition-all hover:-translate-y-0.5"
            >
              Join Discord
            </a>
          </motion.div>
        </motion.div>

        {/* 3D */}
        <motion.div className="relative h-[560px] lg:h-[680px]" style={{ opacity }}>
          <motion.div
            className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 overflow-hidden will-change-transform"
            style={{ y: translateY, rotateX: tilt.rx, rotateY: tilt.ry }}
            onMouseMove={onMouseMove}
            onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
          >
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </motion.div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-24 w-3/4 rounded-full bg-blue-500/25 blur-2xl" />
        </motion.div>
      </div>

      {/* Subtle divider */}
      <div className="relative mt-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
