import ProductCard from "./ProductCard";

export default function ProductContainer({ products }: { products?: any[] }) {
  return (
    <div className="grid gap-4 grid-cols-2">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      {products?.length === 0 && <p>Keine Produkte gefunden</p>}
    </div>
  );
}
