import { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Preciso ter entrada alta para começar?',
    answer: 'Não! Com o Minha Casa Minha Vida e uso do FGTS, a entrada pode ser baixa e ainda parcelada durante a obra. Simulação gratuita e sem compromisso.',
  },
  {
    question: 'Em quanto tempo consigo sair do aluguel?',
    answer: 'A análise é rápida. Sendo aprovado, você já reserva sua unidade e inicia o processo de conquista do seu patrimônio.',
  },
  {
    question: 'O empreendimento é seguro?',
    answer: 'Condomínio fechado com portaria 24h, câmeras, célula de segurança para pedestres e portão com acionamento elétrico.',
  },
];

interface Page3ApresentacaoProps {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
}

export default function Page3Apresentacao({ audioRef }: Page3ApresentacaoProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const stopAudio = () => { if (audioRef.current) audioRef.current.pause(); };
    document.addEventListener('click', stopAudio, { once: true });
    return () => { document.removeEventListener('click', stopAudio); };
  }, [audioRef]);

  return (
    <div className="min-h-screen bg-[#F4F4F4] relative overflow-hidden font-sans">
      
      {/* Barra de Progresso Final (100%) */}
      <div className="fixed top-0 left-0 w-full h-2 bg-[#00D38D] z-50 shadow-[0_0_10px_#00D38D]"></div>

      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB719] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#006B3F] opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 pt-12 sm:pt-20 pb-20">

        {/* Identidade neutra */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#006B3F] animate-pulse" />
            <span className="font-semibold text-sm text-gray-600 tracking-wide">Parque Ilha Bela · Campos/RJ</span>
          </div>
        </div>

        {/* Headline Final */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#006B3F] leading-tight max-w-4xl">
          Sua vez de morar no que é <span className="text-[#079D56]">SEU</span>
        </h1>

        {/* Video com Moldura Verde MRV */}
        <div className="w-full max-w-4xl mb-16 px-4">
          <div className="rounded-[2rem] border-4 border-white shadow-2xl overflow-hidden bg-[#006B3F] relative">
            <iframe
              src="https://www.youtube.com/watch?v=P0MCcia1NEM"
              className="w-full aspect-video"
              title="Apresentação MRV"
              allowFullScreen
            />
          </div>
        </div>

        {/* FAQ - Estilo MRV Accordion */}
        <div className="w-full max-w-2xl mb-16 px-4">
          <h2 className="text-2xl font-black text-center mb-8 text-[#006B3F] uppercase">Dúvidas Frequentes</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-gray-700">{item.question}</span>
                  <ChevronDown className={`text-[#079D56] transition-transform ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Oferta Irresistível - Card Laranja de Fechamento */}
        <div className="w-full max-w-3xl px-4">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-t-8 border-[#FF8B22] text-center">
            <h2 className="text-3xl font-black text-[#006B3F] mb-6">OFERTA DE LANÇAMENTO</h2>
            
            <div className="space-y-4 mb-10 text-left max-w-md mx-auto">
              {[
                "Acesso às condições Minha Casa Minha Vida",
                "Simulação personalizada gratuita",
                "Análise de crédito facilitada",
                "As melhores unidades do Parque Ilha Bella"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#079D56]" size={20} />
                  {text}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/SEUNUMERO"
              className="block w-full bg-[#FF8B22] hover:bg-[#e67a1a] text-white py-6 rounded-full text-xl md:text-2xl font-black shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              GARANTIR MEU APÊ AGORA
            </a>

            <p className="mt-6 text-[#FF8B22] font-bold text-sm animate-pulse">
               ⚠️ Vagas limitadas para a condição de lançamento
            </p>
          </div>
        </div>

        <p className="mt-12 text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
          Parque Ilha Bela · Sua conquista começa aqui
        </p>
      </div>
    </div>
  );
}