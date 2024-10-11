import { type Res, useAxios } from "./useAxios";
import { CartDoc, CartItemDoc, UserDoc, auth } from "@/types/types";

export const useLogin = (input?: auth) => {
  if (!input || input.email === "" || input.password === "") {
    const response: Res<string> = useAxios("IGNORE", "/user/login", input);
    return response;
  }
  const response: Res<UserDoc> = useAxios("POST", "/user/login", input);
  return response;
};
export const useRegister = (input?: auth) => {
  if (!input || input.email === "" || input.password === "") {
    const response: Res<string> = useAxios("IGNORE", "/");
    return response;
  }
  const response: Res<UserDoc> = useAxios("POST", "/user/register", input);
  return response;
};
export const useVerify = (input?: auth) => {
  if (!input || input.email === "" || input.code === "") {
    const response: Res<UserDoc> = useAxios("IGNORE", "/");
    return response;
  }
  const response: Res<UserDoc> = useAxios("POST", "/user/verify", input);
  return response;
};
export const useRefreshOTP = (input?: auth) => {
  if (!input || !input.email) {
    const response: Res<UserDoc> = useAxios("IGNORE", "/");
    return response;
  }
  const response: Res<string> = useAxios("POST", "/user/verify/refresh", input);
  return response;
};
export const useGetProfile = (id: string) => {
  const response: Res<UserDoc> = useAxios("GET", `/user/profile/${id}`);
  return response;
};
export const useCreateProfile = (input: UserDoc) => {
  const response: Res<string> = useAxios("POST", `/user/profile`, input);
  return response;
};
export const useUpdateProfile = (input?: UserDoc) => {
  if (!input) {
    const response: Res<string> = useAxios("IGNORE", "/");
    return response;
  }
  const response: Res<UserDoc> = useAxios("PUT", `/user/profile`, input);
  return response;
};
export const useGetCart = (id: string) => {
  const response: Res<CartDoc> = useAxios("GET", `/user/cart/${id}`);
  return response;
};
export const useAddToCart = (input?: CartItemDoc) => {
  if (!input) {
    const response: Res<string> = useAxios("IGNORE", "/");
    return response;
  }

  const response: Res<CartDoc> = useAxios("POST", `/user/cart`, input);
  return response;
};
export const useUpdateCartItem = (id: string, input?: CartItemDoc) => {
  if (!input) {
    const response: Res<string> = useAxios("IGNORE", "/");
    return response;
  }
  const response: Res<CartDoc> = useAxios(
    "PUT",
    `/user/cart/item/${id}`,
    input
  );
  return response;
};
export const useDeleteCartItem = (id?: string) => {
  if (!id) {
    const response: Res<string> = useAxios("IGNORE", "/");
    return response;
  }
  const response: Res<string> = useAxios("DELETE", `/user/cart/item/${id}`);
  return response;
};
export const useClearCart = (id?: string) => {
  if (!id) {
    const response: Res<string> = useAxios("IGNORE", "/");
    return response;
  }
  const response: Res<string> = useAxios("DELETE", `/user/cart/${id}`);
  return response;
};
export const useRefreshToken = () => {
  console.log("wtf");
  const { loading, data, error }: Res<{ token: string }> = useAxios(
    "GET",
    "/user/refresh"
  );
  if (!loading && !error && typeof data === "object") {
    localStorage.setItem("token", `Bearer ${data.token}`);
  }
  return error;
};
