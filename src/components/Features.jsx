import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    title: 'Fast Updates',
    desc: 'Rapid maintenance after game patches to keep you running smoothly.',
  },
  {
    title: 'High Quality',
    desc: 'Carefully engineered for stability, performance and a seamless experience.',
  },
  {
    title: 'Clean UI',
    desc: 'Professional, modern interface with tasteful motion and zero clutter.',
  },
]

function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors"
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.98 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.03 }}
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 ring-1 ring-white/30 mb-4 shadow-blue-500/20 shadow" />
              <h3 className="text-white text-lg font-semibold">{f.title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
