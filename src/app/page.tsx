import Image from "next/image";
import brennholzIMG from "../assets/brennholz.webp";
import pelletsIMG from "../assets/pellet.jpg";
import sonderIMG from "../assets/sonderholz.jpg";
import brennholzIcon from "../assets/brennholzIcon.png";
import pelletsIcon from "../assets/pelletsIcon.png";
import sonderholzIcon from "../assets/sonderholzIcon.png";

import OrderSteps from "@/components/OrderSteps";

import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-9">
      <div className="grid gap-2">
        <h1 className="text-secondary">
          Ihr Familienbetrieb für hochwertiges Brennholz aus heimischen Wäldern!
        </h1>
        <p>
          Wir liefern erstklassiges, nachhaltig gewonnenes Brennholz sowie
          Pellets und Sonderbestellungen direkt zu Ihnen nach Hause. Unser Holz
          stammt aus heimischen Wäldern und wird mit viel Liebe und Sorgfalt
          verarbeitet. Als Familienbetrieb legen wir großen Wert auf Qualität,
          Regionalität und faire Preise.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-cols-3">
        <div>
          <Image
            src={brennholzIcon}
            alt="Brennholz Icon"
            width={90}
            height={20}
            className="justify-center m-auto mb-2"
          />
          <h2>Brennholz</h2>
          <p>
            Lose geschüttetes oder auf Paletten geliefertes Buchenholz, Trocken
            oder frisch in verschiedenen Längen (25 cm, 33 cm, 50 cm, 1 m)
          </p>
        </div>
        <div>
          <Image
            src={pelletsIcon}
            alt="Pellets Icon"
            width={90}
            height={20}
            className="justify-center m-auto mb-2"
          />
          <h2>Pellets</h2>
          <p>
            Hochwertige Holzpellets für effizientes Heizen Lieferung in
            handlichen Einheiten
          </p>
        </div>
        <div>
          <Image
            src={sonderholzIcon}
            alt="Sonderholz Icon"
            width={90}
            height={20}
            className="justify-center m-auto mb-3"
          />
          <h2>Sonderbestellung</h2>
          <p>
            Verschiedene Holzsorten auf Anfrage Spezialmaße und individuelle
            Bestellungen möglich
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* Left column - full height image */}
        <Link
          href="/brennholz"
          className="hover:opacity-95 hover:scale-102 transition-transform duration-300"
        >
          <div className="relative h-20 md:h-50 lg:h-64">
            <div className="absolute inset-0 bg-black opacity-30 rounded-xl z-10"></div>
            <Image
              src={brennholzIMG}
              alt="Bild von Brennholz"
              className="rounded-xl shadow-lg h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <h3 className="uppercase" style={{ color: "white" }}>
                Brennholz
              </h3>
            </div>
          </div>
        </Link>

        {/* Right column - two images stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {/* Top image */}
          <Link
            href="/pellets"
            className="hover:opacity-95 hover:scale-102 transition-transform duration-300"
          >
            <div className="relative h-20 lg:h-30">
              <div className="absolute inset-0 bg-black opacity-30 rounded-xl z-10"></div>
              <Image
                src={pelletsIMG}
                alt="Bild von Pellets"
                className="rounded-xl shadow-lg h-full w-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="uppercase" style={{ color: "white" }}>
                  Pellets
                </h3>
              </div>
            </div>
          </Link>

          {/* Bottom image */}
          <Link
            href="/sonderbestellung"
            className="hover:opacity-95 hover:scale-102 transition-transform duration-300"
          >
            <div className="relative h-20 lg:h-30">
              <div className="absolute inset-0 bg-black opacity-30 rounded-xl z-10"></div>
              <Image
                src={sonderIMG}
                alt="Bild von Sonderholz"
                className="rounded-xl shadow-lg h-full w-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <h3 className="uppercase" style={{ color: "white" }}>
                  Sonderbestellung
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <h2>Baggerungen & Forstdienst</h2>
        <p>
          Wir erledigen auch Erdarbeiten, Böschungspflege und Forsteinsätze rund
          ums Haus und im Wald. Einfach telefonisch anfragen!
        </p>
      </div>

      <OrderSteps hasText={true} />

      <div className="grid gap-4 text-center">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LocalShippingOutlinedIcon color="secondary" sx={{ fontSize: 80 }} />
        </div>
        <h2>Unser Versand – fair und transparent</h2>
        <p>
          Ihr Holz wird entweder auf Paletten oder lose geschüttet mit LKW oder
          Anhänger geliefert. <br />
          Unsere{" "}
          <Link
            href="/lieferung"
            style={{ color: "#ad9068", textDecoration: "underline" }}
          >
            Videos und Bilder
          </Link>{" "}
          zeigen Ihnen, wie die Lieferung abläuft und welche Verpackungsoptionen
          zur Verfügung stehen. <br />
          Weitere Informationen zu Lieferung können hier entnommen werden.
        </p>
      </div>
    </div>
  );
}
