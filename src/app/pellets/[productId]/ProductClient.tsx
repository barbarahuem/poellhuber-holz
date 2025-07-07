"use client";

import Image from "next/image";
import QuantitySelector from "@/components/QuantitySelect";
import ContactForm from "@/components/ContactForm";
import OrderSteps from "@/components/OrderSteps";
import { Product } from "@/types/product";
import { useState } from "react";

export default function ProductClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState<number>(product.quantityOptions![0]);

  return (
    <div className="grid gap-10">
      <div className="flex flex-col md:flex-row gap-5">
        <Image
          src={product.image}
          alt="Produktbild"
          width={300}
          height={300}
          className="rounded-xl"
        />
        <div
          style={{ textAlign: "left" }}
          className="flex flex-1 flex-col justify-between"
        >
          <div>
            <h1>{product.name}</h1>
            <p>Hochwertige Holzpellets für effizientes Heizen</p>
          </div>
          <div className="flex flex-col">
            <p
              style={{ color: "grey", fontSize: "1.3rem" }}
              className="mt-5 md:mt-0"
            >
              {(Number(product.price) * quantity).toFixed(2).replace(".", ",")}{" "}
              € <span style={{ fontSize: "1rem" }}>Gesamt</span>
            </p>
            <p
              className="item-end mb-3"
              style={{ color: "grey", fontSize: "0.7rem" }}
            >
              {product.price} € je {product.unit} exkl. Lieferkosten
            </p>
            <QuantitySelector
              quantity={quantity}
              setQuantity={setQuantity}
              quantityOptions={product.quantityOptions!}
            />
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
        <ContactForm product={product.name} quantity={quantity} deliveryType={product.deliveryType}
          price={(Number(product.price) * quantity)
            .toFixed(2)
            .replace(".", ",")} />
      </div>
      <OrderSteps hasText={false} hasInfoSteps={true} />
    </div>
  );
}
