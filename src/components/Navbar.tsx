"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "/", label: "Startseite" },
    { href: "/brennholz", label: "Brennholz" },
    { href: "/pellets", label: "Pellets" },
    { href: "/sonderbestellung", label: "Sonderbestellung" },
    { href: "/baggerungen", label: "Baggerungen" },
    { href: "/lieferung", label: "Lieferung" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav>
      <div className="bg-secondary flex justify-end p-3 space-x-6 text-sm hidden md:flex">
        <p style={{ color: "white" }}>+43 650 9506002</p>
        <p style={{ color: "white" }}>poellhuber.holz@gmail.com</p>
      </div>

      <div className="flex items-center justify-between p-3 h-16">
        <Link href="/" className="flex items-center">
          <Image
            src={pathname === "/" ? "/wood.png" : "/logo.png"}
            alt="Logo"
            width={pathname === "/" ? 35 : 70}
            height={35}
          />
        </Link>

        <div className="hidden md:flex flex-1 justify-center space-x-7 text-font">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href || pathname.includes(link.href)
                  ? "text-secondary"
                  : "hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white p-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`${
                pathname === link.href || pathname.includes(link.href)
                  ? "text-secondary"
                  : "hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
