export type auth = {
  phone?: string;
  email?: string;
  password?: string;
  name?: string;
  code?: string;
};

export type ProductDoc = {
  _id: string;
  name: string;
  desc: string;
  category: string;
  rating: number;
  thumbnail: string;
  images: string[];
  price: number;
  discount: number;
  availability: boolean;
  sellerId: string | UserDoc;
  dealId: string;
  stockUnit: number;
};

export type PaymentDoc = {
  userId: string | UserDoc;
  bankAccount: number;
  payment: string;
};

export type OrderDoc = {
  userId: string | UserDoc;
  carId: string | CartDoc;
  productId: string | ProductDoc;
  status: string;
  amount: number;
};

export type UserDoc = {
  phone: number;
  email: string;
  password: string;
  userType: "Buyer" | "Seller";
  verified: boolean;
  address: string | AddressDoc;
  cart: string | CartDoc;
  order: string | OrderDoc;
  payment: string | PaymentDoc;
  name: string;
  profilePic?: string;
  token: string;
};

export type CartItemDoc = {
  cartId: string | CartDoc;
  itemId: string | ProductDoc;
};

export type AddressDoc = {
  userId: string | UserDoc;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postCode: string;
  country: string;
};

export type CartDoc = {
  userId: string | UserDoc;
  itemIds: (string | CartItemDoc)[];
};

export type CategoryDoc = {
  name: string;
};

export type ShippingDoc = {
  orderId: string | OrderDoc;
  customerId: string | UserDoc;
  sellerId: string | UserDoc;
  status: string;
  address: string | AddressDoc;
};
