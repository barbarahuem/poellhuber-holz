import {
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product?: any }) {
  return (
    <Link
      href={`/${product.category}/${product.id}`}
      className="hover:opacity-95 hover:scale-102 transition-transform duration-300"
    >
      <Card
        sx={{
          maxWidth: 345,
          maxHeight: 200,
          borderRadius: "1rem",
          boxShadow: "1px 3px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="relative h-20 md:h-20 lg:h-30">
          <Image
            src={product.image}
            alt={product.name}
            width={345}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>
        <CardContent>
          <p
            style={{ textAlign: "left", fontSize: "1rem", fontWeight: "bold" }}
          >
            {product.name}, {product.length}
          </p>
          <p style={{ textAlign: "left", color: "grey" }}>
            {product.price} € je {product.unit}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
