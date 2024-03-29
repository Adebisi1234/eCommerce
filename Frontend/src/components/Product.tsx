import { Button } from "@/components/ui/button";
import { Res } from "@/hooks/useAxios";
import { useFetchProduct } from "@/hooks/useProduct";
import { ProductDoc } from "@/types/types";
import { useParams } from "react-router-dom";
import { Skeleton } from "./ui/skeleton";

export default function Product() {
  const { id } = useParams();
  const { data, error } = useFetchProduct(`/${id}`) as Res<ProductDoc>;
  const stars = new Array(5);
  const starsComponent = stars.map((_v, i) => {
    if (i < data?.rating) {
      return <StarIcon className="w-5 h-5 fill-primary" />;
    }
    return <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />;
  });
  return (
    <>
      {!error || error === "Token expired" ? (
        <>
          {data ? (
            <div className="flex flex-col p-6 mx-auto bg-gray-100 rounded-lg shadow-lg md:flex-row dark:bg-gray-900 md:p-12 max-w-7xl">
              <div className="md:w-1/2">
                <img
                  loading="lazy"
                  alt="Product Image"
                  className="aspect-[1/1] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 mb-6 md:mb-0"
                  height="500"
                  src={data?.thumbnail}
                  width="500"
                />
              </div>
              <div className="md:w-1/2 md:pl-10">
                <h1 className="mb-4 text-3xl font-bold lg:text-4xl">
                  {data?.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  {starsComponent}
                </div>
                <p className="mb-6">{data?.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold">${data?.price}</div>
                  <div className="text-sm font-bold text-red-500">
                    {data?.discount}% OFF
                  </div>
                </div>
                <Button size="lg" className="my-2">
                  Add to cart
                </Button>
              </div>
            </div>
          ) : (
            <ProductSkeleton />
          )}
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-screen text-white bg-black">
          <p>Error occurred: {error}</p>
        </div>
      )}
    </>
  );
}

function StarIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

const ProductSkeleton = () => {
  return (
    <>
      <div
        key="1"
        className="flex flex-col p-6 mx-auto bg-gray-100 rounded-lg shadow-lg md:flex-row dark:bg-gray-900 md:p-12 max-w-7xl"
      >
        <div className="md:w-1/2">
          <Skeleton className="aspect-[1/1] h-[500px] object-cover border border-gray-200 w-full bg-black rounded-lg overflow-hidden dark:border-gray-800 mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h1 className="mb-4 text-3xl font-bold lg:text-4xl">
            <Skeleton className="w-10 h-4 bg-black" />
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          </div>
          <p className="mb-6">
            <Skeleton className="w-20 h-4 bg-black" />
          </p>
          <div className="flex items-center justify-between">
            <div className="text-4xl font-bold">
              <Skeleton className="w-5 h-4 bg-black" />
            </div>
            <div className="text-sm font-bold text-red-500">
              <Skeleton className="w-5 h-4 bg-black" />
            </div>
          </div>
          <Button size="lg" className="my-2 cursor-not-allowed">
            Add to cart
          </Button>
        </div>
      </div>
    </>
  );
};
