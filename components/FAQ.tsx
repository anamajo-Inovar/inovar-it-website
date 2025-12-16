const faqs = [
  {
    q: "What services does InovarIt offer?",
    a: "We offer a wide range of IT services including outsourcing, software development, consulting, and more.",
  },
  {
    q: "Which IT solution is for my business?",
    a: "We analyze your needs and recommend the most suitable IT solution for your business.",
  },
  {
    q: "How much do the services cost?",
    a: "Our pricing varies based on the specific services and needs of your business. Contact us to learn more.",
  },
  {
    q: "How do I get started with the IT solutions?",
    a: "Simply reach out to us and our specialists will guide you through the process.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B23]">
          Got Any <br className="hidden md:block" />
          Questions?
        </h2>

        <button className="px-6 py-3 rounded-full bg-[#0B0B23] text-white font-semibold text-sm">
          ASK A QUESTION
        </button>
      </div>

      <div className="mt-12 space-y-6 max-w-3xl">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="border-b border-gray-200 pb-4 cursor-pointer"
          >
            <summary className="text-base md:text-lg font-semibold text-[#0B0B23]">
              {f.q}
            </summary>
            <p className="mt-3 text-[#4A4A5A] text-sm leading-relaxed">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
