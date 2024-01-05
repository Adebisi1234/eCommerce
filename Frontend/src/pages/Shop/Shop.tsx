import Deals from "@/components/Deals";

import ProductCard, { ProductSkeleton } from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import { useFetchProduct } from "@/hooks/useProduct";
import { CartIcon } from "@/components/CartIcon";

export const Shop = () => {
  const { category } = useParams();
  console.log(category);
  const { loading, error, data } = useFetchProduct(
    !category ? "" : `/category/${category}`,
    !category ? 50 : 0,
    0
  );
  console.log(data, error);
  return (
    <>
      {!error || error === "Token expired" ? (
        <div className="h-[calc(100vh_-_80px)]">
          <main>
            {data instanceof Array ? (
              <Deals products={[...data].splice(0, 5)} />
            ) : (
              <Deals />
            )}
            <h1 className="mb-2 text-2xl font-bold tracking-tight">
              {category || "All Products"}
            </h1>
            <div className="grid gap-4 sm:grid-cols-2 product-container sm:border-l-2 lg:grid-cols-4">
              {!data || loading ? (
                <>
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                </>
              ) : data instanceof Array ? (
                data?.map((v, i) => {
                  return (
                    <ProductCard
                      key={i}
                      id={v._id!}
                      img={v.thumbnail}
                      name={v.name}
                      desc={v.desc}
                      rating={Math.floor(v.rating)}
                      price={v.price}
                      discount={v.discount}
                    />
                  );
                })
              ) : (
                typeof data === "object" && (
                  <ProductCard
                    id={data?._id!}
                    img={data?.thumbnail}
                    name={data?.name}
                    desc={data?.desc}
                    rating={Math.floor(data?.rating)}
                    price={data?.price}
                    discount={data?.discount}
                  />
                )
              )}
            </div>
          </main>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-screen text-white bg-black">
          Error ocurred {error}
        </div>
      )}
      <CartIcon />
    </>
  );
};
