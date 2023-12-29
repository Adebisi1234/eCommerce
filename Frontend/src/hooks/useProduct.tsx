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

export const useCreateCategory = (input: CategoryDoc) => {
  const response: Res<CategoryDoc> = useAxios("PUT", `/category`, input);
  return response;
};
export const useGetCategories = () => {
  const response: Res<CategoryDoc[]> = useAxios("GET", `/category`);
  return response;
};
export const useUpdateCategory = (name: string, input: CategoryDoc) => {
  const response: Res<CategoryDoc> = useAxios(
    "PUT",
    `/category/${name}`,
    input
  );
  return response;
};
export const getDeals = () => {};
export const updateDeals = () => {};
export const createDeals = () => {};
export const deleteDeals = () => {};
