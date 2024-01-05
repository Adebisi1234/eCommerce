import { useOrder } from "@/hooks/useTransaction";
import Payment from "./Payment";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

// Toast component
export default function OrderProducts() {
  const { loading, data, error } = useOrder();
  return (
    <>
      {!error || error === "Token expired" ? (
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              Cross check your order list and select your payment method
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!loading || data ? (
              <>
                <div className="flex items-center justify-between space-y-1">
                  <div className="flex items-center gap-2">
                    <img src="" alt="" className="w-10 h-10 aspect-square" />
                    <p>name</p>
                  </div>
                  <p>Price</p>
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="flex items-center gap-2">
                    <img src="" alt="" className="w-10 h-10 aspect-square" />
                    <p>name</p>
                  </div>
                  <p>Price</p>
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="flex items-center gap-2">
                    <img src="" alt="" className="w-10 h-10 aspect-square" />
                    <p>name</p>
                  </div>
                  <p>Price</p>
                </div>
                <div className="flex items-center justify-between space-y-1">
                  <div className="flex items-center gap-2">
                    <img src="" alt="" className="w-10 h-10 aspect-square" />
                    <p>name</p>
                  </div>
                  <p>Price</p>
                </div>
              </>
            ) : (
              OrderSkeleton
            )}
          </CardContent>
          <CardContent>
            <p className="flex items-center justify-between">
              Total:
              <p>total</p>
            </p>
            {localStorage.getItem("paymentDetails") ? (
              <>
                <Button className="block w-full my-2">
                  Pay in Installments
                </Button>
                <Button className="block w-full my-2">Pay for all once</Button>
              </>
            ) : (
              <Payment name="Setup payment details" />
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="w-full h-full text-white bg-black">
          Error Occurred: {error}
        </div>
      )}
    </>
  );
}

const OrderSkeleton = (
  <div className="flex items-center justify-between space-y-1">
    <div className="flex items-center gap-2">
      <Skeleton className="w-10 h-10 aspect-square" />
      <p>
        <Skeleton className="w-16 h-6" />
      </p>
    </div>
    <p>
      <Skeleton className="w-16 h-6" />
    </p>
  </div>
);
