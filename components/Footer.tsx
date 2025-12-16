import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#070B2A] text-white pt-20 pb-10 px-6">
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* Coluna 1 – Logo + LinkedIn */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Inovar IT</h3>

          <div className="mt-6">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="inline-flex items-center"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={50}
                height={36}
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>
        </div>

        {/* Coluna 2 – Explore */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>

          <ul className="space-y-3 text-white/80 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3 – Newsletter */}
        <div className="max-w-[420px]">
          <h4 className="text-lg font-semibold mb-4">
            Newsletter
          </h4>

          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Subscribe to our newsletter to stay informed about our latest products,
            services, and promotions. Feel free to unsubscribe anytime!
          </p>

          {/* Input + botão */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Your Email Address ..."
              className="
                w-full
                bg-transparent
                border
                border-white/40
                rounded-xl
                px-5
                py-4
                pr-16
                text-white
                placeholder-white/50
                focus:outline-none
                focus:border-white
              "
            />

            {/* Botão seta */}
            <button
              type="submit"
              className="
                absolute
                right-4
                top-1/2
                -translate-y-1/2
                text-white
                transition-transform
                duration-200
                hover:translate-x-1
              "
              aria-label="Subscribe"
            >
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="mt-16 text-center text-white/60 text-sm">
        © 2025 Inovar IT — All Rights Reserved.
      </div>
    </footer>
  );
}
