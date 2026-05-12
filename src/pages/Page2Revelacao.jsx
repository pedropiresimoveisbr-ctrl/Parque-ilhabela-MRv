import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { img_aerea, img_piscina, img_salao } from '../assets/images.js'

export default function Page2Revelacao({ onNext, audioRef }) {

  useEffect(() => {
    // Tenta tocar áudio sutil
    if (!audioRef.current) {
      audioRef.current = new Audio('https://orafaaah.com/wp-content/uploads/2025/10/i-see-red.mp3')
      audioRef.current.loop = true
      audioRef.current.volume = 0.18
    }
    audioRef.current.play().catch(() => {})
    return () => { if (audioRef.current) audioRef.current.pause() }
  }, [audioRef])

  const galeria = [
    { src: img_piscina,  label: 'Piscinas adulto e infantil' },
    { src: img_salao,    label: 'Salão de festas com espaço gourmet' },
    { src: img_aerea,    label: 'Vista aérea do complexo' },
  ]

  return (
    <div className="min-h-screen bg-[#F4F4F4] overflow-hidden">

      {/* Barra de progresso */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-200 z-50">
        <div className="h-full bg-[#00D38D] transition-all duration-700" style={{ width: '66%' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 py-14 sm:py-20">

        {/* Logo */}
        <div className="mb-7 font-syne font-black text-2xl tracking-tight text-[#006B3F] animate-fade-up">
          MRV <span className="font-light text-gray-300">|</span>{' '}
          <span className="font-medium text-[#079D56] text-lg">Revelação</span>
        </div>

        {/* Headline impacto */}
        <div className="bg-[#006B3F] text-white rounded-3xl p-6 sm:p-10 mb-8 max-w-2xl w-full shadow-2xl border-b-[6px] border-[#079D56] animate-fade-up">
          <h1 className="font-syne font-extrabold text-2xl sm:text-3xl md:text-4xl text-center leading-tight">
            A verdade que ninguém te conta:
            <span className="block mt-2 text-[#FFB719]">
              continuar no aluguel nunca vai te aproximar da sua casa própria.
            </span>
          </h1>
        </div>

        {/* Texto emocional */}
        <div className="bg-white rounded-2xl shadow-xl border-l-[6px] border-[#006B3F] p-6 sm:p-8 mb-10 max-w-2xl w-full animate-fade-up-2">
          <div className="space-y-4 text-sm sm:text-base text-gray-700 text-center leading-relaxed">
            <p>
              Você chega em casa depois de um dia cansativo... olha ao redor e, no fundo, sabe:{' '}
              <span className="font-bold text-[#006B3F] underline">nada ali é seu.</span>
            </p>
            <p>
              Todo mês é a mesma história — seu dinheiro vai embora e você segue sem patrimônio.
            </p>
            <div className="py-4 border-y border-gray-100">
              <p className="font-bold text-[#079D56] text-lg sm:text-xl">
                O Parque Ilha Bela foi criado para mudar esse jogo.
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">
                📍 Região da Pecuária – Campos dos Goytacazes / RJ
              </p>
            </div>
            <p className="text-xs text-gray-500">
              320 unidades · 2 quartos · 41,85 m² · Lazer completo com prainha exclusiva
            </p>
          </div>
        </div>

        {/* Galeria de imagens reais */}
        <div className="w-full max-w-2xl mb-10 animate-fade-up-3">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium">
            Fotos reais do empreendimento
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {galeria.map((g, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
                <img src={g.src} alt={g.label} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-2">
                  <p className="text-white text-[10px] font-medium">{g.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-2">
            Imagens ilustrativas. Material liberado em 19/02/2026.
          </p>
        </div>

        {/* Ficha rápida */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 mb-8 max-w-2xl w-full animate-fade-up-3">
          <p className="font-syne font-bold text-[#006B3F] text-sm mb-3 text-center uppercase tracking-wide">
            O que você vai ter
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
            {[
              '🏊 Piscinas adulto e infantil',
              '🌊 Prainha exclusiva (30–50 cm)',
              '🎉 Salão de festas gourmet',
              '🔥 Churrasqueira',
              '🛝 Playground',
              '🏋️ Espaço funcional (fitness)',
              '🚗 203 vagas de garagem',
              '🔒 Condomínio fechado 24h',
            ].map((item, i) => (
              <p key={i} className="flex items-center gap-1.5 py-1 border-b border-gray-50 last:border-0">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Pergunta de decisão */}
        <p className="font-syne font-bold text-lg sm:text-xl text-[#006B3F] text-center mb-7 max-w-xl animate-fade-up-4">
          Se eu te mostrar como garantir seu apê ainda esse ano, você aceita o desafio?
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-fade-up-4">
          <button
            onClick={onNext}
            className="flex-1 bg-white text-gray-400 font-bold text-sm px-5 py-4 rounded-full border-2 border-gray-200 hover:border-[#006B3F] hover:text-[#006B3F] transition-all duration-300"
          >
            Quero entender melhor
          </button>
          <button
            onClick={onNext}
            className="flex-1 flex items-center justify-center gap-2 bg-[#FF8B22] hover:bg-[#e67a1a] text-white font-syne font-black text-base px-5 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            QUERO MEU APÊ AGORA
            <ArrowRight size={18} />
          </button>
        </div>

        <p className="mt-7 text-gray-400 text-xs font-medium tracking-widest uppercase">
          Passo 2 de 3 • Identificando Oportunidade
        </p>
      </div>
    </div>
  )
}
