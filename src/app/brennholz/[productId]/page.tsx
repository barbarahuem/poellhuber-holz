import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/brennholz";
import ContactForm from "@/components/ContactForm";
import QuantitySelector from "@/components/QuantitySelect";
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
            <h1>
              {product.name}, {product.length}
            </h1>
            <p>Hochwertiges Brennholz {product.length} mit Länge</p>
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
        <li>
          Holzart: Buche – bekannt für langanhaltende Glut & hohe Wärmeabgabe
        </li>
        <li>Länge: {product.length} – passend für die meisten Kamine & Öfen</li>
        <li>Trocknung: Luftgetrocknet oder frisch erhältlich</li>
        <li>Lieferung: Lose geschüttet oder sauber auf Paletten gestapelt</li>
      </ul>
      <div>
        <ContactForm />
      </div>
      <OrderSteps hasText={false} hasInfoSteps={true} />
    </div>
  );
}
