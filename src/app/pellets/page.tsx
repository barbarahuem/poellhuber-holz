import OrderSteps from "@/components/OrderSteps";
import ProductContainer from "@/components/products/ProductContainer";

import products from "@/data/pellets.json";

export default function Pellets() {
  return (
    <div className="flex flex-col gap-9">
      <p>
        Unsere hochwertigen Holzpellets sind die perfekte Wahl für effizientes
        und umweltfreundliches Heizen. Sie bestehen aus gepressten Holzspänen
        und bieten eine gleichbleibend hohe Brennleistung. Wir liefern Pellets
        in handlichen Einheiten oder großeren Mengen direkt zu Ihnen nach Hause.
      </p>
      <ProductContainer products={products} />
      <OrderSteps hasText={false} hasInfoSteps={true} />
    </div>
  );
}
