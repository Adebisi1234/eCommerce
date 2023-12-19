import Joi from "joi";

export const validateAuth = (input: object) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-z0-9]{3,30}$"))
      .required(),
    name: Joi.string().required(),
  });

  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateUser = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum(),
    phone: Joi.number().min(111).max(9999999999999).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-z0-9]{3,30}$"))
      .required(),
    repeatPassword: Joi.ref("password"),
    userType: Joi.string().required(),
    name: Joi.string().required(),
    address: Joi.string().required(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateTransaction = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum().required(),
    orderId: Joi.ref("_id"),
    userId: Joi.ref("_id"),
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
    _id: Joi.string().alphanum().required(),
    orderId: Joi.ref("_id"),
    customerId: Joi.ref("_id"),
    sellerId: Joi.ref("_id"),
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
    _id: Joi.string().alphanum().required(),
    userId: Joi.ref("_id"),
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
    _id: Joi.string().alphanum().required(),
    userId: Joi.ref("_id"),
    cartId: Joi.ref("_Id"),
    status: Joi.string().required,
    amount: Joi.number().required(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateProduct = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum().required(),
    name: Joi.string().required,
    desc: Joi.string().required,
    categoryId: Joi.ref("_id"),
    price: Joi.number().required,
    availability: Joi.boolean().required,
    sellerId: Joi.ref("_id"),
    dealId: Joi.ref("_id"),
    stockUnit: Joi.number().required,
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateCategory = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum().required(),
    name: Joi.string().required(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateCartItem = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum().required(),
    cartId: Joi.ref("_id"),
    itemId: Joi.ref("_id"),
    itemQty: Joi.number(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateCart = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum().required(),
    userId: Joi.ref("_id"),
    itemIds: Joi.array(),
  });
  const result = schema.validate(input);
  if (result.error) {
    throw Error(schema.validate(input).error?.message);
  } else return schema.validate(input).value;
};

export const validateAddress = (input: object) => {
  const schema = Joi.object({
    _id: Joi.string().alphanum().required(),
    userId: Joi.ref("_id"),
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
