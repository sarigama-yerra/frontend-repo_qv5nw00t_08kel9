import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const games = [
  { name: 'Rivals' },
  { name: 'Da Hood' },
  { name: 'Arsenal' },
]

function SupportedGames() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="games" className="relative py-24 bg-slate-950/99">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Supported Games</h2>
          <p className="text-sm text-blue-200/70">More coming soon</p>
        </div>
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-3 gap-6"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {games.map((g, i) => (
            <motion.div
              key={g.name}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(59,130,246,0.15)' }}
            >
              <div className="h-12 w-12 rounded-xl bg-blue-600/20 border border-blue-400/30 mb-4" />
              <p className="text-white font-medium">{g.name}</p>
              <p className="text-xs text-blue-200/70 mt-1">Fully supported</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SupportedGames
