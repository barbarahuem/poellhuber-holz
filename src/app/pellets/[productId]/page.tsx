import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/pellets";
import QuantitySelector from "@/components/QuantitySelect";
import ContactForm from "@/components/ContactForm";
import OrderSteps from "@/components/OrderSteps";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = products.find((p) => p.id === Number(params.productId));

  if (!product) return notFound();

  return (
    <div className="grid gap-10">
      <div className="flex gap-5">
        <Image
          src={product.image}
          alt="Produktbild"
          width={300}
          height={30}
          className="rounded-xl"
        />
        <div
          style={{ textAlign: "left" }}
          className="flex flex-col justify-between"
        >
          <div>
            <h1>{product.name}</h1>
            <p>Hochwertige Holzpellets für effizientes Heizen</p>
          </div>
          <div>
            <p
              className="item-end"
              style={{ color: "grey", fontSize: "1.2rem" }}
            >
              {product.price} € je {product.unit}
            </p>
            <QuantitySelector />
          </div>
        </div>
      </div>
      <ul className="list-disc text-left ml-3">
        <li>Pelletart: Hochwertige Holzpellets – effizient</li>
        <li>
          Format: Genormte Größe, passend für alle gängigen Pelletöfen und
          Heizsysteme
        </li>
        <li>Trocknung: Technisch getrocknet für optimalen Heizwert</li>
        <li>Lieferung: Lose im Silowagen oder sauber abgepackt auf Paletten</li>
      </ul>
      <div>
        <ContactForm />
      </div>
      <OrderSteps hasText={false} hasInfoSteps={true} />
    </div>
  );
}
