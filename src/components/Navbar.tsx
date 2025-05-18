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
      {/* Top Bar */}
      <div className="bg-secondary flex justify-end p-3 space-x-6 text-sm hidden md:flex">
        <p style={{ color: "white" }}>+43 650 9506002</p>
        <p style={{ color: "white" }}>poellhuber.holz@gmail.com</p>
      </div>

      {/* Navbar */}
      <div className="relative h-16 flex items-center justify-center">
        {/* Logo - absolute, kein Einfluss auf Layout */}
        <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2">
          <Image
            src={pathname === "/" ? "/wood.png" : "/logo.png"}
            alt="Logo"
            width={pathname === "/" ? 35 : 70}
            height={35}
          />
        </Link>

        {/* Navigation Links - zentriert */}
        <div className="hidden md:flex space-x-7 text-font">
          {navLinks.map((link) => {
            // Active, wenn exact match oder (für Unterseiten) includes, außer Startseite ("/")
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

        {/* Hamburger Menu */}
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white p-4 space-y-4 shadow-lg">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`${isActive ? "text-secondary" : "hover:text-primary"}`}
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
