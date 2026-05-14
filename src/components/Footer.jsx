import Logo from './Logo'

const INSTAGRAM = 'https://www.instagram.com/p/DL7klseOAQ7/'
const WHATSAPP_FIXO = 'https://wa.me/552430320205'
const WHATSAPP_CEL = 'https://wa.me/5524998322300'

function IconInstagram({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconWhatsApp({ size = 16 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-500/15 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <Logo className="h-20 w-auto" />
            <p className="text-white/55 leading-relaxed mt-8 max-w-sm font-light">
              Mais que contador, parceiro do seu negócio. Tecnologia e atendimento
              humanizado pra você decidir melhor — não só pagar imposto.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.%20Augusto%20de%20Carvalho%2C%20781%20-%20Loja%202%20-%20Jardim%20Bras%C3%ADlia%20II%2C%20Resende%20-%20RJ%2C%2027516-240"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-start gap-3 text-sm text-white/55 hover:text-gold-500 transition-colors max-w-sm font-light not-italic"
            >
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                Av. Augusto de Carvalho, 781 — Loja 2<br />
                Jardim Brasília II, Resende — RJ · 27516-240
              </span>
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold-500 mb-6">Serviços</div>
            <ul className="space-y-3 text-sm text-white/60 font-light">
              <li><a href="#servicos" className="hover:text-gold-500 transition-colors">Abertura de CNPJ</a></li>
              <li><a href="#servicos" className="hover:text-gold-500 transition-colors">Terceirização de RH</a></li>
              <li><a href="#servicos" className="hover:text-gold-500 transition-colors">Certificado Digital</a></li>
              <li><a href="#servicos" className="hover:text-gold-500 transition-colors">Recrutamento e Seleção</a></li>
              <li><a href="#servicos" className="hover:text-gold-500 transition-colors">Planejamento Tributário</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[0.65rem] tracking-[0.3em] uppercase text-gold-500 mb-6">Contato</div>
            <ul className="space-y-3 text-sm text-white/60 font-light mb-6">
              <li>
                <a href={WHATSAPP_CEL} target="_blank" rel="noreferrer" className="hover:text-gold-500 transition-colors inline-flex items-center gap-2">
                  <IconWhatsApp size={14} />
                  (24) 9 9832‑2300
                </a>
              </li>
              <li>
                <a href={WHATSAPP_FIXO} target="_blank" rel="noreferrer" className="hover:text-gold-500 transition-colors inline-flex items-center gap-2">
                  <IconWhatsApp size={14} />
                  (24) 3032‑0205
                </a>
              </li>
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-gold-500 transition-colors inline-flex items-center gap-2">
                  <IconInstagram size={14} />
                  Instagram
                </a>
              </li>
            </ul>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gold-500/40 text-gold-500 hover:bg-gold-500 hover:text-white hover:border-transparent transition-all"
              >
                <IconInstagram />
              </a>
              <a
                href={WHATSAPP_FIXO}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Fixo"
                title="(24) 3032-0205"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gold-500/40 text-gold-500 hover:bg-gold-500 hover:text-white hover:border-transparent transition-all"
              >
                <IconWhatsApp />
              </a>
              <a
                href={WHATSAPP_CEL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Celular"
                title="(24) 9 9832-2300"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gold-500 text-white hover:bg-gold-500 transition-all"
              >
                <IconWhatsApp />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-white/35">
          © {new Date().getFullYear()} BC Gestão Contábil
        </div>
      </div>
    </footer>
  )
}
