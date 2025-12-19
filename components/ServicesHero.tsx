import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative bg-white pt-14 pb-20 overflow-visible">
      {/* Quadrados decorativos */}
      <Image
        src="/VectorquadradoP.png"
        alt="Decorative square"
        width={26}
        height={26}
        className="absolute left-[110px] top-[220px] hidden lg:block z-20"
      />

      <Image
        src="/VectorquadradoP.png"
        alt="Decorative square"
        width={26}
        height={26}
        className="absolute left-1/2 top-[120px] -translate-x-1/2 hidden lg:block z-20"
      />

      <Image
        src="/VectorquadradoM.png"
        alt="Decorative square"
        width={72}
        height={68}
        className="absolute right-[130px] top-[180px] hidden lg:block z-20"
      />

      <div className="relative z-30 mx-auto w-full max-w-6xl px-6">
        {/* Breadcrumb */}
        <div className="text-[12px] text-[#6B6B78] tracking-wide">
          Home <span className="mx-2">›</span> <span>Services</span>
        </div>

        {/* Título */}
        <h1 className="mt-4 text-[#0B0B23] text-5xl md:text-6xl font-extrabold tracking-tight">
          Services
        </h1>
      </div>
    </section>
  );
}
