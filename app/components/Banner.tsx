// components/Banner.js
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Background lines */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#2D2D2D" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Aprenda a programar do zero!
          </h1>
          <p className="text-lg mb-8">
            Seja o arquiteto dos mundos digitais, e acesse oportunidades altamente rentáveis no mercado de trabalho!
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300">
              Inscrição
            </button>
            <button className="flex items-center space-x-2 text-white font-semibold py-2 px-4 rounded-md border border-white hover:bg-white hover:text-black transition duration-300">
              <span>Assistir</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197 2.132A1 1 0 0110 12.366V9.634a1 1 0 011.555-.832l3.197 2.132a1 1 0 010 1.664z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative mt-12 lg:mt-0">
          <Image
            src="/images/programmer-hoodie.png"
            alt="Programmer"
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
