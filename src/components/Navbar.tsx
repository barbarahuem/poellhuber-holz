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
      <div className="flex items-center p-3 h-15">
        <Link href="/" className="flex items-center absolute left-5">
          {
            pathname === "/" ? (<Image src="/wood.png" alt="Logo" width={35} height={35}/>) 
            : 
            (
              <Image src="/logo.png" alt="Logo" width={70} height={35}/>
            )
          }
        </Link>
        <div className="flex-1 flex justify-center space-x-7 text-font">
          <Link
            href="/"
            className={`${pathname === "/" ? "text-secondary" : "hover:text-primary "}`}
          >
            Startseite
          </Link>
          <Link
            href="/brennholz"
            className={`${pathname.includes("brennholz") ? "text-secondary" : "hover:text-primary "}`}
          >
            Brennholz
          </Link>
          <Link
            href="/pellets"
            className={`${pathname.includes("pellets") ? "text-secondary" : "hover:text-primary "}`}
          >
            Pellets
          </Link>
          <Link
            href="/sonderbestellung"
            className={`${pathname === "/sonderbestellung" ? "text-secondary" : "hover:text-primary "}`}
          >
            Sonderbestellung
          </Link>
          <Link
            href="/baggerungen"
            className={`${pathname === "/baggerungen" ? "text-secondary" : "hover:text-primary "}`}
          >
            Baggerungen
          </Link>
          <Link
            href="/lieferung"
            className={`hover:text-secondary ${pathname === "/lieferung" ? "text-secondary" : ""}`}
          >
            Lieferung
          </Link>
          <Link
            href="/kontakt"
            className={`hover:text-secondary ${pathname === "/kontakt" ? "text-secondary" : ""}`}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}
