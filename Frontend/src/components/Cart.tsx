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
import { useNavigate, useParams } from "react-router-dom";
import CartItem from "./CartItem";
import { CartDoc, ProductDoc } from "@/types/types";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";

export default function Cart() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartDoc | undefined>(undefined);
  const { loading, data, error } = useGetCart(cart?._id ?? id!);
  const total = cart ? (
    cart?.itemIds
      ?.map(({ itemId, itemQty }) => {
        return +(itemId as ProductDoc)?.price ?? 0 * +itemQty;
      })
      .reduce((a, b) => a + b, 0)
  ) : (
    <Skeleton className="w-3 h-2 bg-black" />
  );

  useEffect(() => {
    if (data) {
      setCart(data);
    }
  }, [data]);

  return (
    <>
      {!error || error === "Token expired" ? (
        <Card className="w-full max-w-3xl p-4 mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Shopping Cart</CardTitle>
            {cart && !loading && <Badge>{cart?.itemIds.length} items</Badge>}
          </CardHeader>
          <CardContent className="divide-y">
            {cart && !loading ? (
              cart?.itemIds.map(({ itemId, _id, itemQty }, i) => {
                if (!itemId) return;
                return (
                  <CartItem
                    name={(itemId as ProductDoc)?.name}
                    desc={(itemId as ProductDoc)?.desc}
                    thumbnail={(itemId as ProductDoc)?.thumbnail}
                    key={i}
                    cartId={cart._id!}
                    itemQty={itemQty}
                    id={_id!}
                    setCart={setCart}
                    index={i}
                  />
                );
              })
            ) : (
              <Skeleton className="w-full h-5 bg-black" />
            )}
            <p className="flex space-y-1 justify-between items-center">
              <span>Total:</span> <span>{total}</span>
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-end">
            <Button>
              {cart && !loading ? (
                <p
                  className={`${
                    cart?.itemIds.length === 0 && "cursor-not-allowed"
                  }`}
                  onClick={() => {
                    navigate("/order", { state: cart });
                  }}
                >
                  Proceed to Payment
                </p>
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
