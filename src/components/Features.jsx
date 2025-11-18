import React from 'react'

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
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/7.5 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 ring-1 ring-white/30 mb-4 shadow-blue-500/20 shadow" />
              <h3 className="text-white text-lg font-semibold">{f.title}</h3>
              <p className="text-blue-200/80 mt-2 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
