import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function IconWhatsApp({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

const services = [
  {
    n: '01',
    t: 'Abertura de CNPJ',
    tag: 'Gratuita',
    d: 'Constituição da sua empresa por nossa conta — do contrato social às inscrições. Você assina, a gente resolve.',
    bullets: ['Sem taxa de abertura', 'Contrato social e Junta Comercial', 'Inscrições municipal e estadual'],
    img: '/service-1.webp',
    msg: 'Olá! Quero abrir meu CNPJ com a BC Gestão Contábil.',
  },
  {
    n: '02',
    t: 'Terceirização de RH',
    d: 'Folha de pagamento, eSocial, admissões, férias e rescisões — toda a rotina trabalhista no nosso colo, com agilidade e zero retrabalho pro seu time.',
    bullets: ['Folha, holerites e eSocial', 'Admissões e desligamentos', 'Suporte humano no dia a dia'],
    img: '/service-2.webp',
    msg: 'Olá! Quero falar sobre terceirização de RH.',
  },
  {
    n: '03',
    t: 'Certificado Digital',
    tag: 'Em minutos',
    d: 'Emissão e renovação do seu Certificado Digital A1 ou A3 em poucos minutos, com videoconferência ou atendimento presencial.',
    bullets: ['Certificado A1 (arquivo)', 'Certificado A3 (token/cartão)', 'Emissão em videoconferência'],
    img: '/service-5.webp',
    msg: 'Olá! Quero emitir um Certificado Digital.',
  },
  {
    n: '04',
    t: 'Recrutamento e Seleção',
    d: 'Encontramos os profissionais certos para o seu negócio — triagem, entrevistas e análise de perfil para você só receber os finalistas.',
    bullets: ['Triagem e entrevistas', 'Análise de perfil e fit cultural', 'Entrega dos finalistas prontos'],
    img: '/service-3.webp',
    msg: 'Olá! Quero falar sobre recrutamento e seleção.',
  },
  {
    n: '05',
    t: 'Planejamento Tributário',
    d: 'Análise estratégica do seu regime tributário pra pagar o menor imposto dentro da lei e aumentar a margem do seu negócio.',
    bullets: ['Simples, Presumido ou Real', 'Análise de carga tributária', 'Economia dentro da lei'],
    img: '/service-4.webp',
    msg: 'Olá! Quero falar sobre planejamento tributário.',
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.sv-head > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        }
      )

      gsap.utils.toArray('.sv-card').forEach((card) => {
        gsap.fromTo(
          card.querySelectorAll('.sv-text > *'),
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 78%' },
          }
        )
        gsap.fromTo(
          card.querySelector('.sv-img'),
          { opacity: 0, scale: 1.06 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: { trigger: card, start: 'top 78%' },
          }
        )
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="servicos" className="relative py-28 lg:py-36 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="sv-head text-center max-w-3xl mx-auto mb-24">
          <div className="eyebrow justify-center mb-6">Serviços</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Tecnologia com <span className="gold-text italic font-light">atendimento humanizado.</span>
          </h2>
          <p className="mt-6 text-white/60 font-light leading-relaxed">
            A BC Gestão Contábil une a tecnologia com o atendimento humanizado.
            Nossos clientes contam com soluções completas — agende seu horário e
            descubra que um contador faz muito mais que enviar guias de recolhimento de impostos.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {services.map((s, i) => {
            const reverse = i % 2 === 1
            const link = `https://wa.me/5524998322300?text=${encodeURIComponent(s.msg)}`
            return (
              <article
                key={i}
                className="sv-card grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div className={`sv-media lg:col-span-6 relative ${reverse ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                    <img
                      src={s.img}
                      alt={s.t}
                      className="sv-img w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
                  </div>
                  <div
                    className={`absolute -bottom-5 ${
                      reverse ? '-right-5' : '-left-5'
                    } font-display text-7xl lg:text-9xl gold-text leading-none select-none opacity-90`}
                  >
                    {s.n}
                  </div>
                </div>

                <div className="sv-text lg:col-span-6 lg:px-4">
                  <div className="text-[0.65rem] tracking-[0.35em] uppercase text-gold-500 mb-4">
                    Serviço {s.n}
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                    {s.t}
                    {s.tag && (
                      <span className="text-xs tracking-[0.2em] uppercase text-white bg-gold-500 px-3 py-1 rounded-full font-sans font-medium align-middle">
                        {s.tag}
                      </span>
                    )}
                  </h3>
                  <p className="text-white/65 leading-relaxed font-light text-lg mb-8 max-w-xl">
                    {s.d}
                  </p>

                  <ul className="space-y-3 mb-10 max-w-md">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-white/75 text-[0.95rem]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold"
                  >
                    <IconWhatsApp size={18} />
                    Falar sobre este serviço
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
