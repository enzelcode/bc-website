import { useEffect, useRef, useState } from 'react'
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

const faqs = [
  {
    q: 'MEI precisa de contador?',
    a: 'A lei não obriga o MEI a ter contador. Mas, na prática, ter apoio contábil evita erros comuns que podem custar caro: declaração anual fora do prazo, emissão errada de nota fiscal, excesso de faturamento e desenquadramento sem o cliente perceber.',
  },
  {
    q: 'Qual a diferença entre MEI, ME e EPP?',
    a: 'O MEI é a categoria mais simples (faturamento até R$ 81 mil/ano, 1 funcionário). A ME (Microempresa) atende até R$ 360 mil/ano. A EPP (Empresa de Pequeno Porte) vai até R$ 4,8 milhões/ano. Cada uma tem obrigações e impostos diferentes.',
  },
  {
    q: 'Qual o melhor regime tributário pra mim?',
    a: 'Depende do seu faturamento, margem de lucro, atividade e número de funcionários. Os três principais são Simples Nacional, Lucro Presumido e Lucro Real. Fazemos um comparativo personalizado pra mostrar qual paga menos imposto na sua situação.',
  },
  {
    q: 'Como funciona a troca de contador?',
    a: 'Mais simples do que parece. Você não precisa avisar o contador atual antes. A gente solicita os arquivos digitais (Sped, balancetes, folha), assume as obrigações em curso e comunica os órgãos competentes. Sem dor de cabeça pra você.',
  },
  {
    q: 'Preciso ir até o escritório ou tudo é digital?',
    a: 'Tudo pode ser resolvido digitalmente: envio de documentos, assinatura eletrônica, reuniões por vídeo e atendimento pelo WhatsApp. Se preferir presencial, também atendemos — você escolhe.',
  },
  {
    q: 'Qual a diferença entre certificado A1 e A3?',
    a: 'O A1 é um arquivo digital instalado no computador, validade de 1 ano. O A3 fica em um token USB ou cartão, validade de até 3 anos. O A1 é mais prático para emissão de NFs; o A3 mais seguro para uso esporádico em sistemas do governo.',
  },
  {
    q: 'Quanto custa contratar um contador?',
    a: 'O valor varia conforme o regime tributário, volume de notas, número de funcionários e serviços contratados. Fala com a gente no WhatsApp que montamos uma proposta sob medida pro seu caso, sem compromisso.',
  },
]

function Item({ q, a, open, onClick, idx }) {
  const contentRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current) return
    gsap.to(contentRef.current, {
      height: open ? 'auto' : 0,
      opacity: open ? 1 : 0,
      duration: 0.5,
      ease: open ? 'power3.out' : 'power3.in',
    })
  }, [open])

  return (
    <div className={`faq-row border-t border-white/10 last:border-b transition-colors ${open ? 'border-gold-500/40' : ''}`}>
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between gap-8 py-8 text-left group"
      >
        <div className="flex items-start gap-6 lg:gap-10 flex-1">
          <span className={`font-mono text-xs pt-2 transition-colors ${open ? 'text-gold-300' : 'text-white/30'}`}>
            {String(idx + 1).padStart(2, '0')}
          </span>
          <span
            className={`font-display text-xl sm:text-2xl lg:text-3xl leading-tight transition-colors ${
              open ? 'gold-text italic' : 'text-white group-hover:text-gold-200'
            }`}
          >
            {q}
          </span>
        </div>
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center text-xl font-light transition-all duration-300 ${
            open
              ? 'bg-gold-gradient text-ink-950 border-transparent rotate-45'
              : 'border-gold-500/30 text-gold-300'
          }`}
        >
          +
        </span>
      </button>
      <div ref={contentRef} style={{ height: 0, opacity: 0 }} className="overflow-hidden">
        <div className="pb-8 pl-10 lg:pl-[3.75rem] pr-16 text-white/65 leading-relaxed text-base lg:text-lg font-light max-w-3xl">
          {a}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const [open, setOpen] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.f-anim',
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
        '.faq-row',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.f-list', start: 'top 80%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="faq" className="relative py-28 lg:py-36 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-16 mb-16">
          {/* sticky intro left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="f-anim eyebrow mb-6">Perguntas frequentes</div>
            <h2 className="f-anim font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-8">
              Suas dúvidas, <br />
              <span className="gold-text italic font-light">respondidas.</span>
            </h2>
            <p className="f-anim text-white/55 font-light leading-relaxed mb-8 max-w-sm">
              Reunimos as perguntas que mais escutamos de empreendedores. Se a sua
              não estiver aqui, é só chamar.
            </p>
            <a
              href="https://wa.me/5551991329065?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20contabilidade."
              target="_blank"
              rel="noreferrer"
              className="f-anim btn-gold"
            >
              <IconWhatsApp size={18} />
              Tirar minha dúvida
            </a>
          </div>

          {/* questions right */}
          <div className="lg:col-span-7 f-list">
            {faqs.map((f, i) => (
              <Item
                key={i}
                idx={i}
                q={f.q}
                a={f.a}
                open={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
