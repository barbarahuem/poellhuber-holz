"use client";

import { ThemeProvider } from "@emotion/react";
import AppTheme from "./appTheme";
import HeaderImg from "@/components/HeaderImg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import homeIMG from "../assets/homeIMG.png";
import brennholzIMG from "../assets/brennholz.png";
import pelletsIMG from "../assets/brennholz.png";
import sonderIMG from "../assets/brennholz.png";
import { usePathname } from "next/navigation";
import QuestionAccordion from "@/components/QuestionAccordion";

export function Wrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <ThemeProvider theme={AppTheme}>
      <Navbar />
      {pathname === "/" ? (
        <HeaderImg img={homeIMG} hasLogo={true} height={40} />
      ) : pathname.includes("brennholz") ? (
        <HeaderImg
          img={brennholzIMG}
          hasLogo={false}
          content="Brennholz"
          height={13}
        />
      ) : pathname.includes("pellets") ? (
        <HeaderImg
          img={pelletsIMG}
          hasLogo={false}
          content="Pellets"
          height={13}
        />
      ) : pathname === "/sonderbestellung" ? (
        <HeaderImg
          img={sonderIMG}
          hasLogo={false}
          content="Sonderbestellung"
          height={13}
        />
      ) : pathname === "/baggerungen" ? (
        <HeaderImg
          img={brennholzIMG}
          hasLogo={false}
          content="Baggerungen"
          height={13}
        />
      ) : pathname === "/lieferung" ? (
        <HeaderImg
          img={brennholzIMG}
          hasLogo={false}
          content="Lieferung"
          height={13}
        />
      ) : pathname === "/kontakt" ? (
        <HeaderImg
          img={brennholzIMG}
          hasLogo={false}
          content="Kontakt"
          height={13}
        />
      ) : null}
      {children}
      <hr
        className="m-auto mb-10 mt-10 justify-center max-w-3xl"
        style={{
          borderColor: "var(--color-stroke-light)",
          borderWidth: "1px",
        }}
      />
      <h3 className="text-center">Häufige Fragen</h3>
      <div className="m-auto mt-5 justify-center max-w-3xl">
        <QuestionAccordion />
      </div>
      <Footer />
    </ThemeProvider>
  );
}
