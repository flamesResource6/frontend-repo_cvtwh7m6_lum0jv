import React from 'react'

function CTA() {
  return (
    <section id="join" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/20 via-cyan-500/20 to-fuchsia-400/20 p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.25),transparent_40%)]" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Start your 7‑day free trial</h3>
              <p className="text-white/80 mt-3">Unlimited access to all classes, programs, and daily live sessions. Cancel anytime.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-6 py-3 font-semibold text-slate-900 shadow-lg hover:opacity-90 transition">Get Started</a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition">See Pricing</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
