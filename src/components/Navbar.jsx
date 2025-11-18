import React from 'react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 ring-1 ring-white/20 shadow-lg shadow-blue-500/20" />
            <div className="absolute inset-0 rounded-lg ring-2 ring-blue-400/40 animate-pulse" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">Syntax</p>
            <p className="text-xs text-blue-300/80">Roblox External</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-blue-200/80 hover:text-white transition-colors">Overview</a>
          <a href="#games" className="text-blue-200/80 hover:text-white transition-colors">Supported Games</a>
          <a href="#pricing" className="text-blue-200/80 hover:text-white transition-colors">Plans</a>
          <a href="#contact" className="text-blue-200/80 hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://syntax.store"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600/90 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/25 transition-colors"
          >
            Get Syntax
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
