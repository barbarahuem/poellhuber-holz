"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="bg-secondary flex justify-end p-2 space-x-6">
        <p style={{ color: "white" }}>+43 650 9506002</p>
        <p style={{ color: "white" }}>poellhuber.holz@gmail.com</p>
      </div>
      <div className="flex items-center p-3">
        <Link href="/" className="flex items-center">
          <Image src="/wood.png" alt="Logo" width={35} height={35} />
        </Link>
        <div className="flex-1 flex justify-center space-x-7 text-font">
          <Link
            href="/"
            className={`hover:text-secondary ${pathname === '/' ? 'text-secondary' : ''}`}
          >
            Startseite
          </Link>
          <Link
            href="/brennholz"
            className={`hover:text-secondary ${pathname === '/brennholz' ? 'text-secondary' : ''}`}
          >
            Brennholz
          </Link>
          <Link
            href="/pellets"
            className={`hover:text-secondary ${pathname === '/pellets' ? 'text-secondary' : ''}`}
          >
            Pellets
          </Link>
          <Link
            href="/sonderbestellung"
            className={`hover:text-secondary ${pathname === '/sonderbestellung' ? 'text-secondary' : ''}`}
          >
            Sonderbestellung
          </Link>
          <Link
            href="/baggerungen"
            className={`hover:text-secondary ${pathname === '/baggerungen' ? 'text-secondary' : ''}`}
          >
            Baggerungen
          </Link>
          <Link
            href="/lieferung"
            className={`hover:text-secondary ${pathname === '/lieferung' ? 'text-secondary' : ''}`}
          >
            Lieferung
          </Link>
          <Link
            href="/kontakt"
            className={`hover:text-secondary ${pathname === '/kontakt' ? 'text-secondary' : ''}`}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}