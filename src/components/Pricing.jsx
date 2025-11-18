import React from 'react'
import { motion } from 'framer-motion'

const plans = [
  { name: 'Weekly', price: '5.99€', desc: 'Short term, full features.' },
  { name: 'Monthly', price: '13.99€', desc: 'Best for regular players.' },
  { name: 'Lifetime', price: '26.99€', desc: 'One purchase. Permanent access.' },
]

function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Pricing</h2>
          <p className="text-blue-200/80 mt-3">Straightforward plans without surprises.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              whileHover={{ y: -6, boxShadow: '0 14px 40px rgba(59,130,246,0.18)' }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6"
            >
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
                Continue
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
