import { useEffect } from 'react';

interface Page1DespertarProps {
  onNext: () => void;
}

export default function Page1Despertar({ onNext }: Page1DespertarProps) {
  useEffect(() => {
    window.history.pushState(null, '', window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, '', window.location.href);
      onNext();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onNext]);

  return (
    <div className="min-h-screen bg-[#F4F4F4] relative overflow-hidden font-sans">
      
      {/* Elementos Decorativos de Fundo (Estilo MRV) */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#006B3F] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-96 h-96 bg-[#079D56] opacity-10 rounded-full blur-3xl"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-12 sm:py-20">

        {/* Identidade neutra */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#006B3F] animate-pulse" />
            <span className="font-semibold text-sm text-gray-600 tracking-wide">Parque Ilha Bela · Campos/RJ</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 sm:mb-12 leading-tight max-w-4xl mx-auto text-[#006B3F]">
          O Apê Que Te Tira do Aluguel
          <span className="block mx-auto mt-4 bg-[#079D56] text-white px-4 sm:px-6 py-2 rounded-lg w-fit text-xl sm:text-2xl md:text-4xl shadow-md">
            De Uma Vez Por Todas
          </span>
          <span className="block mt-4 text-[#FF8B22] text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wide">
            (Mesmo Sem Ter Dinheiro Pra Construir)
          </span>
        </h1>

        {/* Image com Moldura MRV */}
        <div className="mb-8 sm:mb-12 w-full max-w-sm md:max-w-2xl px-4">
          <div className="relative p-2 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-b-4 border-[#00D38D]">
            <img
              src="https://i.imgur.com/nxnXVqq.jpeg"
              alt="Fachada Parque Ilha Bela"
              className="w-full rounded-[1.8rem] object-cover"
            />
          </div>
        </div>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl px-4 leading-relaxed">
          Sem burocracia impossível, sem entrada absurda e sem precisar ganhar muito.
          <br />Com parcelas que <span className="text-[#006B3F] font-bold">cabem no seu bolso</span>, você pode conquistar seu apê próprio ainda este ano.
        </p>

        {/* Bloco de compromisso - Estilo Card MRV */}
        <div className="bg-white rounded-2xl shadow-xl border-l-8 border-[#006B3F] p-6 sm:p-10 mb-8 sm:mb-12 max-w-3xl w-full mx-4">
          <div className="text-base sm:text-lg md:text-xl text-gray-700 text-center space-y-4">
            <p className="flex items-center justify-center gap-2">
              <span className="text-[#079D56]">✔</span> Chega de pagar aluguel e não ter nada seu.
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-[#079D56]">✔</span> Chega de depender de aumento de dono de imóvel.
            </p>
            <p className="font-bold text-[#006B3F] text-lg sm:text-xl md:text-2xl pt-2">
              O Parque Ilha Bela foi criado para mudar esse jogo de vez.
            </p>
          </div>
        </div>

        {/* Urgência - Laranja MRV */}
        <div className="text-center mb-8 sm:mb-12 max-w-3xl px-4">
          <div className="inline-block bg-[#FFF4E5] border border-[#FF8B22] px-4 py-2 rounded-full">
            <p className="text-sm sm:text-base font-bold text-[#FF8B22] animate-pulse">
              ⚠️ Se esta página abriu, você ainda tem uma chance.
            </p>
          </div>
        </div>

        {/* CTA Button - Laranja Vibrante de Ação */}
        <button
          onClick={onNext}
          className="group relative bg-[#FF8B22] hover:bg-[#e67a1a] text-white px-10 sm:px-16 py-5 sm:py-6 rounded-full text-xl sm:text-2xl font-black shadow-[0_10px_20px_rgba(255,139,34,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 mx-4"
        >
          <span className="relative z-10 flex items-center gap-3">
            QUERO SAIR DO ALUGUEL
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>

        <p className="mt-6 text-gray-400 text-sm font-medium tracking-wide">
          PASSO 1 DE 3 • JORNADA DA CONQUISTA
        </p>
      </div>
    </div>
  );
}