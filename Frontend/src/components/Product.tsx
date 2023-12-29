/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L8XuemfibzA
 */
import { Button } from "@/components/ui/button";

export default function Product() {
  return (
    <div
      key="1"
      className="flex flex-col p-6 mx-auto bg-gray-100 rounded-lg shadow-lg md:flex-row dark:bg-gray-900 md:p-12 max-w-7xl"
    >
      <div className="md:w-1/2">
        <img
          alt="Product Image"
          className="aspect-[1/1] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 mb-6 md:mb-0"
          height="500"
          src="/placeholder.svg"
          width="500"
        />
      </div>
      <div className="md:w-1/2 md:pl-10">
        <h1 className="mb-4 text-3xl font-bold lg:text-4xl">Product Name</h1>
        <div className="flex items-center gap-2 mb-4">
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
        </div>
        <p className="mb-6">Product Description</p>
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">$99</div>
          <div className="text-sm font-bold text-red-500">10% OFF</div>
          <Button size="lg">Add to cart</Button>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props: { className: string }) {
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
