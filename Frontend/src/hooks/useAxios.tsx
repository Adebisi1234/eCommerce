import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRefreshToken } from "./useUser";
export type Res<T> = {
  data: T;
  loading: boolean;
  error: unknown;
};
export type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const useAxios = (method: Method, path: string, body?: object) => {
  const [result, setResult] = useState<Res<any>>({
    data: null,
    loading: true,
    error: null,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const getData = async () => {
    let data: any;
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
    } else {
      throw new Error("Invalid method");
    }
    setResult({ error: null, data, loading: false });
  };
  useEffect(() => {
    try {
      getData();
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.status === 401 && !location.pathname.includes("auth")) {
          const error = useRefreshToken();
          if (error) {
            navigate("/auth/login", {
              state: "Session expired please logging again",
            });
          }
          getData();
        }
        const errorMessage = err.message;
        setResult((prev) => {
          return { ...prev, error: errorMessage, loading: false };
        });
      }
      console.log(err);
      setResult((prev) => {
        return { ...prev, error: err, loading: false };
      });
    }
  }, [method, path, body]);

  return result;
};
