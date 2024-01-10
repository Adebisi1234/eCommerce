import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "./ui/table";

export function Checkout1() {
  return (
    <div className="grid gap-6 p-4 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Shopping Cart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Product 1</span>
                <span className="font-medium">2 x $49.99</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Product 2</span>
                <span className="font-medium">1 x $99.99</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <span className="font-medium">Total</span>
            <span className="font-medium">$199.97</span>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment Options</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="once">
              <Label className="flex items-center gap-2" htmlFor="once">
                <RadioGroupItem id="once" value="once" />
                Pay once
              </Label>
              <Label className="flex items-center gap-2" htmlFor="installments">
                <RadioGroupItem id="installments" value="installments" />
                Pay in installments
              </Label>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input id="expiryDate" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Proceed to Payment</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export function Checkout2() {
  return (
    <main className="grid gap-6 md:gap-8 md:p-6">
      <div className="flex flex-col gap-6 md:grid md:grid-cols-6">
        <div className="flex flex-col gap-6 md:col-span-4 lg:col-span-3 xl:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Cart</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px] hidden md:table-cell">
                      Image
                    </TableHead>
                    <TableHead className="max-w-[150px]">Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="hidden md:table-cell">
                      <img
                        alt="Product image"
                        className="object-cover rounded-md aspect-square"
                        height="64"
                        src="/placeholder.svg"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">Product Name</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>$100.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-3 xl:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Payment</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center">
                <div>Total</div>
                <div className="ml-auto">$100.00</div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
              <Button size="sm">Pay Once</Button>
              <Button size="sm" variant="outline">
                Pay in Installments
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}

export function Checkout3() {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-2 md:px-6">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                alt="Product Image"
                className="object-cover rounded-md"
                height="50"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="50"
              />
              <div>
                <h2 className="font-semibold">Product Name</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Quantity: 2
                </p>
              </div>
            </div>
            <p className="font-semibold">$200.00</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                alt="Product Image"
                className="object-cover rounded-md"
                height="50"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width="50"
              />
              <div>
                <h2 className="font-semibold">Product Name</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Quantity: 1
                </p>
              </div>
            </div>
            <p className="font-semibold">$100.00</p>
          </div>
        </div>
        <div className="pt-6 border-t">
          <div className="flex justify-between">
            <p className="font-semibold">Total</p>
            <p className="text-xl font-bold">$300.00</p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Payment</h1>
        <div className="space-y-4">
          <RadioGroup defaultValue="once">
            <RadioGroupItem value="once">
              <Label className="flex items-center gap-2" htmlFor="once">
                <div />
                Pay once
              </Label>
            </RadioGroupItem>
            <RadioGroupItem value="installments">
              <Label className="flex items-center gap-2" htmlFor="installments">
                <div />
                Pay in installments
              </Label>
            </RadioGroupItem>
          </RadioGroup>
          <Button className="w-full">Proceed to Payment</Button>
        </div>
      </div>
    </div>
  );
}
