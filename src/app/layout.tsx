import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import QuestionAccordion from "@/components/questionsAccordion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pöllhuber Brennholz",
  description: "Familienbetrieb für Brennholz und Pellets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Navbar />
          {children}
          <hr
            className="m-auto mb-10 mt-10 justify-center max-w-3xl"
            style={{ borderColor: "var(--color-stroke-light)", borderWidth: "1px" }}
          />
          <h3 className="text-center">Häufige Fragen</h3>
          <div className="m-auto mt-5 justify-center max-w-3xl">
            <QuestionAccordion />
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}