import { CategoryDoc, ProductDoc } from "@/types/types";
import { type Res, useAxios } from "./useAxios";

export const useFetchProduct = (
  path?: string,
  limit?: number,
  skip?: number
) => {
  const query = `?limit=${limit}&skip=${skip}`;

  const response: Res<ProductDoc | ProductDoc[]> = useAxios(
    "GET",
    `${path}${query}`
  );
  return response;
};
export const useCreateProduct = (input: ProductDoc) => {
  const response: Res<ProductDoc> = useAxios("POST", "", input);
  return response;
};
export const useUpdateProduct = (id: string, input: ProductDoc) => {
  const response: Res<ProductDoc> = useAxios("PUT", `/${id}`, input);
  return response;
};
export const useDeleteProduct = (id: string) => {
  const response: Res<string> = useAxios("DELETE", `/${id}`);
  return response;
};
export const getCategoryProducts = (
  name: string,
  limit?: number,
  skip?: number,
  sort?: string
) => {
  const query = `?limit=${limit}&skip=${skip}&sort=${sort}`;
  const response: Res<string> = useAxios("GET", `/category/${name}${query}`);
  return response;
};
export const createCategory = (input: CategoryDoc) => {
  const response: Res<ProductDoc> = useAxios("PUT", `/category`, input);
  return response;
};
export const updateCategory = (name: string, input: CategoryDoc) => {
  const response: Res<ProductDoc> = useAxios("PUT", `/category/${name}`, input);
  return response;
};
export const getDeals = () => {};
export const updateDeals = () => {};
export const createDeals = () => {};
export const deleteDeals = () => {};
