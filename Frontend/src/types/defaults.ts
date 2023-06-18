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
  createdAt?: string;
  updatedAt?: string;
  numSold?: number;
};

export type clocks = clock[];

export type user = {
  id: string;
  name: string;
  address: string;
  number: string;
  email: string;
  favorites: string[];
  orders: string[];
  cart: string[];
  delivery: string;
};
