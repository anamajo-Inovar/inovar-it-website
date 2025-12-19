import Link from "next/link";
import Image from "next/image";

export default function HeaderContact() {
  return (
    <header className="w-full bg-white py-5">
      <div className="w-full grid grid-cols-3 items-center px-6">
        {/* COLUNA 1 — LOGO */}
        <div className="justify-self-start">
          <Link href="/" aria-label="Go to home">
            <Image
              src="/logoinovar.png"
              alt="Inovar IT"
              width={150}
              height={55}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* COLUNA 2 — MENU */}
        <nav className="justify-self-center">
          <ul className="flex gap-10 text-sm font-semibold tracking-[0.20em] text-[#0B0B23]">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/services">SERVICES</Link>
            </li>
          </ul>
        </nav>

        {/* COLUNA 3 — VAZIA (mantém o alinhamento igual às outras páginas) */}
        <div />
      </div>
    </header>
  );
}
