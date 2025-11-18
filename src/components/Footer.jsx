import React from 'react'

function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-blue-200/70 text-sm">
          © {new Date().getFullYear()} Syntax. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="https://discord.gg/syntax" target="_blank" rel="noreferrer" className="text-blue-200/80 hover:text-white transition-colors">discord.gg/syntax</a>
          <span className="text-blue-200/30">•</span>
          <a href="https://syntax.store" target="_blank" rel="noreferrer" className="text-blue-200/80 hover:text-white transition-colors">syntax.store</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
