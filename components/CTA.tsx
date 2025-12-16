import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative text-center py-24 px-6 overflow-hidden">
      {/* Área reservada */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[420px]" />

      {/* Waves */}
      <div className="pointer-events-none absolute inset-x-0 top-[-20px] h-[420px] z-0">
        <Image
          src="/waves.png"
          alt="Decorative waves"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B23] leading-tight">
          Need IT Solutions? <br />
          <span className="italic font-light">Let&apos;s start now.</span>
        </h2>

        <Link
          href="/contact"
          className="
            inline-flex items-center justify-center
            mt-10 px-12 py-4
            bg-[#0B0B23] text-white
            rounded-[16px]
            font-semibold text-sm
            transition-transform duration-200
            hover:scale-[1.04]
            active:scale-[0.98]
          "
        >
          GET FREE CONSULTATION
        </Link>
      </div>
    </section>
  );
}
