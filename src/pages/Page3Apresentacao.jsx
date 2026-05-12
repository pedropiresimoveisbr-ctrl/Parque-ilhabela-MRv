import { useState, useEffect } from 'react'
import { ChevronDown, CheckCircle2, Phone } from 'lucide-react'
import {
  img_fachada, img_aerea, img_piscina, img_salao,
  img_playground, img_sala, img_quarto, img_privativa, img_fitness
} from '../assets/images.js'

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const WPP = '5522999999999' // ← TROQUE pelo seu número (DDI+DDD+numero, sem espaços)
// ─────────────────────────────────────────────────────────────────────────────

const FAQ = [
  {
    q: 'Preciso ter entrada alta para começar?',
    a: 'Não! Com o Minha Casa Minha Vida e uso do FGTS, a entrada pode ser baixa e ainda parcelada durante a obra. Pedro faz sua simulação gratuitamente.',
  },
  {
    q: 'Qual subsídio eu posso ter?',
    a: 'Famílias com renda de até R$ 8.000 têm acesso ao MCMV. Quanto menor a renda, maior o subsídio — podendo chegar a R$ 55.000 descontados direto no financiamento.',
  },
  {
    q: 'Posso ver o apartamento decorado?',
    a: 'Sim! O apartamento decorado do Parque Ilha Bela está disponível na loja MRV de Campos, na Rua Saldanha Marinho, 503. Agende com Pedro.',
  },
  {
    q: 'A MRV é confiável?',
    a: 'É a maior construtora da América Latina — 46 anos de mercado, 500 mil+ chaves entregues. Em Campos, são 15 empreendimentos e 5.431 unidades já entregues.',
  },
  {
    q: 'Posso usar o FGTS?',
    a: 'Sim! O FGTS pode ser usado como entrada, amortização ou redução das parcelas — desde que seja primeiro imóvel e o comprador atenda as regras da Caixa.',
  },
]

const GALERIA = [
  { src: img_fachada,    label: 'Fachada / Guarita' },
  { src: img_aerea,      label: 'Vista aérea do complexo' },
  { src: img_piscina,    label: 'Piscinas adulto e infantil' },
  { src: img_salao,      label: 'Salão de festas gourmet' },
  { src: img_playground, label: 'Playground' },
  { src: img_fitness,    label: 'Espaço funcional (fitness)' },
  { src: img_sala,       label: 'Sala / Cozinha' },
  { src: img_quarto,     label: 'Quarto casal' },
  { src: img_privativa,  label: 'Área privativa' },
]

export default function Page3Apresentacao({ audioRef }) {
  const [faqOpen, setFaqOpen] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm]   = useState({
    nome: '', tel: '', email: '',
    renda: '', momento: '', fgts: '', obs: '', wpp: true
  })
  const [lightbox, setLightbox] = useState(null)

  // Para o áudio ao interagir
  useEffect(() => {
    const stop = () => { if (audioRef.current) audioRef.current.pause() }
    document.addEventListener('click', stop, { once: true })
    return () => document.removeEventListener('click', stop)
  }, [audioRef])

  // Lightbox keyboard
  useEffect(() => {
    const handler = e => {
      if (!lightbox) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % GALERIA.length)
      if (e.key === 'ArrowLeft')  setLightbox(i => (i - 1 + GALERIA.length) % GALERIA.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleTel = e => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 11)
    if (v.length > 6) v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`
    else if (v.length > 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`
    else if (v.length) v = `(${v}`
    setForm(f => ({ ...f, tel: v }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.nome.trim() || !form.tel.trim()) {
      alert('Preencha seu nome e WhatsApp.')
      return
    }

    // ── SUPABASE (descomente quando tiver credenciais) ──────────────────
    // fetch('https://SEU_PROJETO.supabase.co/rest/v1/leads', {
    //   method: 'POST',
    //   headers: { 'Content-Type':'application/json', 'apikey':'SUA_ANON_KEY', 'Authorization':'Bearer SUA_ANON_KEY', 'Prefer':'return=minimal' },
    //   body: JSON.stringify({ nome: form.nome, telefone: form.tel.replace(/\D/g,''), email: form.email, status: 'novo', origem: 'Parque Ilha Bela – Funil', obs: `Renda:${form.renda}|Momento:${form.momento}|FGTS:${form.fgts}\n${form.obs}` })
    // })
    // ─────────────────────────────────────────────────────────────────────

    const msg = encodeURIComponent(
      `Olá Pedro! Me cadastrei no site do Parque Ilha Bela.\n\n` +
      `Nome: ${form.nome}\nWhatsApp: ${form.tel}\n` +
      (form.renda   ? `Renda: ${form.renda}\n` : '') +
      (form.momento ? `Momento: ${form.momento}\n` : '') +
      (form.fgts    ? `FGTS: ${form.fgts}\n` : '') +
      (form.obs     ? `Obs: ${form.obs}` : '')
    )
    setSubmitted(true)
    setTimeout(() => window.open(`https://wa.me/${WPP}?text=${msg}`, '_blank'), 1500)
  }

  return (
    <div className="min-h-screen bg-[#F4F4F4] overflow-x-hidden">

      {/* Barra progresso 100% */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-[#00D38D] z-50 shadow-[0_0_8px_#00D38D]" />

      {/* ── HERO ── */}
      <section className="bg-[#006B3F] py-14 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB719] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-5 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[#00D38D] animate-pulse-slow" />
            <span className="font-syne font-bold text-sm text-white/80 tracking-wide">
              Parque Ilha Bela · Campos/RJ
            </span>
          </div>
          <h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4 animate-fade-up">
            Sua vez de morar no que é{' '}
            <span className="text-[#00D38D]">SEU</span>
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto mb-7 animate-fade-up-2">
            Parque Ilha Bela · 2 quartos · 41,85 m² · Lazer completo · Minha Casa Minha Vida<br />
            <span className="text-white/50 text-sm">Av. Presidente Vargas, 447 – Parque Pecuária, Campos/RJ</span>
          </p>
          <a
            href="#formulario"
            className="inline-flex items-center gap-2 bg-[#FF8B22] hover:bg-[#e67a1a] text-white font-syne font-black text-lg px-10 py-4 rounded-full shadow-[0_8px_24px_rgba(255,139,34,.45)] transition-all hover:scale-105 active:scale-95 animate-fade-up-2"
          >
            <Phone size={18} /> GARANTIR MEU APÊ AGORA
          </a>
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="font-syne font-bold text-[10px] tracking-[.15em] uppercase text-[#079D56] mb-1 text-center">Fotos reais do empreendimento</p>
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-[#006B3F] text-center mb-7">
            Conheça o Parque Ilha Bela
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {GALERIA.map((g, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden relative aspect-[4/3] cursor-zoom-in shadow-md hover:shadow-xl transition-shadow"
                onClick={() => setLightbox(i)}
              >
                <img src={g.src} alt={g.label} className="w-full h-full object-cover hover:scale-105 transition-transform duration-400" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-2">
                  <p className="text-white text-[10px] font-medium">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-3">
            Imagens ilustrativas. Material liberado em 19/02/2026.
          </p>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/92 z-[500] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-5 text-white text-4xl leading-none z-10" onClick={() => setLightbox(null)}>×</button>
          <button className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-5xl leading-none opacity-60 hover:opacity-100 px-3"
            onClick={e => { e.stopPropagation(); setLightbox(i => (i - 1 + GALERIA.length) % GALERIA.length) }}>‹</button>
          <img
            src={GALERIA[lightbox].src}
            alt={GALERIA[lightbox].label}
            className="max-w-[95vw] max-h-[88vh] rounded-xl object-contain"
            onClick={e => e.stopPropagation()}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-5xl leading-none opacity-60 hover:opacity-100 px-3"
            onClick={e => { e.stopPropagation(); setLightbox(i => (i + 1) % GALERIA.length) }}>›</button>
          <p className="absolute bottom-4 left-0 right-0 text-center text-white/50 text-xs">{GALERIA[lightbox].label}</p>
        </div>
      )}

      {/* ── DIFERENCIAIS ── */}
      <section className="py-12 px-4 sm:px-6 bg-[#F4F4F4]">
        <div className="max-w-3xl mx-auto">
          <p className="font-syne font-bold text-[10px] tracking-[.15em] uppercase text-[#079D56] mb-1 text-center">Área de lazer</p>
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-[#006B3F] text-center mb-6">
            Tudo que você precisa sem sair de casa
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              ['🏊', 'Piscinas adulto e infantil'],
              ['🌊', 'Prainha exclusiva 30–50 cm'],
              ['🎉', 'Salão de festas gourmet'],
              ['🔥', 'Churrasqueira'],
              ['🛝', 'Playground'],
              ['🏋️', 'Espaço funcional'],
              ['🚲', 'Bicicletário'],
              ['⚽', 'Futmesa'],
              ['🔒', 'Condomínio fechado 24h'],
            ].map(([icon, label], i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 flex items-center gap-2 text-sm font-medium text-gray-700">
                <span className="text-lg">{icon}</span>{label}
              </div>
            ))}
          </div>

          {/* Diferenciais do apartamento */}
          <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <p className="font-syne font-bold text-[#006B3F] text-sm mb-3">✅ Diferenciais do apartamento</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {[
                'Piso laminado nos quartos e sala (exceto térreo)',
                'Previsão para ar-condicionado nos quartos',
                'Pia em inox e tanque em louça',
                'Cerâmica cozinha e banheiro',
                'Medição individualizada de água (previsão)',
                'Portão com acionamento elétrico',
                'Dispositivos economizadores de energia e água',
                'Célula de segurança para pedestres',
              ].map((d, i) => (
                <p key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 size={15} className="text-[#079D56] mt-0.5 shrink-0" />{d}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OFERTA / URGÊNCIA ── */}
      <section className="bg-[#FF8B22] py-10 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white mb-3">
            ⚠️ Vagas limitadas no lançamento
          </h2>
          <p className="text-white/90 text-sm sm:text-base mb-5 max-w-md mx-auto">
            Pré-venda recorde: 27 contratos e R$ 5,6 milhões assinados em 2 dias. Condições especiais só para quem entrar agora.
          </p>
          <div className="flex flex-wrap gap-1.5 justify-center mb-5">
            {Array.from({length: 20}).map((_,i) => (
              <div key={i} className={`w-5 h-5 rounded ${i < 14 ? 'bg-white/25' : 'bg-white/90'}`} />
            ))}
          </div>
          <p className="text-white/60 text-xs">⬛ Reservadas · ⬜ Disponíveis · representação ilustrativa</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 px-4 sm:px-6 bg-[#F4F4F4]">
        <div className="max-w-2xl mx-auto">
          <p className="font-syne font-bold text-[10px] tracking-[.15em] uppercase text-[#079D56] mb-1 text-center">Dúvidas</p>
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-[#006B3F] text-center mb-6">
            Respondendo suas perguntas
          </h2>
          <div className="space-y-2">
            {FAQ.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-4 py-3.5 text-left text-sm font-semibold text-gray-800"
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                >
                  {item.q}
                  <ChevronDown size={17} className={`text-[#079D56] transition-transform ${faqOpen === i ? 'rotate-180' : ''} shrink-0 ml-2`} />
                </button>
                {faqOpen === i && (
                  <div className="px-4 pb-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-2.5">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO ── */}
      <section id="formulario" className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <p className="font-syne font-bold text-[10px] tracking-[.15em] uppercase text-[#079D56] mb-1 text-center">Fale com o consultor Pedro</p>
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-[#006B3F] text-center mb-2">
            Simulação gratuita
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">Sem compromisso · Resposta em até 1h via WhatsApp</p>

          <div className="bg-[#F4F4F4] rounded-2xl border border-gray-200 p-6 sm:p-7">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#006B3F] uppercase tracking-wide">Nome completo *</label>
                    <input name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" required
                      className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:border-[#079D56] focus:ring-2 focus:ring-[#079D56]/10 outline-none transition" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#006B3F] uppercase tracking-wide">WhatsApp *</label>
                    <input name="tel" value={form.tel} onChange={handleTel} placeholder="(22) 99999-9999" required
                      className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:border-[#079D56] focus:ring-2 focus:ring-[#079D56]/10 outline-none transition" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#006B3F] uppercase tracking-wide">E-mail</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="seu@email.com"
                      className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:border-[#079D56] focus:ring-2 focus:ring-[#079D56]/10 outline-none transition" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#006B3F] uppercase tracking-wide">Renda familiar</label>
                    <select name="renda" value={form.renda} onChange={handleChange}
                      className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:border-[#079D56] outline-none appearance-none cursor-pointer">
                      <option value="">Selecione</option>
                      <option>Até R$ 2.000</option>
                      <option>R$ 2.000 – R$ 4.000</option>
                      <option>R$ 4.000 – R$ 8.000</option>
                      <option>Acima de R$ 8.000</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#006B3F] uppercase tracking-wide">Momento de compra</label>
                    <select name="momento" value={form.momento} onChange={handleChange}
                      className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:border-[#079D56] outline-none appearance-none cursor-pointer">
                      <option value="">Selecione</option>
                      <option>Quero comprar agora</option>
                      <option>Em até 3 meses</option>
                      <option>Em até 6 meses</option>
                      <option>Ainda estou pesquisando</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold text-[#006B3F] uppercase tracking-wide">Tem FGTS?</label>
                    <select name="fgts" value={form.fgts} onChange={handleChange}
                      className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:border-[#079D56] outline-none appearance-none cursor-pointer">
                      <option value="">Selecione</option>
                      <option>Sim</option>
                      <option>Não</option>
                      <option>Não sei</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1 sm:col-span-2">
                    <label className="text-xs font-bold text-[#006B3F] uppercase tracking-wide">Observações</label>
                    <textarea name="obs" value={form.obs} onChange={handleChange}
                      placeholder="Ex: quero térreo, preciso de 2 vagas..." rows={3}
                      className="px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:border-[#079D56] focus:ring-2 focus:ring-[#079D56]/10 outline-none transition resize-none" />
                  </div>

                  <label className="sm:col-span-2 flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
                    <input type="checkbox" name="wpp" checked={form.wpp} onChange={handleChange} className="w-4 h-4" />
                    Aceito ser contatado via WhatsApp
                  </label>

                  <button type="submit"
                    className="sm:col-span-2 w-full flex items-center justify-center gap-2 bg-[#006B3F] hover:bg-[#079D56] text-white font-syne font-black text-base py-3.5 rounded-full transition-all hover:scale-[1.02] active:scale-[.98] shadow-lg mt-1">
                    <Phone size={18} /> QUERO MINHA SIMULAÇÃO GRATUITA
                  </button>
                </div>
                <p className="text-center text-xs text-gray-400 mt-3">🔒 Seus dados estão seguros. Não fazemos spam.</p>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-[#006B3F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-white" />
                </div>
                <h3 className="font-syne font-extrabold text-xl text-[#006B3F] mb-2">Recebemos seu contato!</h3>
                <p className="text-gray-500 text-sm mb-5">Pedro vai entrar em contato via WhatsApp em breve com sua simulação personalizada.</p>
                <a
                  href={`https://wa.me/${WPP}?text=${encodeURIComponent('Olá Pedro! Me cadastrei no site do Parque Ilha Bela e quero mais informações!')}`}
                  target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-syne font-bold text-sm px-6 py-3 rounded-full transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar com Pedro agora
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#006B3F] text-white/60 text-xs text-center py-7 px-4">
        <p className="font-bold text-white text-sm mb-1">Parque Ilha Bela · Campos dos Goytacazes</p>
        <p>Consultor Pedro · Campos/RJ · Atendimento via WhatsApp</p>
        <p className="mt-2 text-[10px] text-white/40">
          Imagens ilustrativas. Sujeito à análise de crédito. Material destinado exclusivamente à divulgação do produto.
        </p>
      </footer>

      {/* ── WPP FLOAT ── */}
      <a
        href={`https://wa.me/${WPP}?text=${encodeURIComponent('Oi Pedro! Vi o site do Parque Ilha Bela e quero saber mais!')}`}
        target="_blank" rel="noopener"
        className="fixed bottom-5 right-5 z-[200] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_6px_18px_rgba(37,211,102,.45)] hover:scale-110 transition-transform"
        aria-label="WhatsApp Pedro"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

    </div>
  )
}