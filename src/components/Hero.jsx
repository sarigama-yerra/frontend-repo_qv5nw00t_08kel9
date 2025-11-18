import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-32 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute top-24 -right-32 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-blue-200/80 text-xs mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Fast updates • High quality • Clean external
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
            Syntax | Roblox External
          </h1>
          <p className="mt-5 text-lg text-blue-200/90 max-w-xl">
            Professional, minimal and blazing fast. A polished external crafted for performance
            and reliability — no gimmicks, just results.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
          </div>

          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-2xl font-semibold text-white">60ms</p>
              <p className="text-xs text-blue-200/70">Avg. response</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-2xl font-semibold text-white">99.9%</p>
              <p className="text-xs text-blue-200/70">Uptime</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-2xl font-semibold text-white">24/7</p>
              <p className="text-xs text-blue-200/70">Support</p>
            </div>
          </div>
        </div>

        <div className="relative h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
