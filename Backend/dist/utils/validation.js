import Joi from "joi";
export const validateAuth = (input) => {
    const schema = Joi.object({
        phone: Joi.string().pattern(new RegExp("^[0-9]{3,15}$")).required(),
        password: Joi.string()
            .pattern(new RegExp("^[a-zA-z0-9]{3,30}$"))
            .required(),
        name: Joi.string().required(),
    });
    const result = schema.validate(input);
    if (result.error) {
        throw Error(schema.validate(input).error?.message);
    }
    else
        return schema.validate(input).value;
};
export const validateVerify = (input) => {
    const schema = Joi.object({
        phone: Joi.string().pattern(new RegExp("^[0-9]{3,15}$")).required(),
        code: Joi.string().pattern(new RegExp("^[0-9]{6}$")).required(),
    });
    const result = schema.validate(input);
    if (result.error) {
        throw Error(schema.validate(input).error?.message);
    }
    else
        return schema.validate(input).value;
};
export const validateUser = (input) => {
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
    }
    else
        return schema.validate(input).value;
};
export const validateTransaction = (input) => {
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
    }
    else
        return schema.validate(input).value;
};
export const validateShipping = (input) => {
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
    }
    else
        return schema.validate(input).value;
};
export const validatePayment = (input) => {
    const schema = Joi.object({
        _id: Joi.string().alphanum().required(),
        userId: Joi.ref("_id"),
        bankAccount: Joi.number().required(),
        payment: Joi.string().required(),
    });
    const result = schema.validate(input);
    if (result.error) {
        throw Error(schema.validate(input).error?.message);
    }
    else
        return schema.validate(input).value;
};
export const validateOrder = (input) => {
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
    }
    else
        return schema.validate(input).value;
};
export const validateProduct = (input) => {
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
    }
    else
        return schema.validate(input).value;
};
export const validateCategory = (input) => {
    const schema = Joi.object({
        _id: Joi.string().alphanum().required(),
        name: Joi.string().required(),
    });
    const result = schema.validate(input);
    if (result.error) {
        throw Error(schema.validate(input).error?.message);
    }
    else
        return schema.validate(input).value;
};
export const validateCartItem = (input) => {
    const schema = Joi.object({
        _id: Joi.string().alphanum().required(),
        cartId: Joi.ref("_id"),
        itemId: Joi.ref("_id"),
        itemQty: Joi.number(),
    });
    const result = schema.validate(input);
    if (result.error) {
        throw Error(schema.validate(input).error?.message);
    }
    else
        return schema.validate(input).value;
};
export const validateCart = (input) => {
    const schema = Joi.object({
        _id: Joi.string().alphanum().required(),
        userId: Joi.ref("_id"),
        itemIds: Joi.array(),
    });
    const result = schema.validate(input);
    if (result.error) {
        throw Error(schema.validate(input).error?.message);
    }
    else
        return schema.validate(input).value;
};
export const validateAddress = (input) => {
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
    }
    else
        return result.value;
};
