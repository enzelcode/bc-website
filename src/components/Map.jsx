const ADDRESS = 'Av. Augusto de Carvalho, 781 - Loja 2 - Jardim Brasília II, Resende - RJ, 27516-240'
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`
const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

function IconPin({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function Map() {
  return (
    <section id="endereco" className="relative border-t border-gold-500/15">
      <div className="max-w-[1400px] mx-auto px-8 pt-20 pb-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <div>
            <div className="eyebrow mb-4">Endereço</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
              Venha tomar um café <span className="gold-text italic font-light">com a gente.</span>
            </h2>
            <p className="mt-4 text-white/65 font-light max-w-md flex items-start gap-2">
              <IconPin size={18} />
              <span>Av. Augusto de Carvalho, 781 — Loja 2<br />Jardim Brasília II, Resende — RJ · 27516-240</span>
            </p>
          </div>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            <IconPin size={18} />
            Abrir no Google Maps
          </a>
        </div>
      </div>

      <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden border-t border-gold-500/15">
        <iframe
          title="Mapa BC Gestão Contábil"
          src={MAPS_EMBED}
          className="w-full h-full grayscale-[20%] contrast-[1.05]"
          style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg) saturate(0.8)' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  )
}
