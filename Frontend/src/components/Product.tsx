/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L8XuemfibzA
 */
import { Button } from "@/components/ui/button"

export default function Product() {
  return (
    <div
      key="1"
      className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 p-6 md:p-12 rounded-lg shadow-lg max-w-7xl mx-auto"
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
        <h1 className="font-bold text-3xl lg:text-4xl mb-4">Product Name</h1>
        <div className="flex items-center gap-2 mb-4">
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
        </div>
        <p className="mb-6">Product Description</p>
        <div className="flex items-center justify-between">
          <div className="font-bold text-4xl">$99</div>
          <div className="text-sm font-bold text-red-500">10% OFF</div>
          <Button size="lg">Add to cart</Button>
        </div>
      </div>
    </div>
  )
}

function StarIcon(props) {
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
  )
}
