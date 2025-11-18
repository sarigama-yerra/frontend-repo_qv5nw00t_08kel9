import React from 'react'

const plans = [
  { name: 'Weekly', price: '5.99€', desc: 'Short-term access, full features.' },
  { name: 'Monthly', price: '13.99€', desc: 'Best for regular players.' },
  { name: 'Lifetime', price: '26.99€', desc: 'One purchase. Permanent access.' },
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, fair pricing</h2>
          <p className="text-blue-200/80 mt-3">Choose the plan that fits you. No hidden fees.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                <span className="text-blue-200/80 text-sm">Secure checkout</span>
              </div>
              <p className="mt-4 text-4xl font-semibold text-white">{p.price}</p>
              <p className="mt-2 text-sm text-blue-200/80">{p.desc}</p>
              <a
                href="https://syntax.store"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white py-3 font-medium transition-colors"
              >
                Continue to checkout
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
