import Image from "next/image";
import homeIMG from "../assets/homeIMG.png";
import brennholzIMG from "../assets/brennholz.png";
import pelletsIMG from "../assets/brennholz.png";
import sonderIMG from "../assets/brennholz.png";

import OrderSteps from "@/components/OrderSteps";
import HeaderImg from "@/components/HeaderImg";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeaderImg img={homeIMG} hasLogo={true} height={40}/>
      <main className="flex flex-col items-center m-auto text-center justify-center gap-9 p-6 max-w-3xl">
        <div className="grid gap-2">
          <h1 className="text-secondary">
            Ihr Familienbetrieb für hochwertiges Brennholz aus heimischen
            Wäldern!
          </h1>
          <p>
            Wir liefern erstklassiges, nachhaltig gewonnenes Brennholz sowie
            Pellets und Sonderbestellungen direkt zu Ihnen nach Hause. Unser
            Holz stammt aus heimischen Wäldern und wird mit viel Liebe und
            Sorgfalt verarbeitet. Als Familienbetrieb legen wir großen Wert auf
            Qualität, Regionalität und faire Preise.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-cols-3">
          <div>
            <h2>Brennholz</h2>
            <p>
              Lose geschüttetes oder auf Paletten geliefertes Buchenholz,
              Trocken oder frisch in verschiedenen Längen (25 cm, 33 cm, 50 cm,
              1 m)
            </p>
          </div>
          <div>
            <h2>Pellets</h2>
            <p>
              Hochwertige Holzpellets für effizientes Heizen Lieferung in
              handlichen Einheiten
            </p>
          </div>
          <div>
            <h2>
              Sonderbestellung
            </h2>
            <p>
              Verschiedene Holzsorten auf Anfrage Spezialmaße und individuelle
              Bestellungen möglich
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {/* Left column - full height image */}
          <Link href="/brennholz" className="hover:opacity-95 hover:scale-102 transition-transform duration-300">
            <div className="relative h-20 md:h-50 lg:h-64">
              <div className="absolute inset-0 bg-black opacity-30 rounded-xl z-10"></div>
              <Image
                src={brennholzIMG}
                alt="Brennholz"
                className="rounded-xl shadow-lg h-full w-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3
                  className="uppercase"
                  style={{ color: "white" }}
                >
                  Brennholz
                </h3>
              </div>
            </div>
          </Link>

          {/* Right column - two images stacked */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">

            {/* Top image */}
            <Link href="/pellets" className="hover:opacity-95 hover:scale-102 transition-transform duration-300">
              <div className="relative h-20 lg:h-30">
                <div className="absolute inset-0 bg-black opacity-30 rounded-xl z-10"></div>
                <Image
                  src={pelletsIMG}
                  alt="Pellets"
                  className="rounded-xl shadow-lg h-full w-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <h3
                    className="uppercase"
                    style={{ color: "white" }}
                  >
                    Pellets
                  </h3>
                </div>
              </div>
            </Link>

            {/* Bottom image */}
            <Link href="/sonderbestellung" className="hover:opacity-95 hover:scale-102 transition-transform duration-300">
              <div className="relative h-20 lg:h-30">
                <div className="absolute inset-0 bg-black opacity-30 rounded-xl z-10"></div>
                <Image
                  src={sonderIMG}
                  alt="Sonderholz"
                  className="rounded-xl shadow-lg h-full w-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <h3
                    className="uppercase"
                    style={{ color: "white" }}
                  >
                    Sonderholz
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <OrderSteps />

        <div className="grid gap-4 text-center">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LocalShippingOutlinedIcon color="secondary" sx={{ fontSize: 80 }} />
          </div>
          <h2>
            Unser Versand – fair und transparent
          </h2>
          <p>
            Ihr Holz wird entweder auf Paletten oder lose geschüttet mit LKW oder Anhänger geliefert. <br />
            Unsere <Link href='/lieferung' style={{ color: "#ad9068", textDecoration: 'underline' }}>Videos und Bilder</Link> zeigen Ihnen, wie die Lieferung abläuft und welche Verpackungsoptionen zur Verfügung stehen. <br />
            Weitere Informationen zu Lieferung können hier entnommen werden.
          </p>
        </div>
        
      </main>
    </div>
  );
}
