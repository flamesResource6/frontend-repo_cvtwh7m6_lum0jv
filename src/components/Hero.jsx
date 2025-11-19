import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-20 h-[520px] w-[520px] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-40 -left-20 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Breathe. Stretch. Flow.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 text-lg md:text-xl text-white/70">
              Find balance with guided sessions, live classes, and mindful programs designed for every level.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#join" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-lg hover:opacity-90 transition">Start Free Trial</a>
              <a href="#classes" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition">Browse Classes</a>
            </motion.div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Beginner friendly</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" /> 500+ sessions</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia-400" /> Live every day</div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 shadow-2xl">
              <div className="overflow-hidden rounded-2xl">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1470&auto=format&fit=crop" alt="Yoga" className="h-[420px] w-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 text-white/80 text-sm shadow-lg">
                "After 2 weeks I feel calmer, stronger and sleep better." — Maya
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
