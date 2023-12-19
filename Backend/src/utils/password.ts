import bcrypt from "bcrypt";
const salt = 10;

export const hashPassword = async (plainPassword: string) => {
  return await bcrypt.hash(plainPassword, salt);
};

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};
