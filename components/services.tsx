import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "IT Outsourcing",
    desc:
      "Comprehensive technology services managed by our experts, allowing you to focus on your core business while we handle your IT needs.",
    img: null as string | null,
  },
  {
    title: "Custom Software Development",
    desc:
      "Tailored software solutions designed to meet your business needs and drive efficiency.",
    img: null as string | null,
  },
  {
    title: "Technology Consulting",
    desc:
      "Expert guidance to help you make the right technology decisions for sustainable growth.",
    img: null as string | null,
  },
  {
    title: "System Integration",
    desc:
      "Seamlessly connect your systems to improve workflows and boost productivity.",
    img: null as string | null,
  },
  {
    title: "Cloud Migration",
    desc:
      "Smooth transition of your applications and data to secure, scalable cloud environments.",
    img: null as string | null,
  },
  {
    title: "Support & Maintenance",
    desc:
      "Reliable technical support to keep your systems running at peak performance.",
    img: null as string | null,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-[#070B2A] py-24 md:py-28">
      <div className="mx-auto w-full max-w-[1100px] px-6">
        {/* Título */}
        <h2 className="text-center text-white text-5xl md:text-6xl font-extrabold tracking-tight mb-14">
          Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 place-items-center">
          {services.map((s) => (
            <div
              key={s.title}
              className="
                w-[300px] h-[300px]
                bg-[#D9D9D9]
                rounded-[28px]
                shadow-[0_18px_0_0_rgba(0,0,0,0.25)]
                flex flex-col items-center justify-start
                px-8 pt-8
              "
            >
              {/* Imagem / placeholder */}
              <div className="h-[120px] flex items-center justify-center mb-4">
                {s.img ? (
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={120}
                    height={100}
                    className="h-auto w-auto max-h-[120px]"
                  />
                ) : (
                  <div className="w-[120px] h-[100px] rounded-xl bg-black/10" />
                )}
              </div>

              {/* Textos */}
              <h3 className="text-[#0B0B23] text-base font-extrabold text-center leading-tight mb-2">
                {s.title}
              </h3>

              <p className="text-[#3D3D4A] text-[12px] leading-relaxed text-center">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Botão */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/services"
            className="
              inline-flex items-center justify-center
              w-[340px] h-[56px]
              rounded-[16px]
              bg-[#D9D9D9] text-[#0B0B23]
              font-semibold
              transition-transform duration-200
              hover:scale-[1.02]
              active:scale-[0.99]
            "
          >
            Discover Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
