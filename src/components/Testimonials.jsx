import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maya L.',
    text: 'I used to struggle with consistency. The gentle reminders and short morning flows changed everything.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Jordan P.',
    text: 'Live classes make me feel part of a community again. My posture and focus improved a lot.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop'
  },
  {
    name: 'Aria S.',
    text: 'The sleep wind-downs are magical. I fall asleep in minutes now.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop'
  }
]

function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Loved by our members</h2>
          <p className="text-white/70 mt-2">Real stories, real results</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <div className="text-white font-medium">{t.name}</div>
                  <div className="flex text-amber-300">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/80 mt-4">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
