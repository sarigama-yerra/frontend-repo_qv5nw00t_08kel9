import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const plans = [
  { name: 'Weekly', price: '5.99€', desc: 'Short-term access, full features.' },
  { name: 'Monthly', price: '13.99€', desc: 'Best for regular players.' },
  { name: 'Lifetime', price: '26.99€', desc: 'One purchase. Permanent access.' },
]

function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="pricing" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, fair pricing</h2>
          <p className="text-blue-200/80 mt-3">Choose the plan that fits you. No hidden fees.</p>
        </div>

        <motion.div
          ref={ref}
          className="mt-10 grid md:grid-cols-3 gap-6"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(59,130,246,0.18)' }}
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
                Continue to checkout
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
