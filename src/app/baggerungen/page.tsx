import Gallery from "@/components/Gallery";
import pflege1 from "@/assets/pflege/pflege-1.jpeg";
import pflege2 from "@/assets/pflege/pflege-2.jpeg";
import pflege3 from "@/assets/pflege/pflege-3.jpeg";
import pflege4 from "@/assets/pflege/pflege-4.jpeg";
import pflege5 from "@/assets/pflege/pflege-5.jpeg";
import pflege6 from "@/assets/pflege/pflege-6.jpeg";

import pflegeVorher from "@/assets/pflege/pflege-vorher.jpeg";
import pflegeNachher from "@/assets/pflege/pflege-nachher.jpeg";

export default function Baggerungen() {
  const imageList1 = [pflege1, pflege2, pflege3, pflege4, pflege5, pflege6];

  const imageList2 = [pflegeVorher, pflegeNachher];

  return (
    <div className="flex flex-col gap-12">
      <div>
        <p>
          Neben unserem Brennholzverkauf bieten wir auch Bagger- und
          Forstdienstleistungen an. Ob im Garten, rund ums Haus oder im Wald.
          Wir unterstützen schnell und zuverlässig!
        </p>
        <p className="mt-5">
          Einfach telefonisch unter +436509506002 anfragen.
        </p>
      </div>
      <div>
        <h3 className="text-left">Unsere Leistungen:</h3>
        <ul className="list-disc text-left ml-3">
          <li>Böschungspflege</li>
          <li>Straßenerhaltung</li>
          <li>Biomasseernte und -räumung</li>
          <li>Mulcharbeiten</li>
        </ul>
      </div>
      <Gallery imageList={imageList1} />
      <Gallery
        imageList={imageList2}
        title="Vorher/Nachher - Böschungspflege"
      />
    </div>
  );
}
