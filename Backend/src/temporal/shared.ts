export type MessageDetails = {
  html: string;
  text: string;
  subject: string;
};

export type ProductDetails = {
  name: string;
  price: string;
  userId: string;
  id: string;
};

export const namespace = "default";
export const taskQueueName = "email";
