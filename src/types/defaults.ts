export type cart = string[];

export type clock = {
  name: string;
  price: number;
  priceWord: string;
  category: string[] | string;
  imgUrl: string;
  showcase: string[];
  smallImgUrl: string;
  available: boolean;
  amount: number;
  description: string;
  discount: number;
  sold: string;
  wishListed: boolean;
};

export type clocks = clock[];

export type user = {
  name: string;
  address: string;
  number: string;
  email: string;
  favorites: string[];
  orders: string[];
  cart: string[];
  delivery: string;
};
