import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Classes from './components/Classes'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.18] mix-blend-soft-light pointer-events-none" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Classes />
        <Testimonials />
        <CTA />

        <footer className="py-10 text-center text-white/60 border-t border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-6">
            <p>© {new Date().getFullYear()} ZenFlow. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
