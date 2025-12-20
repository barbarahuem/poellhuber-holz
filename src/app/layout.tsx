import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Wrapper } from "./wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pöllhuber Holz",
  description: "Familienbetrieb für Brennholz, Pellets und Baggerungen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable}`}>
        <Wrapper>
          <main className="flex flex-col items-center m-auto text-center justify-center p-10 pb-24 max-w-4xl">
            {children}
          </main>
        </Wrapper>
      </body>
    </html>
  );
}
