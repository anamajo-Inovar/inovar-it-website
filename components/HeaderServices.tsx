import Link from "next/link";
import Image from "next/image";

export default function HeaderServices() {
  return (
    <header className="w-full bg-white py-5">
      <div className="w-full grid grid-cols-3 items-center px-6">
        {/* COLUNA 1 – logo bem à esquerda (clicável -> home topo) */}
        <div className="justify-self-start">
          <Link href="/" aria-label="Go to Home">
            <Image
              src="/logoinovar.png"
              alt="Inovar IT"
              width={150}
              height={55}
              priority
            />
          </Link>
        </div>

        {/* COLUNA 2 – menu centralizado */}
        <nav className="justify-self-center">
          <ul className="flex gap-10 text-sm font-semibold tracking-[0.20em] text-[#0B0B23]">
            <li>
              <Link className="hover:opacity-80 transition-opacity" href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-80 transition-opacity"
                href="/about"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-80 transition-opacity"
                href="/contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* COLUNA 3 – vazia (pra ajudar a centralizar o menu) */}
        <div />
      </div>
    </header>
  );
}
