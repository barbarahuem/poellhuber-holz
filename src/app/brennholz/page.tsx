import OrderSteps from "@/components/OrderSteps";
import ProductContainer from "@/components/products/ProductContainer";
import { products } from "@/data/brennholz";

export default function Brennholz() {
  return (
    <div className="flex flex-col gap-9">
      <p>
        Unser Brennholz ist ideal für Kamin- und Holzofenbesitzer, die Wert auf
        eine hohe Heizleistung legen. Wir bieten trockenes oder frisches
        Buchenholz in verschiedenen Längen (25 cm, 33 cm, 50 cm, 1 m) an. Je
        nach Bedarf liefern wir das Holz lose geschüttet oder ordentlich auf
        Paletten verpackt.
      </p>
      <ProductContainer products={products} />
      <OrderSteps hasText={false} hasInfoSteps={true} />
    </div>
  );
}
