import baggerungIMG from "@/assets/IMG_2778 2.webp";
import Image from "next/image";

export default function Baggerungen() {
  return (
    <div className="flex flex-col gap-5">
      <p>
        Neben unserem Brennholzverkauf bieten wir auch Bagger- und
        Forstdienstleistungen an. Ob im Garten, rund ums Haus oder im Wald — wir
        unterstützen schnell und zuverlässig.
      </p>
      <p>Einfach telefonisch unter +436509506002 anfragen.</p>
      <div>
        <h3 className="text-left">Unsere Leistungen:</h3>
        <ul className="list-disc text-left ml-3">
          <li>Böschungspflege</li>
          <li>Straßenerhaltung</li>
          <li>Biomasseernte und -räumung</li>
          <li>Mulcharbeiten</li>
        </ul>
      </div>
      <Image
        src={baggerungIMG}
        alt="Pöllhuber Baggerung"
        width={1200}
        height={600}
        className="rounded-2xl mx-auto mb-6 w-full max-w-5xl h-[300px] object-cover shadow-lg"
      />
    </div>
  );
}
