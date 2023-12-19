import bcrypt from "bcrypt";
const salt = 10;
export const hashPassword = async (plainPassword) => {
    return await bcrypt.hash(plainPassword, salt);
};
export const comparePassword = async (plainPassword, hashedPassword) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};
