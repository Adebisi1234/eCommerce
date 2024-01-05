import Payment from "./Payment";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

// Toast component
export default function OrderProducts() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>
          Cross check your order list and select your payment method
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src="" alt="" className="aspect-square w-10 h-10" />
            <p>name</p>
          </div>
          <p>Price</p>
        </div>
        <div className="space-y-1 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src="" alt="" className="aspect-square w-10 h-10" />
            <p>name</p>
          </div>
          <p>Price</p>
        </div>
        <div className="space-y-1 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src="" alt="" className="aspect-square w-10 h-10" />
            <p>name</p>
          </div>
          <p>Price</p>
        </div>
        <div className="space-y-1 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src="" alt="" className="aspect-square w-10 h-10" />
            <p>name</p>
          </div>
          <p>Price</p>
        </div>
      </CardContent>
      <CardContent>
        <p className="flex justify-between items-center">
          Total:
          <p>total</p>
        </p>
        {localStorage.getItem("paymentDetails") ? (
          <>
            <Button className="block w-full my-2">Pay in Installments</Button>
            <Button className="block w-full my-2">Pay for all once</Button>
          </>
        ) : (
          <Payment name="Setup payment details" />
        )}
      </CardContent>
    </Card>
  );
}
