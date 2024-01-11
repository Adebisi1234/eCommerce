import Payment from "./Payment";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { useLocation } from "react-router-dom";
import { CartDoc, OrderDoc, ProductDoc } from "@/types/types";
import { useState } from "react";
import { useOrder } from "@/hooks/useTransaction";
import { useToast } from "./ui/use-toast";
import { useClearCart } from "@/hooks/useUser";

// Toast component
export default function OrderProducts() {
  const { state }: { state: CartDoc } = useLocation();
  const [order, setOrder] = useState<OrderDoc | undefined>(undefined);
  const [cartId, setCartId] = useState<string | undefined>(undefined);
  const [paymentDetails, setPaymentDetails] = useState(false);
  useOrder(order);
  useClearCart(cartId);
  const { toast } = useToast();
  // Get cart incase there's no states
  return (
    <>
      {state ? (
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              Cross check your order list and select your payment method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <>
              {state?.itemIds?.map(({ itemId }) => {
                if (!itemId) return;
                return (
                  <div className="flex items-center justify-between space-y-1">
                    <div className="flex items-center gap-2">
                      <img
                        loading="lazy"
                        src={(itemId as ProductDoc).thumbnail}
                        alt="product image"
                        className="w-10 h-10 aspect-square"
                      />
                      <p>{(itemId as ProductDoc).name}</p>
                    </div>
                    <p>{(itemId as ProductDoc).price}</p>
                  </div>
                );
              })}
            </>
          </CardContent>
          <CardContent>
            {/* <p className="flex items-center justify-between">
              Total:
              <p>total</p>
            </p> */}
            {localStorage.getItem("paymentDetails") || paymentDetails ? (
              <>
                <Button
                  className="block w-full my-2"
                  onClick={() => {
                    setCartId(state._id!);
                    setOrder({
                      amount: 1000,
                      cartId: state._id!,
                      userId: localStorage.getItem("id")!,
                      status: "pending",
                      installments: 5,
                      sleep: "10m",
                    });
                    toast({
                      title: "Order created",
                      description:
                        "You'll receive an email detailing what's next",
                    });
                  }}
                >
                  Pay in Installments
                </Button>
                <Button
                  className="block w-full my-2"
                  onClick={() => {
                    setCartId(state._id!);
                    setOrder({
                      amount: 1000,
                      cartId: state._id!,
                      userId: localStorage.getItem("id")!,
                      status: "pending",
                    });
                    toast({
                      title: "Order created",
                      description:
                        "You'll receive an email detailing what's next",
                    });
                  }}
                >
                  Pay once
                </Button>
              </>
            ) : (
              <Payment
                name="Setup payment details"
                setPaymentDetails={setPaymentDetails}
              />
            )}
          </CardContent>
        </Card>
      ) : (
        "Page not accessible directly please ensure you were redirected here"
      )}
    </>
  );
}

// const OrderSkeleton = (
//   <div className="flex items-center justify-between space-y-1">
//     <div className="flex items-center gap-2">
//       <Skeleton className="w-10 h-10 aspect-square" />
//       <p>
//         <Skeleton className="w-16 h-6" />
//       </p>
//     </div>
//     <p>
//       <Skeleton className="w-16 h-6" />
//     </p>
//   </div>
// );
