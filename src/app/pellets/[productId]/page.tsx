import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";
import { products } from "@/data/pellets";

type Params = Promise<{ productId: string }>;

export default async function ProductPage({ params }: { params: Params }) {
  const { productId } = await params;

  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}
