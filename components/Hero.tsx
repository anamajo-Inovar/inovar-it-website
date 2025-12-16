import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    
    <section className="relative pt-20 pb-40 bg-white">
      
      {/* Curvas de fundo  */}
      <div className="pointer-events-none absolute inset-x-0 top-[-120px] flex justify-center">
        <Image
          src="/Vectorcurvas.png"
          alt="Decorative curves"
          width={2000}
          height={700}
          className="opacity-70 max-w-none"
        />
      </div>

      {/* QUADRADO MÉDIO */}
      <Image
        src="/VectorquadradoM.png"
        alt="Medium decorative square"
        width={65}
        height={61}
        className="absolute top-[150px] left-[140px]"
      />

      {/* QUADRADO PEQUENO  */}
      <Image
        src="/VectorquadradoP.png"
        alt="Small decorative square"
        width={33}
        height={32}
        className="absolute top-[80px] right-[230px]"
      />

      {/* QUADRADO GRANDE  */}
      <Image
        src="/VectorquadradoG.png"
        alt="Large decorative square"
        width={153}
        height={119}
        className="absolute top-[380px] right-[200px]"
      />

      {/* Conteúdo central */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-center px-4 text-center">

        {/* Título */}
        <Image
          src="/TitleHERO.png"
          alt="YOUR BEST IT PARTNERS"
          width={900}
          height={250}
          className="w-full max-w-4xl h-auto"
          priority
        />

        {/* Texto */}
        <p className="text-[#4A4A5A] max-w-2xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
          From custom software development to cybersecurity, our team of experts
          is dedicated to delivering solutions that are tailored to your unique needs.
        </p>

        {/* BOTÃO FINAL */}
        <Link href="/services">
          <button
            className="
              mt-10 px-10 py-4 
              bg-[#0B0B23] text-white 
              font-semibold text-sm tracking-[0.2em]
              rounded-xl
              flex items-center gap-5
              shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              hover:bg-[#111133]
              transition-all
              hover:scale-[1.03]
              active:scale-[0.98]
            "
          >
            EXPLORE NOW

            <svg
              width="28"
              height="14"
              viewBox="0 0 24 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6H22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 1L22 6L16 11"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>

      </div>
    </section>
  );
}
