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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Cart() {
  return (
    <Card className="w-full max-w-3xl mx-auto p-4">
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Shopping Cart</CardTitle>
        <Badge>4 items</Badge>
      </CardHeader>
      <CardContent className="divide-y">
        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar size="md" src="/placeholder.svg?height=50&width=50">
              <AvatarFallback>Pd</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">Product 1</h3>
              <p className="text-gray-500">Description of the product</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <MinusIcon className="w-4 h-4" />
            </Button>
            <span>1</span>
            <Button size="icon" variant="ghost">
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar size="md" src="/placeholder.svg?height=50&width=50" />
            <div>
              <h3 className="text-lg font-semibold">Product 2</h3>
              <p className="text-gray-500">Description of the product</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <MinusIcon className="w-4 h-4" />
            </Button>
            <span>2</span>
            <Button size="icon" variant="ghost">
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <Button>Proceed to Payment</Button>
      </CardFooter>
    </Card>
  );
}

function MinusIcon(props) {
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
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
