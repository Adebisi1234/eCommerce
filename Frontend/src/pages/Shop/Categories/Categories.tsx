/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IXOdvqfXbFt
 */
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetCategories } from "@/hooks/useProduct";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  const { loading, data, error } = useGetCategories();

  const CategorySkeleton = () => {
    return (
      <>
        <Card className="transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center gap-4 p-4">
            <BookIcon className="w-10 h-10" />
            <Skeleton className="w-24 h-4 bg-black" />
            <Skeleton className="w-24 h-4 bg-black" />
            <a className="mt-auto" href="#">
              <Button variant="outline">
                <Skeleton className="w-24 h-4 bg-black" />
              </Button>
            </a>
          </CardContent>
        </Card>
      </>
    );
  };
  return (
    <>
      {!error && error !== "Token expired" ? (
        <>
          <h1 className="mb-2 text-2xl font-bold tracking-tight">
            Product Categories
          </h1>

          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {loading && !data ? (
              <CategorySkeleton />
            ) : (
              data.map((v) => {
                return (
                  <Card
                    className="transition-transform hover:scale-105"
                    onClick={() => {
                      navigate(`/shop/${v.name}`);
                    }}
                  >
                    <CardContent className="flex flex-col items-center gap-4 p-4">
                      <ShoppingCartIcon className="w-10 h-10" />
                      <h3 className="text-lg font-semibold">{v.name}</h3>
                      <p className="text-sm text-gray-500">{v.desc}</p>
                      <a className="mt-auto" href="#">
                        <Button variant="outline">Shop Now</Button>
                      </a>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-screen text-white bg-black">
          <p>Error occurred: {error}</p>
        </div>
      )}
    </>
  );
}

function BookIcon(props: { className: string }) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function ShoppingCartIcon(props: { className: string }) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
