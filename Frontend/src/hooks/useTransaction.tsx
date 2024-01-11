import { OrderDoc, ShippingDoc } from "@/types/types";
import { type Res, useAxios } from "./useAxios";

export const useGetOrder = (id: string, page?: number) => {
  const response: Res<OrderDoc[]> = useAxios(
    "GET",
    `/transaction/order/${id}/${page}`
  );
  return response;
};
export const useOrder = (input?: OrderDoc) => {
  if (!input) {
    const response: Res<OrderDoc> = useAxios("IGNORE", `/`);
    return response;
  }
  const response: Res<OrderDoc> = useAxios(
    "POST",
    `/transaction/order/`,
    input
  );
  return response;
};
export const useCancelOrder = (id: string) => {
  const response: Res<OrderDoc> = useAxios(
    "PATCH",
    `/transaction/order/cancel/${id}`
  );
  return response;
};
export const useGetShipping = (page: number) => {
  const response: Res<OrderDoc> = useAxios(
    "GET",
    `/transaction/shippings?page=${page}`
  );
  return response;
};
export const useShipProduct = (input: ShippingDoc) => {
  const response: Res<OrderDoc> = useAxios(
    "POST",
    `/transaction/shipping/`,
    input
  );
  return response;
};
export const usePayment = (input: ShippingDoc) => {
  const response: Res<OrderDoc> = useAxios(
    "POST",
    `/transaction/payment/`,
    input
  );
  return response;
};
