import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "./ui/skeleton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CartItemDoc } from "@/types/types";
import { useAddToCart } from "@/hooks/useUser";
import { useToast } from "./ui/use-toast";

type ProdType = {
  id: string;
  img: string;
  name: string;
  rating: number;
  desc: string;
  price: number;
  discount: number;
};

export function ProductSkeleton() {
  return (
    <Card className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="relative flex items-end justify-end w-full h-56 bg-cover">
        <Skeleton className="absolute w-full h-full bg-black" />
        <Skeleton
          aria-label="Add to Cart"
          className="z-20 w-10 h-10 p-2 mx-5 -mb-4 text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
        />
      </div>
      <CardContent className="px-5 py-3">
        <Skeleton className="w-48 h-4 my-2 text-lg text-gray-900 bg-black" />
        <Skeleton className="w-48 h-4 my-2 text-gray-600 bg-black" />
      </CardContent>
      <div className="grid items-center grid-cols-2 gap-4 px-5 py-3">
        <Skeleton className="w-4 h-4 font-bold text-gray-900" />

        <div className="flex items-center gap-0.5">
          <StarIcon className="w-5 h-5 fill-muted animate-pulse stroke-muted-foreground" />
          <StarIcon className="w-5 h-5 fill-muted animate-pulse stroke-muted-foreground" />
          <StarIcon className="w-5 h-5 fill-muted animate-pulse stroke-muted-foreground" />
          <StarIcon className="w-5 h-5 fill-muted animate-pulse stroke-muted-foreground" />
          <StarIcon className="w-5 h-5 fill-muted animate-pulse stroke-muted-foreground" />
        </div>
      </div>
    </Card>
  );
}

export default function ProductCard({
  id,
  img,
  name,
  rating,
  desc,
  price,
  discount,
}: ProdType) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [cartItem, setCartItem] = useState<CartItemDoc | undefined>(undefined);
  useAddToCart(cartItem);
  const cartId = localStorage.getItem("cartId");
  const stars = new Array(5);
  const starsComponent = stars.map((_v, i) => {
    if (i < rating) {
      return <StarIcon className="w-5 h-5 fill-primary" />;
    }
    return <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />;
  });
  return (
    <>
      <Card
        className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg"
        onClick={(ev) => {
          if (
            (ev.target as HTMLElement).tagName.toLowerCase() === "button" ||
            (ev.target as HTMLElement).tagName.toLowerCase() === "svg" ||
            (ev.target as HTMLElement).tagName.toLowerCase() === "path"
          ) {
            return;
          }
          navigate(`/product/${id}`);
        }}
      >
        <div className="relative flex items-end justify-end w-full h-56 bg-cover">
          <img
            loading="lazy"
            src={img}
            alt="product image"
            className="absolute inset-0 object-cover w-full h-full animate-pulse bg-slate-200"
            onLoad={(ev) => {
              ev.currentTarget.complete &&
                ev.currentTarget.classList.remove("animate-pulse");
            }}
          />
          <Button
            aria-label="Add to Cart"
            className="z-20 p-2 mx-5 -mb-4 text-white bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            onClick={() => {
              setCartItem({
                cartId: cartId!,
                itemId: id,
                itemQty: 1,
              });
              toast({
                title: "Added to cart",
              });
            }}
          >
            <ShoppingCartIcon className="w-5 h-5" />
          </Button>
        </div>
        <CardContent className="px-5 py-3">
          <h2 className="text-lg text-gray-900">{name}</h2>
          <p className="text-gray-600">{desc}</p>
        </CardContent>
        <div className="grid items-center grid-cols-2 gap-4 px-5 py-3">
          <span className="font-bold text-gray-900">${price}</span>
          <Badge className="inline-block px-2 py-1 ml-auto mr-1 text-xs font-semibold text-red-600 uppercase bg-red-200 rounded-full last:mr-0 w-fit">
            {discount}% off
          </Badge>
          <div className="flex items-center gap-0.5">{starsComponent}</div>
        </div>
      </Card>
    </>
  );
}

function ShoppingCartIcon(props: any) {
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

function StarIcon(props: any) {
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
