import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export type Res<T> = {
  data: T;
  loading: boolean;
  error: string | null;
};
export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "IGNORE";

export const useAxios = (method: Method, path: string, body?: object) => {
  const [result, setResult] = useState<Res<any>>({
    data: null,
    loading: true,
    error: null,
  });
  const getData = async () => {
    let data: any;
    try {
      if (method.toUpperCase() === "GET") {
        data = (await axios.get(path)).data;
      } else if (method.toUpperCase() === "POST") {
        data = (await axios.post(path, body)).data;
      } else if (method.toUpperCase() === "PUT") {
        data = (await axios.put(path, body)).data;
      } else if (method.toUpperCase() === "PATCH") {
        data = (await axios.patch(path, body)).data;
      } else if (method.toUpperCase() === "DELETE") {
        data = (await axios.delete(path)).data;
      }
      setResult({ error: null, data, loading: false });
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.status === 501) {
          getData();
        }
        const errorMessage = err.response?.data;
        setResult((prev) => {
          return {
            ...prev,
            error: errorMessage,
            loading: false,
          } as Res<any> & { error: string };
        });
        return;
      }
      console.log(err);
      setResult((prev) => {
        return { ...prev, error: err, loading: false } as Res<any> & {
          error: string;
        };
      });
    }
  };
  useEffect(() => {
    getData();
  }, [method, path, body]);

  return result;
};
