"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What services does Inovar It offer?",
    a: "We offer IT Outsourcing, custom software development, system integration, cloud migration, technology consulting, and support & maintenance.",
  },
  {
    q: "Which IT solution is for my business?",
    a: "We evaluate your needs, current stack, and goals to recommend the best solution—whether it’s outsourcing, custom development, cloud, or integration.",
  },
  {
    q: "How much do the services cost?",
    a: "Our pricing varies based on the specific services and needs of your business. We offer flexible pricing options to suit your budget and requirements. Contact us to learn more.",
  },
  {
    q: "How do I get started with the IT solutions?",
    a: "Just contact us and we’ll schedule a quick discovery call to understand your goals and propose the best next steps.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(2);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? -1 : idx));
  };

  return (
    <section id="faq" className="w-full bg-white py-24">
      <div className="mx-auto w-full max-w-[1200px] px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ESQUERDA */}
          <div className="relative">
            <h2 className="text-[#0B0B23] text-[56px] leading-[1.05] font-extrabold">
              Got Any
              <br />
              Questions?
            </h2>

            {/* QUADRADO ESQUERDA — MAIOR */}
            <div className="absolute left-[330px] top-[150px] w-[26px] h-[26px] bg-[#0B0B23]" />

            <div className="mt-14">
              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center gap-4
                  w-[240px] h-[56px]
                  rounded-[14px]
                  bg-[#0B0B23] text-white
                  font-semibold tracking-wide
                  transition-transform duration-200 ease-out
                  hover:scale-[1.03]
                  active:scale-[0.98]
                "
              >
                ASK A QUESTION
                <span className="text-xl leading-none">→</span>
              </Link>
            </div>
          </div>

          {/* DIREITA */}
          <div className="relative">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={item.q} className="border-b border-black/10 py-6">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-start justify-between gap-6 text-left"
                  >
                    <span className="text-[#0B0B23] font-bold text-[22px] leading-snug">
                      {item.q}
                    </span>
                    <span className="text-[#0B0B23] font-bold text-[24px] leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="mt-3 text-[#3D3D4A] text-[14px] leading-relaxed max-w-[520px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* QUADRADO DIREITA (inalterado) */}
            <div className="absolute left-[280px] bottom-[-40px] w-[18px] h-[18px] bg-[#0B0B23]" />
          </div>
        </div>
      </div>
    </section>
  );
}
