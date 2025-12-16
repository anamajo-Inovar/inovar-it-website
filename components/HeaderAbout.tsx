import Link from "next/link";
import Image from "next/image";

export default function HeaderAbout() {
  return (
    <header className="w-full bg-white py-5">
      <div className="w-full grid grid-cols-3 items-center px-6">
        {/* Logo clicável -> Home topo */}
        <div className="justify-self-start">
          <Link href="/" aria-label="Go to home">
            <Image src="/logoinovar.png" alt="Inovar IT" width={150} height={55} />
          </Link>
        </div>

        {/* Menu centralizado */}
        <nav className="justify-self-center">
          <ul className="flex gap-10 text-sm font-semibold tracking-[0.20em] text-[#0B0B23]">
            <li>
              <Link href="/" className="hover:opacity-80 transition">HOME</Link>
            </li>
            <li>
              <Link href="/services" className="hover:opacity-80 transition">SERVICES</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:opacity-80 transition">CONTACT</Link>
            </li>
          </ul>
        </nav>

        <div />
      </div>
    </header>
  );
}
