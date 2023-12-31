/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jF8CDA3PINW
 */
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { useGetCart } from "@/hooks/useUser";
import { useParams } from "react-router-dom";
import CartItem from "./CartItem";
import { ProductDoc } from "@/types/types";
import { Skeleton } from "./ui/skeleton";

export default function Cart() {
  const { id } = useParams();
  const { loading, data, error } = useGetCart(id!);
  return (
    <>
      {!error || error === "Token expired" ? (
        <Card className="w-full max-w-3xl p-4 mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Shopping Cart</CardTitle>
            {data && !loading && <Badge>{data.itemIds.length} items</Badge>}
          </CardHeader>
          <CardContent className="divide-y">
            {data && !loading ? (
              data.itemIds.map(({ itemId, _id, itemQty }, i) => {
                console.log(itemId, _id, itemQty);
                return (
                  <CartItem
                    name={(itemId as ProductDoc)?.name}
                    desc={(itemId as ProductDoc)?.desc}
                    thumbnail={(itemId as ProductDoc)?.thumbnail}
                    key={i}
                    cartId={data?._id!}
                    itemQty={itemQty}
                    id={_id!}
                  />
                );
              })
            ) : (
              <Skeleton className="w-full h-5 bg-black" />
            )}
          </CardContent>
          <CardFooter className="flex items-center justify-end">
            <Button>
              {data && !loading ? (
                "Proceed to Payment"
              ) : (
                <Skeleton className="w-full h-5 bg-black" />
              )}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="w-full h-full text-white bg-black">
          Error Occurred: {error}
        </div>
      )}
    </>
  );
}
