/**
 * v0 by Vercel.
 * @see https://v0.dev/t/calh55nFxz8
 */
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Deals() {
  return (
    <div className="relative">
      <div className="absolute w-full flex justify-between top-1/2 transform -translate-y-1/2">
        <Button className="transform rotate-180" variant="outline">
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline">
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="font-bold text-lg">Deal of the Day</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              alt="Product Image"
              className="w-full h-64 object-cover rounded-lg mb-4"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h3 className="font-semibold text-lg mb-2">Stylish Sunglasses</h3>
            <p className="text-gray-500 mb-2">UV Protection, Polarized</p>
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xl text-red-500">$19.99</h4>
              <Badge className="bg-red-500 text-white">50% OFF</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <a href="#">
              <Button className="w-full">Shop Now</Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="font-bold text-lg">
              Limited Time Offer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img
              alt="Product Image"
              className="w-full h-64 object-cover rounded-lg mb-4"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h3 className="font-semibold text-lg mb-2">Leather Wallet</h3>
            <p className="text-gray-500 mb-2">Premium Quality, 6 Card Slots</p>
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xl text-red-500">$29.99</h4>
              <Badge className="bg-red-500 text-white">40% OFF</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <a href="#">
              <Button className="w-full">Shop Now</Button>
            </a>
          </CardFooter>
        </Card>
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="font-bold text-lg">Best Seller</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              alt="Product Image"
              className="w-full h-64 object-cover rounded-lg mb-4"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <h3 className="font-semibold text-lg mb-2">Wireless Earbuds</h3>
            <p className="text-gray-500 mb-2">Noise Cancellation, Waterproof</p>
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xl text-red-500">$59.99</h4>
              <Badge className="bg-red-500 text-white">30% OFF</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <a href="#">
              <Button className="w-full">Shop Now</Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Deals2() {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex gap-8 w-full transition-all duration-300 ease-in-out transform translate-x-0 lg:translate-x-[-100%] xl:translate-x-[-200%]">
        <article className="flex-shrink-0 w-full">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Deal of the day
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <img
                alt="Deal image"
                className="object-cover w-full h-60"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="mt-4 font-semibold text-lg md:text-xl">
                Winter Jacket
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Warm and comfortable
              </p>
              <div className="flex items-center gap-2 mt-2">
                <h4 className="font-semibold text-base md:text-lg line-through">
                  $99.99
                </h4>
                <Badge className="px-2 h-6 text-sm">50% OFF</Badge>
              </div>
              <h4 className="font-semibold text-base md:text-lg">$49.99</h4>
              <Button className="mt-4" size="sm">
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </article>
        <article className="flex-shrink-0 w-full">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Deal of the day
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <img
                alt="Deal image"
                className="object-cover w-full h-60"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="mt-4 font-semibold text-lg md:text-xl">
                Bluetooth Headset
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                High-quality sound
              </p>
              <div className="flex items-center gap-2 mt-2">
                <h4 className="font-semibold text-base md:text-lg line-through">
                  $79.99
                </h4>
                <Badge className="px-2 h-6 text-sm">30% OFF</Badge>
              </div>
              <h4 className="font-semibold text-base md:text-lg">$55.99</h4>
              <Button className="mt-4" size="sm">
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </article>
        <article className="flex-shrink-0 w-full">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Deal of the day
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <img
                alt="Deal image"
                className="object-cover w-full h-60"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h3 className="mt-4 font-semibold text-lg md:text-xl">
                Fitness Watch
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Track your fitness
              </p>
              <div className="flex items-center gap-2 mt-2">
                <h4 className="font-semibold text-base md:text-lg line-through">
                  $199.99
                </h4>
                <Badge className="px-2 h-6 text-sm">40% OFF</Badge>
              </div>
              <h4 className="font-semibold text-base md:text-lg">$119.99</h4>
              <Button className="mt-4" size="sm">
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </article>
      </div>
    </section>
  );
}
