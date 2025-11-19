import React from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [theme, setTheme] = React.useState('dark')

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/30" />
              <span className="text-white font-semibold tracking-tight text-lg">ZenFlow</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#classes" className="hover:text-white transition">Classes</a>
              <a href="#instructors" className="hover:text-white transition">Instructors</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#faq" className="hover:text-white transition">FAQ</a>
            </nav>

            <div className="flex items-center gap-3">
              <button aria-label="Toggle theme" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} className="p-2 rounded-lg border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition" onClick={() => setOpen((o) => !o)}>
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
              <a href="#join" className="hidden md:inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900 font-semibold shadow-lg hover:opacity-90 transition">Join Class</a>
            </div>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-3 text-white/80">
              <div className="grid gap-3 py-2">
                <a href="#classes" className="hover:text-white transition" onClick={() => setOpen(false)}>Classes</a>
                <a href="#instructors" className="hover:text-white transition" onClick={() => setOpen(false)}>Instructors</a>
                <a href="#pricing" className="hover:text-white transition" onClick={() => setOpen(false)}>Pricing</a>
                <a href="#faq" className="hover:text-white transition" onClick={() => setOpen(false)}>FAQ</a>
                <a href="#join" className="mt-2 inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-900 font-semibold shadow-lg hover:opacity-90 transition" onClick={() => setOpen(false)}>Join Class</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
