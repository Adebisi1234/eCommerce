export type auth = {
  _id?: string;
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
  sellerId: UserDoc;
  dealId: string;
  stockUnit: number;
};

export type PaymentDoc = {
  _id?: string;
  userId: UserDoc;
  bankAccount: number;
  payment: string;
};

export type OrderDoc = {
  _id?: string;
  userId: string;
  cartId: CartDoc | string;
  sleep?: string;
  installments?: number;
  status: string;
  amount: number;
  createdAt?: string;
};

export type UserDoc = {
  _id?: string;
  phone: number;
  email: string;
  password: string;
  userType: "Buyer" | "Seller";
  verified: boolean;
  address: AddressDoc;
  cart: CartDoc;
  order: OrderDoc;
  payment: PaymentDoc;
  name: string;
  profilePic?: string;
  token: string;
};

export type CartItemDoc = {
  _id?: string;
  cartId: string | CartDoc;
  itemId: string | ProductDoc;
  itemQty: number;
};

export type AddressDoc = {
  _id?: string;
  userId: UserDoc;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postCode: string;
  country: string;
};

export type CartDoc = {
  total: number;
  _id?: string;
  userId: UserDoc;
  itemIds: CartItemDoc[];
};

export type CategoryDoc = {
  _id?: string;
  name: string;
  desc: string;
};

export type ShippingDoc = {
  _id?: string;
  orderId: OrderDoc;
  customerId: UserDoc;
  sellerId: UserDoc;
  status: string;
  address: AddressDoc;
};
