import Image from "next/image";

const items = [
  {
    title: "Expertise",
    img: "/Expertise.png",
    desc:
      "Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.",
  },
  {
    title: "Technology",
    img: "/Technology.png",
    desc:
      "We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.",
  },
  {
    title: "Solutions",
    img: "/Solutions.png",
    desc:
      "We take a personalized approach to every project, working closely with you to understand your business and create solutions.",
  },
  {
    title: "Results",
    img: "/Results.png",
    desc:
      "Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.",
  },
];

// ícones 
const iconWidthByTitle: Record<string, number> = {
  Expertise: 120,
  Technology: 95,
  Solutions: 120,
  Results: 120,
};

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-28">
      {/* TÍTULO */}
      <div className="pl-[96px] md:pl-[120px] mb-24">
        <Image
          src="/Why Choose Us_.png"
          alt="Why Choose Us?"
          width={420}
          height={210}
          className="w-[260px] md:w-[380px]"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-24">
          {items.map((item) => {
            const iconW = iconWidthByTitle[item.title];

            return (
              // 
              <div key={item.title} className="flex flex-col items-center text-center">
                {/* ÍCONE */}
                <div className="h-[100px] flex items-end justify-center mb-10 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={iconW}
                    height={100}
                    className="h-auto"
                    style={{ width: iconW }}
                  />
                </div>

                {/* TÍTULO */}
                <h3 className="text-[#0B0B23] text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                {/* TEXTO */}
                <p className="text-[#4A4A5A] text-base leading-relaxed max-w-[320px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
