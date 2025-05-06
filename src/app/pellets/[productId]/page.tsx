import { notFound } from "next/navigation";
import products from "@/data/pellets.json";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = products.find((p) => p.id === Number(params.productId));

  if (!product) return notFound();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>
        {product.price} € je {product.unit}
      </p>
    </div>
  );
}
