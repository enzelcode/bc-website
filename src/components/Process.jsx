import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    n: '01',
    t: 'Diagnóstico',
    d: 'Conversamos para entender seu momento, suas dores e seus objetivos.',
  },
  {
    n: '02',
    t: 'Planejamento',
    d: 'Estruturamos um plano contábil sob medida, com prazos e responsabilidades claras.',
  },
  {
    n: '03',
    t: 'Execução',
    d: 'Cuidamos da rotina fiscal, folha, tributos e relatórios — você só acompanha.',
  },
  {
    n: '04',
    t: 'Acompanhamento',
    d: 'Reuniões periódicas e suporte ágil para ajustar o rumo sempre que necessário.',
  },
]

export default function Process() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.proc-step', {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      })
      gsap.from('.proc-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.4,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-32 bg-ink-900/40 border-y border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="section-label justify-center mb-5">
            <span className="w-8 h-px bg-gold-gradient" />
            Como trabalhamos
            <span className="w-8 h-px bg-gold-gradient" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight">
            Um processo <span className="gold-text italic">claro e tranquilo.</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="proc-line absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent hidden md:block" />

          {steps.map((s, i) => (
            <div key={i} className="proc-step relative">
              <div className="w-16 h-16 rounded-full bg-ink-800 border border-gold-500/40 flex items-center justify-center font-display text-xl gold-text mb-5 relative z-10">
                {s.n}
              </div>
              <h3 className="font-display text-2xl mb-2 text-white">{s.t}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
