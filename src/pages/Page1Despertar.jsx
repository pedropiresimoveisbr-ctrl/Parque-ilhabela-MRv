import { useEffect } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { img_fachada, img_aerea } from '../assets/images.js'

export default function Page1Despertar({ onNext }) {

  // Bloqueia voltar no browser
  useEffect(() => {
    window.history.pushState(null, '', window.location.href)
    const handle = () => { window.history.pushState(null, '', window.location.href); onNext() }
    window.addEventListener('popstate', handle)
    return () => window.removeEventListener('popstate', handle)
  }, [onNext])

  return (
    <div className="min-h-screen bg-[#F4F4F4] relative overflow-hidden font-dm">

      {/* Blobs decorativos */}
      <div className="absolute top-[-8%] right-[-8%] w-72 h-72 bg-[#006B3F] opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-6%] left-[-6%] w-96 h-96 bg-[#079D56] opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Barra de progresso */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-200 z-50">
        <div className="h-full bg-[#00D38D]" style={{ width: '33%' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-14 sm:py-20">

        {/* Logo */}
        <div className="mb-7 animate-fade-up">
          <div className="font-syne font-black text-2xl tracking-tight text-[#006B3F]">
            MRV <span className="font-light text-gray-300">|</span>{' '}
            <span className="font-medium text-[#079D56] text-lg">Parque Ilha Bela</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-center leading-tight max-w-3xl text-[#006B3F] mb-3 animate-fade-up-2">
          O Apê que te tira do aluguel
          <span className="block mt-3 bg-[#079D56] text-white px-5 py-2 rounded-xl w-fit mx-auto text-xl sm:text-2xl md:text-3xl shadow-lg">
            De uma vez por todas
          </span>
          <span className="block mt-3 text-[#FF8B22] text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide">
            Mesmo sem ter muito dinheiro guardado
          </span>
        </h1>

        {/* Foto real – fachada/guarita */}
        <div className="my-8 w-full max-w-xl px-2 animate-fade-up-3">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-b-4 border-[#00D38D]">
            <img
              src={img_fachada}
              alt="Fachada do Parque Ilha Bela – MRV"
              className="w-full object-cover aspect-video"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
              <p className="text-white text-xs font-medium">📍 Av. Presidente Vargas, 447 – Parque Pecuária, Campos/RJ</p>
              <p className="text-white/60 text-[10px]">Imagem ilustrativa. Projeto em fase de lançamento.</p>
            </div>
          </div>
        </div>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-gray-600 text-center mb-8 max-w-2xl leading-relaxed animate-fade-up-3">
          Sem burocracia impossível, sem entrada absurda e sem precisar ganhar muito.
          Com parcelas que <span className="text-[#006B3F] font-bold">cabem no seu bolso</span>, você pode conquistar seu apê próprio ainda este ano.
        </p>

        {/* Card de compromisso */}
        <div className="bg-white rounded-2xl shadow-xl border-l-[6px] border-[#006B3F] p-6 sm:p-8 mb-8 max-w-2xl w-full animate-fade-up-4">
          <div className="space-y-3 text-sm sm:text-base text-gray-700">
            {[
              'Chega de pagar aluguel e não ter nada seu.',
              'Chega de depender do humor do dono do imóvel.',
              'O Parque Ilha Bela foi criado para mudar esse jogo.',
            ].map((txt, i) => (
              <p key={i} className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-[#079D56] mt-0.5 shrink-0" />
                <span>{i === 2 ? <strong className="text-[#006B3F]">{txt}</strong> : txt}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Urgência */}
        <div className="mb-8 animate-fade-up-4">
          <div className="inline-flex items-center gap-2 bg-[#FFF4E5] border border-[#FF8B22] px-4 py-2 rounded-full">
            <span className="text-[#FF8B22] text-sm font-bold animate-pulse-slow">
              ⚠️ Se esta página abriu, você ainda tem uma chance.
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onNext}
          className="group flex items-center gap-3 bg-[#FF8B22] hover:bg-[#e67a1a] text-white font-syne font-black text-lg sm:text-xl px-10 py-5 rounded-full shadow-[0_10px_30px_rgba(255,139,34,.4)] transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-up-4"
        >
          QUERO SAIR DO ALUGUEL
          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="mt-5 text-gray-400 text-xs font-medium tracking-widest uppercase animate-fade-up-4">
          Passo 1 de 3 • Jornada da Conquista
        </p>
      </div>
    </div>
  )
}
