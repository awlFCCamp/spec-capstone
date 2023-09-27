export type MenuType = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type ProductType = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type orderType = {
  id: string;
  userEmail: string;
  price: number;
  products: object[];
  status: string;
  createAt: Date;
  intent_id?: string;
};
