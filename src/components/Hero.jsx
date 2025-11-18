import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-32 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="absolute top-24 -right-32 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-56 w-[60%] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Copy */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-blue-200/80 text-xs mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Fast updates • High quality • Clean external
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Syntax | Roblox External
          </motion.h1>
          <motion.p
            className="mt-5 text-lg text-blue-200/90 max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Professional, minimal and blazing fast. A polished external crafted for performance
            and reliability — no gimmicks, just results.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
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

          <motion.div
            className="mt-8 grid grid-cols-3 gap-6 text-center"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {[
              ['60ms', 'Avg. response'],
              ['99.9%', 'Uptime'],
              ['24/7', 'Support'],
            ].map(([v, l]) => (
              <motion.div
                key={l}
                className="rounded-xl bg-white/5 border border-white/10 p-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <p className="text-2xl font-semibold text-white">{v}</p>
                <p className="text-xs text-blue-200/70">{l}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: 3D with parallax on scroll */}
        <motion.div className="relative h-[520px] lg:h-[640px]" style={{ opacity }}>
          <motion.div
            className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 overflow-hidden will-change-transform"
            style={{ y: translateY }}
          >
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </motion.div>
          {/* Subtle under-glow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-24 w-3/4 rounded-full bg-blue-500/20 blur-2xl" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="relative flex justify-center pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden sm:flex items-center gap-2 text-blue-200/70 text-xs"
        >
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
          Scroll
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
