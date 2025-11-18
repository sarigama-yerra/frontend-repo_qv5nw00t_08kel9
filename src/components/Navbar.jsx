import React from 'react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/30 px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 ring-1 ring-white/20 shadow-lg shadow-blue-500/30" />
            </div>
            <div>
              <p className="text-white font-semibold tracking-tight">Syntax</p>
              <p className="text-[11px] text-blue-300/80">Roblox External</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-blue-200/80 hover:text-white transition-colors">Why</a>
            <a href="#games" className="text-blue-200/80 hover:text-white transition-colors">Games</a>
            <a href="#pricing" className="text-blue-200/80 hover:text-white transition-colors">Pricing</a>
          </nav>

          <a
            href="https://syntax.store"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 font-medium shadow-blue-500/30 shadow transition-colors"
          >
            Get Syntax
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
