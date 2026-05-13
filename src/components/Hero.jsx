import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function IconWhatsApp({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.h-bg', { opacity: 0, scale: 1.08 }, { opacity: 1, scale: 1, duration: 1.6 })
        .fromTo('.h-line', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, clearProps: 'transform' }, '-=1.1')
        .fromTo('.h-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, clearProps: 'transform' }, '-=0.5')
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* background image */}
      <picture className="h-bg absolute inset-0 -z-10">
        <source media="(max-width: 768px)" srcSet="/hero-sm.webp" />
        <img
          src="/hero.webp"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </picture>

      {/* overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

      <div className="relative max-w-[1400px] mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="font-display text-[3rem] sm:text-[4rem] lg:text-[5.5rem] leading-[0.95] tracking-tight mb-10">
            <span className="h-line block">Soluções contábeis</span>
            <span className="h-line block">para o <span className="gold-text italic font-light">crescimento</span></span>
            <span className="h-line block">da sua empresa.</span>
          </h1>

          <p className="h-desc text-lg text-white/70 max-w-lg leading-relaxed mb-12 font-light">
            Abertura de empresa, folha, notas fiscais, imposto de renda, certificado digital
            e regularização — tudo em um só lugar.
          </p>

          <div className="h-cta flex flex-wrap items-center gap-6">
            <a
              href="https://wa.me/5551991329065?text=Ol%C3%A1!%20Quero%20conhecer%20os%20servi%C3%A7os%20da%20Antonello%20Contabilidade."
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              <IconWhatsApp size={18} />
              Falar no WhatsApp
            </a>
            <a href="#servicos" className="btn-ghost">
              Conhecer serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
