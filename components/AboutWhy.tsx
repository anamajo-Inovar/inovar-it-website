import Image from "next/image";

const items = [
  {
    title: "Expertise",
    img: "/expertiseB.png",
    desc:
      "Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.",
  },
  {
    title: "Technology",
    img: "/technologyB.png",
    desc:
      "We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.",
  },
  {
    title: "Solutions",
    img: "/solutionsB.png",
    desc:
      "We take a personalized approach to every project, working closely with you to understand your business and create solutions.",
  },
  {
    title: "Results",
    img: "/resultsB.png",
    desc:
      "Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.",
  },
];

// controle fino do tamanho dos ícones
const iconWidthByTitle: Record<string, number> = {
  Expertise: 120,
  Technology: 95,
  Solutions: 120,
  Results: 120,
};

export default function WhyChooseUsAbout() {
  return (
    <section className="w-full bg-[#070B2A] py-28">
      {/* CONTEÚDO */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-24 gap-y-24">
          {items.map((item) => {
            const iconW = iconWidthByTitle[item.title];

            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center"
              >
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
                <h3 className="text-white text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                {/* TEXTO */}
                <p className="text-white/80 text-base leading-relaxed max-w-[320px]">
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
