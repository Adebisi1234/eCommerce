import { type Res, useAxios } from "./useAxios";
import { CartDoc, CartItemDoc, UserDoc, auth } from "@/types/types";

export const useLogin = (input: auth) => {
  const { loading, error }: Res<string> = useAxios("POST", "login", input);
  return { loading, error };
};
export const useRegister = (input: auth) => {
  const { loading, error }: Res<string> = useAxios("POST", "register", input);
  return { loading, error };
};
export const useVerify = (input: auth) => {
  const { loading, error }: Res<string> = useAxios("POST", "verify", input);
  return { loading, error };
};
export const useGetProfile = (id: string) => {
  const response: Res<string> = useAxios("GET", `profile/${id}`);
  return response;
};
export const useCreateProfile = (input: UserDoc) => {
  const { loading, error }: Res<string> = useAxios("POST", `profile`, input);
  return { loading, error };
};
export const useUpdateProfile = (input: UserDoc) => {
  const response: Res<UserDoc> = useAxios("PUT", `profile`, input);
  return response;
};
export const useGetCart = (id: string) => {
  const response: Res<CartDoc> = useAxios("GET", `cart/${id}`);
  return response;
};
export const useAddToCart = (input: CartItemDoc) => {
  const response: Res<CartDoc> = useAxios("POST", `cart`, input);
  return response;
};
export const useUpdateCartItem = (input: CartItemDoc) => {
  const response: Res<CartDoc> = useAxios(
    "PUT",
    `cart/item/${(input as any)._id}`,
    input
  );
  return response;
};
export const useDeleteCartItem = (id: string) => {
  const { loading, error }: Res<string> = useAxios("DELETE", `cart/item/${id}`);
  return { loading, error };
};
export const useClearCart = (id: string) => {
  const { loading, error }: Res<string> = useAxios("DELETE", `cart/${id}`);
  return { loading, error };
};
export const useRefreshToken = () => {
  const { loading, data, error }: Res<{ token: string }> = useAxios(
    "GET",
    "refresh"
  );
  if (!loading && !error && typeof data === "object") {
    localStorage.setItem("token", `Bearer ${data.token}`);
  }
  return error;
};
