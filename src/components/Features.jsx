import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Instant Updates',
    desc: 'Optimized patch turnaround with automated checks.',
  },
  {
    title: 'Zero Bloat',
    desc: 'A focused toolkit — only essentials, engineered to last.',
  },
  {
    title: 'Smooth UX',
    desc: 'Subtle motion, precise spacing and clear hierarchy.',
  },
]

function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Why Syntax</h2>
          <p className="text-sm text-blue-200/70">Minimal. Durable. Fast.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/10 p-6 hover:border-blue-400/30 transition-all"
            >
              <div className="h-10 w-10 rounded-xl bg-blue-600/20 border border-blue-400/30 mb-4" />
              <h3 className="text-white text-base font-semibold">{f.title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
