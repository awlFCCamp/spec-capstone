type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Butter Croissant",
    desc: "The softest and creamiest croissant in the world",
    img: "/temporary/p1.png",
    price: 3.99,
  },
  {
    id: 2,
    title: "Frost Cupcakes",
    desc: "A dozen of daily freshly made frost cupcakes",
    img: "/temporary/p2.png",
    price: 11.99,
  },
  {
    id: 3,
    title: "Bagle",
    desc: "A dense, chewy bagle will light up your morning",
    img: "/temporary/p3.png",
    price: 2.99,
  },
  {
    id: 4,
    title: "Bagle trio",
    desc: "Order 3 sesame bagles to share with your family",
    img: "/temporary/p4.png",
    price: 9.99,
  },
  {
    id: 5,
    title: "Blueberry Muffins",
    desc: "Delicious, to die for blueberry muffins trio",
    img: "/temporary/p5.png",
    price: 9.99,
  },
  {
    id: 6,
    title: "Earl Grey Tea",
    desc: "An English classic, that gives you an unique taste ",
    img: "/temporary/p6.png",
    price: 4.99,
  },
  {
    id: 7,
    title: "Chai Tea",
    desc: "Enjoy a cup of tea with aromatic herbs abd spices.",
    img: "/temporary/p7.png",
    price: 4.99,
  },
  {
    id: 8,
    title: "Pumpkin Spice Latte",
    desc: "A fall delight will give you the warmth fall feeling",
    img: "/temporary/p8.png",
    price: 6.99,
  },
  {
    id: 9,
    title: "Dark Roast Coffee",
    desc: "A strong wake up for your morning.",
    img: "/temporary/p9.png",
    price: 5.99,
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "Croissant",
    desc: "Soft creamy croissant.",
    img: "/temporary/p1.png",
    price: 2.99,
  },
  {
    id: 2,
    title: "Latte",
    desc: "Fall pumpkin spice latte .",
    img: "/temporary/p8.png",
    price: 6.99,
  },
  {
    id: 3,
    title: "Sesame Bagle",
    desc: "A sesame bagle.",
    img: "/temporary/p3.png",
    price: 2.99,
  },
  {
    id: 4,
    title: "A dozen Croissant",
    desc: "A dozen croissant.",
    img: "/temporary/p10.png",
    price: 12.99,
  },
  {
    id: 5,
    title: "Macarons and green tea",
    desc: "Macarons with a cup of green tea.",
    img: "/temporary/p11.png",
    price: 12.99,
  },
  {
    id: 6,
    title: "Oolong tea",
    desc: "The best oolong tea in the world",
    img: "/temporary/p12.png",
    price: 5.99,
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Croissant",
  desc: "A soft and creamy butterish croissant",
  img: "/temporary/p1.png",
  price: 2.99,
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "coffee",
    title: "coffee",
    desc: "Earthy aroma of freshly ground coffee beans promises a haven of warmth, order yours now and embrace our well-brewed morning delight",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "tea",
    title: "tea",
    desc: "Sipping on a delicate cup of tea is like taking a fragrant journey through a tranquil garden, with each sip delivering a soothing and aromatic experience.",
    img: "/temporary/m2.png",
    color: "white",
  },
  {
    id: 3,
    slug: "pastry",
    title: "pastry",
    desc: "At our store, every treat is a work if art, crafted with love and precision, promising a symphony of flavors and textures that will leave you savoring the sweetness of life in every bite",
    img: "/temporary/m3.png",
    color: "white",
  },
];
