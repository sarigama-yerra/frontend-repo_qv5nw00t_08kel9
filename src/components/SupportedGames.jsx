import React from 'react'
import { motion } from 'framer-motion'

const games = [
  { name: 'Rivals' },
  { name: 'Da Hood' },
  { name: 'Arsenal' },
]

function SupportedGames() {
  return (
    <section id="games" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Supported Games</h2>
          <p className="text-sm text-blue-200/70">More soon</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {games.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(59,130,246,0.15)' }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="h-12 w-12 rounded-xl bg-blue-600/20 border border-blue-400/30 mb-4" />
              <p className="text-white font-medium">{g.name}</p>
              <p className="text-xs text-blue-200/70 mt-1">Fully supported</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SupportedGames
