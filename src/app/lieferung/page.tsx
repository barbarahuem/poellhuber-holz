import lieferungImg from "@/assets/lieferung/IMG_3629.webp";
import produktionImg from "@/assets/IMG_0987.webp";
import holzImg from "@/assets/IMG_8410 2.webp";
import lieferungImg1 from "@/assets/lieferung/palette-lieferung-1.jpeg";
import lieferungImg2 from "@/assets/lieferung/palette-lieferung-2.jpeg";
import lieferungImg3 from "@/assets/lieferung/palette-lieferung-3.jpeg";
import lieferungImg4 from "@/assets/lieferung/palette-lieferung-4.jpeg";
import OrderSteps from "@/components/OrderSteps";
import Gallery from "@/components/Gallery";

export default function Lieferung() {
  
  const imageList = [
    lieferungImg,
    produktionImg,
    holzImg,
    lieferungImg1,
    lieferungImg2,
    lieferungImg3,
    lieferungImg4,
  ];

  return (
    <div className="flex flex-col gap-9">
      <h1>So funktioniert unsere Lieferung</h1>
      <p>
        Ihr Holz wird entweder auf Paletten oder lose geschüttet mit LKW oder
        Anhänger geliefert. Unsere Videos und Bilder zeigen Ihnen, wie die
        Lieferung abläuft und welche Verpackungsoptionen zur Verfügung stehen.
      </p>

      <div className="flex flex-col gap-5">
        <h2>Unser Versand fair & transparent</h2>
        <div>
          <h3 className="text-left">Lieferzonen & Berechnung</h3>
          <ul className="list-disc text-left ml-3">
            <li>
              Die Versandkosten richten sich nach Ihrer Postleitzahl oder können
              alternativ über eine Google-Maps-Entfernungsmessung nach
              Kilometern berechnet werden.
            </li>
            <li>
              Unsere Lieferzonen sind in 25-km-Schritten eingeteilt. Je nach
              Entfernung variiert der Preis.
            </li>
            <li>
              Ab 8 Raummeter (RM) oder 10 Schüttraummeter (SRM) liefern wir
              innerhalb unserer definierten Zonen kostenlos.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-left">
            Kostenfreie Lieferung bei Nachbarschaftsbestellungen
          </h3>
          <ul className="list-disc text-left ml-3">
            <li>
              Falls in Ihrer Nachbarschaft mehrere Personen Brennholz benötigen,
              können Sie eine Sammelbestellung aufgeben.
            </li>
            <li>
              Beispiel: Haus 1 bestellt 5 SRM, Haus 2 bestellt 5 SRM – zusammen
              erreichen sie 10 SRM und profitieren von der kostenlosen
              Lieferung.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-left">Lieferzeiten & Terminabsprache</h3>
          <ul className="list-disc text-left ml-3">
            <li>
              Wir stimmen den Liefertermin individuell mit Ihnen ab, damit Sie
              Ihr Holz bequem in Empfang nehmen können.
            </li>
            <li>
              Die Lieferzeit hängt von der aktuellen Auftragslage und Saison ab
              – in der Hauptsaison können Lieferzeiten etwas länger sein.
            </li>
            <li>
              Bei kurzfristigen Bestellungen versuchen wir, eine schnelle
              Lieferung zu ermöglichen.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-left">Lieferarten & Verpackung</h3>
          <ul className="list-disc text-left ml-3">
            <li>Wir liefern mit unserem LKW oder Anhänger.</li>
            <li>
              Das Holz kann lose geschüttet oder auf Paletten verpackt geliefert
              werden – je nach Wunsch und Platzverhältnissen.
            </li>
            <li>
              Videos und Bilder auf unserer Website zeigen Ihnen, wie die
              Lieferung abläuft.
            </li>
          </ul>
        </div>
      </div>

      <Gallery imageList={imageList} />

      <OrderSteps hasText={false} hasInfoSteps={false} />
    </div>
  );
}
