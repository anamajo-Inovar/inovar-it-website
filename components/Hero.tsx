"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-40 bg-white">
      {/* Curvas de fundo */}
      <div className="pointer-events-none absolute inset-x-0 top-[-120px] z-0 flex justify-center">
        <Image
          src="/Vectorcurvas.png"
          alt="Decorative curves"
          width={2000}
          height={700}
          className="opacity-70 max-w-none"
          priority
        />
      </div>

      {/* QUADRADO MÉDIO */}
      <motion.div
        className="absolute top-[150px] left-[140px] z-10"
        initial={{ opacity: 0, scale: 0.92, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <Image
          src="/VectorquadradoM.png"
          alt="Medium decorative square"
          width={65}
          height={61}
        />
      </motion.div>

      {/* QUADRADO PEQUENO */}
      <motion.div
        className="absolute top-[80px] right-[230px] z-10"
        initial={{ opacity: 0, scale: 0.92, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
      >
        <Image
          src="/VectorquadradoP.png"
          alt="Small decorative square"
          width={33}
          height={32}
        />
      </motion.div>

      {/* QUADRADO GRANDE */}
      <motion.div
        className="absolute top-[420px] right-[200px] z-10"
        initial={{ opacity: 0, scale: 0.92, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      >
        <Image
          src="/VectorquadradoG.png"
          alt="Large decorative square"
          width={153}
          height={119}
        />
      </motion.div>

      {/* Conteúdo central */}
      <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center px-4 text-center">
        <Reveal delay={0.05} y={22}>
          <Image
            src="/TitleHERO.png"
            alt="YOUR BEST IT PARTNERS"
            width={900}
            height={250}
            className="w-full max-w-4xl h-auto"
            priority
          />
        </Reveal>

        <Reveal delay={0.18} y={18}>
          <p className="text-[#4A4A5A] max-w-2xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
            From custom software development to cybersecurity, our team of experts
            is dedicated to delivering solutions that are tailored to your unique needs.
          </p>
        </Reveal>

        <Reveal delay={0.28} y={16}>
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="
                mt-10 px-10 py-4
                bg-[#0B0B23] text-white
                font-semibold text-sm tracking-[0.2em]
                rounded-xl
                flex items-center gap-5
                shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                hover:bg-[#111133]
                transition-colors
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
                <path d="M0 6H22" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M16 1L22 6L16 11"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
