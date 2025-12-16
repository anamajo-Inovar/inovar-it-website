import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-white pt-14 pb-24 overflow-hidden">
      {/* Quadrados decorativos */}
      <Image
        src="/VectorquadradoP.png"
        alt="Decorative square"
        width={26}
        height={26}
        className="absolute left-[110px] top-[320px] hidden lg:block"
      />

      <Image
        src="/VectorquadradoP.png"
        alt="Decorative square"
        width={26}
        height={26}
        className="absolute left-1/2 top-[120px] -translate-x-1/2 hidden lg:block"
      />

      {/* QUADRADO MAIOR – ajustado mais para a direita */}
      <Image
        src="/VectorquadradoM.png"
        alt="Decorative square"
        width={72}
        height={68}
        className="absolute right-[90px] top-[180px] hidden lg:block"
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Breadcrumb */}
        <div className="text-[12px] text-[#6B6B78] tracking-wide">
          Home <span className="mx-2">›</span> <span>About Us</span>
        </div>

        {/* Título */}
        <h1 className="mt-3 text-[#0B0B23] text-5xl md:text-6xl font-extrabold tracking-tight">
          About Us
        </h1>

        {/* Conteúdo (2 colunas) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Esquerda: headline centralizado no meio */}
          <div className="lg:min-h-[520px] flex items-center">
            <h2
              className="
                text-[#0B0B23]
                font-extrabold
                leading-[1.15]
                max-w-[520px]
                font-[var(--font-space-grotesk)]
                text-[36px]
              "
            >
              Turning technology into real
              <br />
              business results.
            </h2>
          </div>

          {/* Direita: texto */}
          <div className="lg:min-h-[520px] flex">
            <div className="m-auto max-w-[520px] text-center text-[#5B5B6A] leading-relaxed space-y-7 text-sm md:text-[15px]">
              <p>
                At Inovar IT, we believe technology is one of the key drivers of
                growth and business transformation. Our mission is to deliver
                smart, secure, and tailor-made IT solutions that empower
                companies of all sizes and industries.
              </p>

              <p>
                With a specialized team and experience in both national and
                international projects, we combine innovation, efficiency, and
                strategy to meet each client&apos;s specific needs. From IT
                outsourcing to custom software development, we focus on
                delivering quality, measurable results, and long-term
                partnerships.
              </p>

              <p>
                What sets us apart is our ability to combine technical expertise
                with a consultative approach, ensuring that every solution we
                provide generates real value, optimizes processes, and creates
                new opportunities for growth.
              </p>

              <p>
                At Inovar IT, we don&apos;t just deliver technology — we deliver
                trust, innovation, and continuous evolution for the future of
                your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
