import React from 'react'

const games = [
  { name: 'Rivals' },
  { name: 'Da Hood' },
  { name: 'Arsenal' },
]

function SupportedGames() {
  return (
    <section id="games" className="relative py-20 bg-slate-950/99">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Supported Games</h2>
          <p className="text-sm text-blue-200/70">More coming soon</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {games.map((g) => (
            <div key={g.name} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/3 p-6">
              <div className="h-12 w-12 rounded-xl bg-blue-600/20 border border-blue-400/30 mb-4" />
              <p className="text-white font-medium">{g.name}</p>
              <p className="text-xs text-blue-200/70 mt-1">Fully supported</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SupportedGames
