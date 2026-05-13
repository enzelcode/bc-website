import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeartHandshake, Sparkles, LayoutGrid, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function IconWhatsApp({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

const differentials = [
  {
    icon: HeartHandshake,
    t: 'Atendimento humano',
    d: 'Você fala direto com quem entende do seu caso. Sem fila, sem robô, sem letrinha miúda.',
  },
  {
    icon: Sparkles,
    t: 'Linguagem clara',
    d: 'Explicamos os números em português. Decisões mais confiantes, sem termo técnico desnecessário.',
  },
  {
    icon: LayoutGrid,
    t: 'Solução completa',
    d: 'Da abertura à folha, do IR ao certificado. Um único parceiro para toda a vida da sua empresa.',
  },
  {
    icon: Zap,
    t: '100% digital',
    d: 'Assinatura eletrônica, documentos online e suporte ágil. Você resolve tudo sem sair de casa.',
  },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ab-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        }
      )
      gsap.fromTo(
        '.ab-diff',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.ab-diff-grid', start: 'top 80%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative py-28 lg:py-36 bg-[#f5f1e8] text-[#1a1612] overflow-hidden"
    >
      {/* subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* subtle gold glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#d4a017]/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#d4a017]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-20 lg:mb-28">
          {/* image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="/hero.webp"
                alt=""
                className="ab-anim w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#d4a017] -z-0 rounded-2xl" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#d4a017]/15 -z-0 rounded-2xl" />
          </div>

          {/* text */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="ab-anim inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-[#8c5b11] font-medium mb-8">
              <span className="w-8 h-px bg-[#8c5b11]" />
              Sobre nós
            </div>

            <h2 className="ab-anim font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-10">
              Contabilidade pensada{' '}
              <span className="gold-text italic font-light">pra quem realiza.</span>
            </h2>

            <div className="ab-anim space-y-5 text-[#3d3530] leading-relaxed text-lg font-light max-w-xl mb-10">
              <p>
                A Antonello Contabilidade existe pra simplificar a vida de quem empreende.
                Cuidamos da rotina contábil, fiscal e trabalhista com atenção real — tratando
                cada cliente como único, do MEI à empresa estabelecida.
              </p>
              <p>
                Você foca no negócio. A gente cuida dos números, dos prazos e da burocracia.
              </p>
            </div>

            <a
              href="https://wa.me/5551991329065?text=Ol%C3%A1!%20Quero%20conhecer%20a%20Antonello%20Contabilidade."
              target="_blank"
              rel="noreferrer"
              className="ab-anim btn-gold"
            >
              <IconWhatsApp size={18} />
              Fale conosco
            </a>
          </div>
        </div>

        {/* differentials */}
        <div className="pt-16 border-t border-[#d4a017]/25">
          <div className="ab-anim text-center mb-14">
            <div className="text-[0.7rem] tracking-[0.35em] uppercase text-[#8c5b11] font-medium mb-4">
              Por que a Antonello
            </div>
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-[#1a1612]">
              O que faz a diferença
              <br />
              <span className="gold-text italic font-light">no nosso atendimento.</span>
            </h3>
          </div>

          <div className="ab-diff-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {differentials.map((it, i) => {
              const Icon = it.icon
              return (
                <div key={i} className="ab-diff group relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#efc94f] to-[#b07d10] flex items-center justify-center shadow-lg shadow-[#d4a017]/30 group-hover:scale-105 transition-transform duration-300 mb-6">
                    <Icon size={26} strokeWidth={1.5} className="text-[#1a1612]" />
                  </div>

                  <h4 className="font-display text-2xl mb-3 text-[#1a1612]">
                    {it.t}
                  </h4>
                  <div className="w-10 h-px bg-[#d4a017] mb-4" />
                  <p className="text-[0.95rem] text-[#3d3530]/85 leading-relaxed font-light">
                    {it.d}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
