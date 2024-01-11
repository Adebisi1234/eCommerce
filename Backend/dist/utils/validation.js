import Joi from "joi";
export const validateAuth = (input) => {
    const schema = Joi.object({
        phone: Joi.string().pattern(new RegExp("^[0-9]{3,15}$")),
        password: Joi.string().required(),
        name: Joi.string(),
        email: Joi.string().required(),
        address: Joi.string(),
    });
    const result = schema.validate(input);
    if (result.error) {
        console.log(result.error);
        throw Error(schema.validate(input).error?.message);
    }
    else
        return schema.validate(input).value;
};
export const validateVerify = (input) => {
    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        code: Joi.string().pattern(new RegExp("^[0-9]{6}$")).required(),
    });
    const result = schema.validate(input);
    if (result.error) {
        console.log(result.error);
        throw Error(schema.validate(input).error?.message);
    }
    else
        return schema.validate(input).value;
};
export const validateOTP = (input) => {
    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
    });
    const result = schema.validate(input);
    if (result.error) {
        console.log(result.error);
        throw Error(schema.validate(input).error?.message);
    }
    else
        return schema.validate(input).value;
};
export const validateUser = (input) => {
    const schema = Joi.object({
        _id: Joi.string().alphanum(),
        phone: Joi.string().pattern(new RegExp("^[0-9]{3,15}$")).required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
            .required(),
        password: Joi.string().required(),
        userType: Joi.string().required(),
        name: Joi.string().required(),
        address: Joi.string(),
        order: Joi.string(),
        cart: Joi.array(),
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
    }
    else
        return schema.validate(input).value;
};
export const validateShipping = (input) => {
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
    }
    else
        return schema.validate(input).value;
};
export const validatePayment = (input) => {
    const schema = Joi.object({
        _id: Joi.string().alphanum(),
        userId: Joi.string().alphanum().required(),
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
        _id: Joi.string().alphanum(),
        userId: Joi.string().alphanum().required(),
        cartId: Joi.string().alphanum().required(),
        status: Joi.string().required(),
        amount: Joi.number().required(),
        installments: Joi.number(),
        sleep: Joi.string()
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
    }
    else
        return schema.validate(input).value;
};
export const validateUpdateProduct = (input) => {
    const schema = Joi.object({
        _id: Joi.string().alphanum(),
        name: Joi.string(),
        desc: Joi.string(),
        price: Joi.number(),
        availability: Joi.boolean(),
        sellerId: Joi.string().alphanum(),
        stockUnit: Joi.number(),
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
        _id: Joi.string().alphanum(),
        name: Joi.string().required(),
        desc: Joi.string().required(),
    });
    const result = schema.validate(input);
    if (result.error) {
        throw Error(schema.validate(input).error?.message);
    }
    else
        return schema.validate(input).value;
};
export const validateUpdateCategory = (input) => {
    const schema = Joi.object({
        _id: Joi.string().alphanum(),
        name: Joi.string(),
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
        _id: Joi.string().alphanum(),
        cartId: Joi.string().alphanum().required(),
        itemId: Joi.string().alphanum().required(),
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
        _id: Joi.string().alphanum(),
        userId: Joi.string().alphanum().required(),
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
    }
    else
        return result.value;
};
