import { useEffect } from 'react';

interface Page2RevelacaoProps {
  onNext: () => void;
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

export default function Page2Revelacao({ onNext, audioRef }: Page2RevelacaoProps) {
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://orafaaah.com/wp-content/uploads/2025/10/i-see-red.mp3');
      audioRef.current.loop = true;
    }
    audioRef.current.play().catch(() => {});
    return () => { if (audioRef.current) audioRef.current.pause(); };
  }, [audioRef]);

  return (
    <div className="min-h-screen bg-[#F4F4F4] relative overflow-hidden font-sans">
      
      {/* Barra de Progresso MRV */}
      <div className="fixed top-0 left-0 w-full h-2 bg-gray-200 z-50">
        <div className="h-full bg-[#00D38D] transition-all duration-1000" style={{ width: '66%' }}></div>
      </div>

      {/* Elementos Decorativos de Fundo (Padrão Página 1) */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#006B3F] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 bg-[#079D56] opacity-10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-20">

        {/* Identidade neutra */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#006B3F] animate-pulse" />
            <span className="font-semibold text-sm text-gray-600 tracking-wide">Parque Ilha Bela · Campos/RJ</span>
          </div>
        </div>

        {/* Headline de Impacto */}
        <div className="bg-[#006B3F] text-white rounded-[2rem] p-6 sm:p-10 mb-8 sm:mb-10 max-w-3xl w-full mx-4 shadow-2xl border-b-8 border-[#079D56]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center leading-tight">
            A verdade que ninguém te fala:
            <br />
            <span className="text-[#FFB719] block mt-2">continuar no aluguel nunca vai te aproximar da sua casa própria.</span>
          </h1>
        </div>

        {/* Imagem com Moldura MRV */}
        <div className="mb-8 sm:mb-12 w-full max-w-sm md:max-w-2xl px-4">
          <div className="relative p-2 bg-white rounded-[2rem] shadow-xl border-b-4 border-[#00D38D]">
            <img
              src="https://i.imgur.com/tBHo4et.jpeg"
              alt="Prédio residencial"
              className="w-full rounded-[1.8rem]"
            />
          </div>
        </div>

        {/* Texto de Conscientização - Card Padrão Página 1 */}
        <div className="bg-white rounded-2xl shadow-xl border-l-8 border-[#006B3F] p-6 sm:p-10 mb-8 sm:mb-12 max-w-3xl w-full mx-4">
          <div className="text-base sm:text-lg text-gray-700 space-y-6 text-center leading-relaxed">
            <p>Você chega em casa depois de um dia cansativo... olha ao redor e, no fundo, sabe: <span className="font-bold text-[#006B3F] underline">nada ali é seu.</span></p>
            
            <p>Todo mês é a mesma coisa... seu dinheiro vai embora e você continua sem patrimônio.</p>

            <div className="py-4 border-y border-gray-100 font-bold text-[#079D56] text-xl">
               O Parque Ilha Bela foi criado para mudar esse jogo.
            </div>

            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
              📍 Região da Pecuária - Campos/RJ
            </p>
          </div>
        </div>

        {/* Pergunta de Decisão */}
        <p className="text-xl sm:text-2xl font-bold text-[#006B3F] text-center mb-8 px-4">
          Se eu te mostrar como garantir seu apê ainda esse ano, você aceita o desafio?
        </p>

        {/* Botões - Sem azul, apenas MRV Palette */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl px-4">
          <button
            onClick={onNext}
            className="flex-1 bg-white text-gray-400 px-6 py-4 rounded-full text-base font-bold border-2 border-gray-200 hover:border-[#006B3F] hover:text-[#006B3F] transition-all duration-300"
          >
            Quero entender melhor
          </button>

          <button
            onClick={onNext}
            className="flex-1 group relative bg-[#FF8B22] text-white px-6 py-4 rounded-full text-lg font-black shadow-lg hover:bg-[#e67a1a] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            QUERO MEU APÊ AGORA
          </button>
        </div>
        
        <p className="mt-8 text-gray-400 text-xs font-medium tracking-widest uppercase">
          Passo 2 de 3 • Identificando Oportunidade
        </p>
      </div>
    </div>
  );
}