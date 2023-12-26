/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bJCxuajwEa7
 */
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductCart() {
  return (
    <Card className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div
        className="flex items-end justify-end h-56 w-full bg-cover"
        style={{
          backgroundImage: "url(/placeholder.svg?height=200&width=200)",
        }}
      >
        <Button
          aria-label="Add to Cart"
          className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
        >
          <ShoppingCartIcon className="w-5 h-5" />
        </Button>
      </div>
      <CardContent className="px-5 py-3">
        <h2 className="text-gray-900 text-lg">Product Name</h2>
        <p className="text-gray-600">Product Description</p>
      </CardContent>
      <div className="px-5 py-3 grid grid-cols-2 gap-4 items-center">
        <span className="text-gray-900 font-bold">$129</span>
        <Badge className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 last:mr-0 mr-1">
          10% off
        </Badge>
        <div className="flex items-center gap-0.5">
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
        </div>
      </div>
    </Card>
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
