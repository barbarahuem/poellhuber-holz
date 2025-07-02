import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 5,
    image: "/pellet.jpg",
    name: "Pellets",
    price: "-",
    unit: "kg",
    length: "",
    category: "pellets",
    deliveryType: "auf Paletten",
    quantityOptions: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 6,
    image: "/pellets.png",
    name: "Pellets",
    price: "-",
    unit: "kg",
    length: "",
    category: "pellets",
    deliveryType: "in 15 kg Säcken",
    quantityOptions: [1, 2, 3, 4, 5, 6],
  },
];
