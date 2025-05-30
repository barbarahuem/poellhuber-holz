"use client";

import Image from "next/image";
import QuantitySelector from "@/components/QuantitySelect";
import ContactForm from "@/components/ContactForm";
import OrderSteps from "@/components/OrderSteps";
import { Product } from "@/types/product";
import { useState } from "react";

export default function ProductClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="grid gap-10">
      <div className="flex gap-5">
        <Image
          src={product.image}
          alt="Produktbild"
          width={300}
          height={300}
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
          <div className="flex flex-col gap-3">
            <p
              className="item-end"
              style={{ color: "grey", fontSize: "1.2rem" }}
            >
              {product.price} € je {product.unit}{" "}
              <span style={{ fontSize: "1rem" }}>exkl. Lieferkosten</span>
            </p>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
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
        <li>Lieferung: {product.deliveryType}</li>
      </ul>
      <div>
        <ContactForm product={product.name} quantity={quantity} />
      </div>
      <OrderSteps hasText={false} hasInfoSteps={true} />
    </div>
  );
}
