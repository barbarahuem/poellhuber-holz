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
    <nav className="relative">
      <div className="bg-secondary flex justify-end p-3 space-x-6 text-sm hidden md:flex">
        <p style={{ color: "white" }}>+43 650 9506002</p>
        <p style={{ color: "white" }}>poellhuber.holz@gmail.com</p>
      </div>

      <div className="relative h-16 flex items-center justify-center">
        <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2">
          <Image src="/logo.png" alt="Logo" width={70} height={35} />
        </Link>

        <div className="max-[850px]:hidden flex space-x-7 text-font">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive ? "text-secondary" : "hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 max-[850px]:block hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <CloseIcon fontSize="large" className="cursor-pointer" />
            ) : (
              <MenuIcon fontSize="large" className="cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col bg-white p-4 space-y-4 shadow-lg max-[850px]:flex hidden ">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`${
                  isActive ? "text-secondary" : "hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
