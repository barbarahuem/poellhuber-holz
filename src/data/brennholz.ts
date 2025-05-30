import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    image: "/brennholz.png",
    name: "Buche",
    price: "118",
    unit: "SRM",
    length: "25 cm",
    category: "brennholz",
    deliveryType: "auf Paletten (lose im Netz)",
  },
  {
    id: 2,
    image: "/brennholz.png",
    name: "Buche",
    price: "110",
    unit: "SRM",
    length: "33 cm",
    category: "brennholz",
    deliveryType: "auf Paletten (lose im Netz)",
  },
  {
    id: 3,
    image: "/brennholz.png",
    name: "Buche",
    price: "152",
    unit: "RM",
    length: "50 cm",
    category: "brennholz",
    deliveryType: "lose geschüttet",
  },
  {
    id: 4,
    image: "/brennholz.png",
    name: "Buche",
    price: "148",
    unit: "RM",
    length: "1 m",
    category: "brennholz",
    deliveryType: "lose geschüttet",
  }, // 3 RM min - maximum egal 10

  {
    id: 5,
    image: "/brennholz.png",
    name: "Buche",
    price: "118",
    unit: "SRM",
    length: "25 cm",
    category: "brennholz",
    deliveryType: "lose geschüttet",
  },
  {
    id: 6,
    image: "/brennholz.png",
    name: "Buche",
    price: "110",
    unit: "SRM",
    length: "33 cm",
    category: "brennholz",
    deliveryType: "lose geschüttet",
  },

  // 3 SRM mind, maximum egal, pro Meter alles möglich, 33cm, 25cm
  //
];
