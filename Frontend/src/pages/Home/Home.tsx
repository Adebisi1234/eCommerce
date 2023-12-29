/**
 * v0 by Vercel.
 * @see https://v0.dev/t/syt27khDuwo
 */
import { Button } from "@/components/ui/button";
import ProductCard, { ProductSkeleton } from "../../components/ProductCard";

import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useFetchProduct } from "@/hooks/useProduct";
import { ProductDoc } from "@/types/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductDoc[]>([]);
  const { loading, data, error } = useFetchProduct("", 5, 0);
  useLayoutEffect(() => {
    !localStorage.getItem("token") && navigate("/auth/login");
  }, []);
  useLayoutEffect(() => {
    if (!data) {
      return;
    }
    if (Array.isArray(data)) {
      setProducts(data);
    } else {
      setProducts([data]);
    }
  }, [data]);
  const highlight = products.map((v, i) => {
    if (i === 0) {
      return;
    }
    return (
      <ProductCard
        key={i}
        id={v._id}
        img={v.thumbnail}
        name={v.name}
        desc={v.desc}
        rating={Math.floor(v.rating)}
        price={v.price}
        discount={v.discount}
      />
    );
  });

  return (
    <>
      {!error || error === "Token expired" ? (
        <>
          <main className="flex-1 py-6 sm:py-12 md:py-24 lg:py-32">
            <section className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                {loading || !data ? (
                  <>
                    <Skeleton className="object-cover mx-auto overflow-hidden bg-gradient-to-r from-gray-700 via-gray-900 to-black aspect-video animate-pulse rounded-xl sm:w-full lg:order-last lg:aspect-square" />

                    <div className="flex flex-col justify-center space-y-4">
                      {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Featured Product
                </h2> */}
                      <Skeleton className="w-[250px] h-9 bg-gradient-to-r from-gray-700 via-gray-900 to-black" />
                      <Skeleton className="w-[200px] h-9 bg-gradient-to-r from-gray-700 via-gray-900 to-black" />
                      {/* <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Our newest and most popular product.
                </p> */}
                      <Button
                        className="self-start w-24"
                        onClick={() => {
                          navigate("/shop");
                        }}
                      ></Button>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      alt="Featured Product"
                      className="object-cover mx-auto overflow-hidden bg-gradient-to-r from-gray-700 via-gray-900 to-black aspect-video animate-pulse rounded-xl sm:w-full lg:order-last lg:aspect-square"
                      height="550"
                      src={products.length > 0 ? products[0]?.images[0] : ""}
                      width="550"
                      onLoad={(ev) => {
                        ev.currentTarget.complete &&
                          ev.currentTarget.classList.remove("animate-pulse");
                      }}
                    />

                    <div className="flex flex-col justify-center space-y-4">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        {products.length > 0 ? products[0]?.name : ""}
                      </h2>
                      <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                        {products.length > 0 ? products[0]?.desc : ""}
                      </p>
                      <Button
                        className="self-start"
                        onClick={() => {
                          navigate("/shop");
                        }}
                      >
                        Shop Now
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </section>
            <section className="container px-4 py-6 md:px-6 sm:py-12 md:py-24 lg:py-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Shop Our Products
                </h2>
                <Button
                  onClick={() => {
                    navigate("/shop");
                  }}
                >
                  View All
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {products[0] ? (
                  highlight
                ) : (
                  <>
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                  </>
                )}
              </div>
            </section>
          </main>
          <footer className="flex flex-col items-center w-full gap-2 px-4 py-6 border-t sm:flex-row shrink-0 md:px-6">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © Inc. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:ml-auto sm:gap-6">
              <a
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                Privacy
              </a>
            </nav>
          </footer>
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-screen text-white bg-black">
          <p>Error occurred: {error}</p>
        </div>
      )}
    </>
  );
}
