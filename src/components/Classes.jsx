import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Flame, Heart, Leaf } from 'lucide-react'

const classes = [
  { title: 'Morning Flow', level: 'Beginner', duration: '30 min', color: 'from-emerald-400 to-cyan-500', img: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1470&auto=format&fit=crop' },
  { title: 'Power Vinyasa', level: 'Intermediate', duration: '45 min', color: 'from-fuchsia-400 to-rose-500', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop' },
  { title: 'Yin & Restore', level: 'All Levels', duration: '35 min', color: 'from-amber-300 to-orange-500', img: 'https://images.unsplash.com/photo-1540206276207-3af25c08abc4?q=80&w=1470&auto=format&fit=crop' },
]

function Classes() {
  return (
    <section id="classes" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Classes</h2>
            <p className="text-white/70 mt-2">Curated sessions to start your practice</p>
          </div>
          <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition">See all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((c, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={c.img} alt={c.title} className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-5 w-full">
                <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${c.color} px-3 py-1 text-xs font-semibold text-slate-900 mb-3`}>
                  <Flame size={14} /> {c.level}
                </div>
                <h3 className="text-white font-semibold text-lg">{c.title}</h3>
                <div className="mt-2 flex items-center gap-4 text-white/70 text-sm">
                  <span className="inline-flex items-center gap-1"><Clock size={16} /> {c.duration}</span>
                  <span className="inline-flex items-center gap-1"><Heart size={16} /> Mindful</span>
                  <span className="inline-flex items-center gap-1"><Leaf size={16} /> Breathwork</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes
