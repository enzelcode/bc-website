import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const INSTAGRAM = 'https://www.instagram.com/p/DL7klseOAQ7/'
const WHATSAPP_FIXO = 'https://wa.me/552430320205'
const WHATSAPP_CEL = 'https://wa.me/5524998322300'

function IconWhatsApp({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function IconInstagram({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.c-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 78%' },
        }
      )
      gsap.fromTo(
        '.c-form',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 78%' },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Olá, BC Gestão Contábil!\n\n` +
        `*Nome:* ${form.name}\n` +
        `*Telefone:* ${form.phone}\n` +
        `*Serviço:* ${form.service}\n\n` +
        `*Mensagem:*\n${form.message}`
    )
    window.open(`${WHATSAPP_CEL}?text=${text}`, '_blank')
  }

  return (
    <section
      ref={ref}
      id="contato"
      className="relative py-28 lg:py-36 bg-[#ffffff] text-[#1a1612] overflow-hidden"
    >
      {/* texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* orange glows */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#ed5a08]/12 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#ed5a08]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* left */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="c-anim inline-flex items-center gap-3 text-[0.7rem] tracking-[0.35em] uppercase text-[#ed5a08] font-medium mb-6">
            <span className="w-8 h-px bg-[#ed5a08]" />
            Contato
          </div>

          <h2 className="c-anim font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-8">
            Agende seu horário <br />
            <span className="gold-text italic font-light">com a BC.</span>
          </h2>

          <p className="c-anim text-[#3d3530] font-light leading-relaxed mb-10 max-w-md text-lg">
            Preencha o formulário ou fale direto pelos canais ao lado. A primeira
            conversa é sem compromisso — e o objetivo dela é te entender, não
            vender um plano genérico.
          </p>

          <div className="c-anim space-y-4">
            <a
              href={WHATSAPP_CEL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-5 rounded-2xl bg-white/60 border border-[#ed5a08]/25 hover:border-[#ed5a08]/70 hover:bg-white transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ed5a08] to-[#ed5a08] flex items-center justify-center text-white shadow-lg shadow-[#ed5a08]/30 group-hover:scale-105 transition-transform">
                <IconWhatsApp size={22} />
              </div>
              <div>
                <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[#ed5a08] mb-1">WhatsApp · Celular</div>
                <div className="font-display text-xl text-[#1a1612]">(24) 9 9832‑2300</div>
              </div>
            </a>

            <a
              href={WHATSAPP_FIXO}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-5 rounded-2xl bg-white/60 border border-[#ed5a08]/25 hover:border-[#ed5a08]/70 hover:bg-white transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ed5a08] to-[#ed5a08] flex items-center justify-center text-white shadow-lg shadow-[#ed5a08]/30 group-hover:scale-105 transition-transform">
                <IconWhatsApp size={22} />
              </div>
              <div>
                <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[#ed5a08] mb-1">WhatsApp · Fixo</div>
                <div className="font-display text-xl text-[#1a1612]">(24) 3032‑0205</div>
              </div>
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-5 rounded-2xl bg-white/60 border border-[#ed5a08]/25 hover:border-[#ed5a08]/70 hover:bg-white transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ed5a08] to-[#ed5a08] flex items-center justify-center text-white shadow-lg shadow-[#ed5a08]/30 group-hover:scale-105 transition-transform">
                <IconInstagram size={22} />
              </div>
              <div>
                <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[#ed5a08] mb-1">Instagram</div>
                <div className="font-display text-xl text-[#1a1612]">Veja nosso perfil</div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.%20Augusto%20de%20Carvalho%2C%20781%20-%20Loja%202%20-%20Jardim%20Bras%C3%ADlia%20II%2C%20Resende%20-%20RJ%2C%2027516-240"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-5 rounded-2xl bg-white/60 border border-[#ed5a08]/25 hover:border-[#ed5a08]/70 hover:bg-white transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ed5a08] to-[#ed5a08] flex items-center justify-center text-white shadow-lg shadow-[#ed5a08]/30 group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="text-[0.65rem] tracking-[0.3em] uppercase text-[#ed5a08] mb-1">Endereço</div>
                <div className="font-display text-lg text-[#1a1612] leading-snug">
                  Av. Augusto de Carvalho, 781 — Loja 2<br />
                  <span className="text-base text-[#1a1612]/70 font-sans font-light">Jardim Brasília II, Resende — RJ · 27516-240</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* form right */}
        <form
          onSubmit={handleSubmit}
          className="c-form lg:col-span-7 bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-[#1a1612]/5 border border-[#ed5a08]/20"
        >
          <div className="mb-8">
            <h3 className="font-display text-2xl lg:text-3xl text-[#1a1612] mb-2">
              Conte um pouco sobre você
            </h3>
            <p className="text-sm text-[#5a4f47]/80 font-light">
              Respondemos pelo WhatsApp em pouco tempo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-[#ed5a08] mb-2">
                Nome
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-[#ffffff] border border-[#ed5a08]/20 focus:border-[#ed5a08] focus:bg-white rounded-xl px-4 py-3.5 text-[#1a1612] outline-none transition-all placeholder:text-[#5a4f47]/40"
                placeholder="Como podemos te chamar?"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-[#ed5a08] mb-2">
                WhatsApp
              </label>
              <input
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-[#ffffff] border border-[#ed5a08]/20 focus:border-[#ed5a08] focus:bg-white rounded-xl px-4 py-3.5 text-[#1a1612] outline-none transition-all placeholder:text-[#5a4f47]/40"
                placeholder="(24) 9 9999‑9999"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-[#ed5a08] mb-2">
                Serviço de interesse
              </label>
              <select
                required
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-[#ffffff] border border-[#ed5a08]/25 focus:border-[#ed5a08] focus:bg-white rounded-xl px-4 py-3.5 text-[#1a1612] outline-none transition-all"
              >
                <option value="">Selecione um serviço</option>
                <option>Abertura de CNPJ</option>
                <option>Terceirização de RH</option>
                <option>Certificado Digital</option>
                <option>Recrutamento e Seleção</option>
                <option>Planejamento Tributário</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-[0.65rem] tracking-[0.3em] uppercase text-[#ed5a08] mb-2">
                Mensagem
              </label>
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#ffffff] border border-[#ed5a08]/20 focus:border-[#ed5a08] focus:bg-white rounded-xl px-4 py-3.5 text-[#1a1612] outline-none transition-all placeholder:text-[#5a4f47]/40 resize-none"
                placeholder="Conte um pouco sobre sua empresa ou sua dúvida..."
              />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            <p className="text-xs text-[#5a4f47]/70 max-w-xs">
              Ao enviar, abrimos o WhatsApp com sua mensagem pronta.
            </p>
            <button type="submit" className="btn-gold">
              <IconWhatsApp size={18} />
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
