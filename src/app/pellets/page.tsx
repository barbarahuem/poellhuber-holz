import OrderSteps from "@/components/OrderSteps";
// import ProductContainer from "@/components/products/ProductContainer";

// import { products } from "@/data/pellets";

export default function Pellets() {
  return (
    <div className="flex flex-col gap-9">
      <p>
        Unsere hochwertigen Holzpellets sind die perfekte Wahl für effizientes
        und umweltfreundliches Heizen. Sie bestehen aus gepressten Holzspänen
        und bieten eine gleichbleibend hohe Brennleistung. Wir liefern Pellets
        in handlichen Einheiten oder größeren Mengen direkt zu Ihnen nach Hause.
      </p>

      <div className="flex flex-col gap-3 rounded-lg border border-blue-200 bg-blue-50 p-6 text-center">
        <p className="font-semibold">
          Gute Nachrichten! Wir nehmen in Kürze hochwertige Holzpellets in unser
          Sortiment auf. Derzeit bereiten wir alles für den Verkaufsstart vor.
        </p>
        <p>
          Haben Sie vorab Fragen oder möchten Sie Ihr Interesse bekunden?
          Kontaktieren Sie uns gerne – wir freuen uns auf Ihre Nachricht!
        </p>
      </div>

      {/* <ProductContainer products={products} /> */}
      <OrderSteps hasText={false} hasInfoSteps={true} />
    </div>
  );
}
