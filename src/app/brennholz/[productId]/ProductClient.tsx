"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import QuantitySelector from "@/components/QuantitySelect";
import OrderSteps from "@/components/OrderSteps";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function ProductPage({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState<number>(product.quantityOptions![0]);

  useEffect(() => {
    console.log(
      quantity ? `Aktuelle Menge: ${quantity}` : "Keine Menge ausgewählt",
    );
  }, [quantity]);

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
          className="flex flex-col justify-between"
          style={{ textAlign: "left" }}
        >
          <div>
            <h1>
              {product.name}, {product.length}
            </h1>
            <p>Hochwertiges Brennholz {product.length} mit Länge</p>
            <p>{product.deliveryType}</p>
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
        <li>
          Holzart: Buche – bekannt für langanhaltende Glut & hohe Wärmeabgabe
        </li>
        <li>Länge: {product.length} – passend für die meisten Kamine & Öfen</li>
        <li>Trocknung: getrocknet unter 20% Feuchtigkeit</li>
        <li>Lieferung: {product.deliveryType}</li>
      </ul>
      <div>
        <ContactForm
          product={product.name + ", " + product.length}
          quantity={quantity}
          deliveryType={product.deliveryType}
          price={(Number(product.price) * quantity)
            .toFixed(2)
            .replace(".", ",")}
        />
      </div>
      <OrderSteps hasText={false} hasInfoSteps={true} />
    </div>
  );
}
