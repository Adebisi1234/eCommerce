import Joi from "joi";

export const validateAuth = (input: object) => {
  const schema = Joi.object({
    phone: Joi.string().pattern(new RegExp("^[0-9]{3,15}$")).required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    name: Joi.string().required(),
    email: Joi.string(),
    address: Joi.string(),
  });

  const result = schema.validate(input);
  if (result.error) {
    console.log(result.error);
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateVerify = (input: object) => {
  const schema = Joi.object({
    phone: Joi.string().pattern(new RegExp("^[0-9]{3,15}$")).required(),
    code: Joi.string().pattern(new RegExp("^[0-9]{6}$")).required(),
  });
  const result = schema.validate(input);
  if (result.error) {
    console.log(result.error);
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateUser = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum(),
    phone: Joi.string().pattern(new RegExp("^[0-9]{3,15}$")).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().pattern(new RegExp("^[*]{3,30}$")).required(),
    repeatPassword: Joi.ref("password"),
    userType: Joi.string().required(),
    name: Joi.string().required(),
    address: Joi.string(),
    order: Joi.string(),
    cart: Joi.array(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateTransaction = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum(),
    orderId: Joi.string().alphanum().required(),
    userId: Joi.string().alphanum().required(),
    paymentMethod: Joi.string().required(),
    status: Joi.string().required(),
    paymentLog: Joi.string().required(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateShipping = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum(),
    orderId: Joi.string().alphanum().required(),
    customerId: Joi.string().alphanum().required(),
    sellerId: Joi.string().alphanum().required(),
    status: Joi.string().required(),
    address: Joi.string().required(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validatePayment = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum(),
    userId: Joi.string().alphanum().required(),
    bankAccount: Joi.number().required(),
    payment: Joi.string().required(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateOrder = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum(),
    userId: Joi.string().alphanum().required(),
    cartId: Joi.string().alphanum().required(),
    status: Joi.string().required(),
    amount: Joi.number().required(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateProduct = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum(),
    name: Joi.string().required(),
    desc: Joi.string().required(),

    price: Joi.number().required(),
    availability: Joi.boolean().required(),
    sellerId: Joi.string().alphanum().required(),

    stockUnit: Joi.number().required(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateCategory = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum(),
    name: Joi.string().required(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateCartItem = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum(),
    cartId: Joi.string().alphanum().required(),
    itemId: Joi.string().alphanum().required(),
    itemQty: Joi.number(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateCart = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum(),
    userId: Joi.string().alphanum().required(),
    itemIds: Joi.array(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateAddress = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum(),
    userId: Joi.string().alphanum().required(),
    addressLine1: Joi.string().required(),
    addressLine2: Joi.string(),
    city: Joi.string(),
    postCode: Joi.string(),
    country: Joi.string(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw new Error(result.error?.message);
  } else return result.value;
};
