/**
 * v0 by Vercel.
 * @see https://v0.dev/t/syt27khDuwo
 */
import { Button } from "@/components/ui/button";
import ProductCart from "./ProductCard";
import { Header } from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 py-6 sm:py-12 md:py-24 lg:py-32">
        <section className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Featured Product"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="./src/components/511292.jpg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Featured Product
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Our newest and most popular product.
              </p>
              <Button className="self-start">Shop Now</Button>
            </div>
          </div>
        </section>
        <section className="container px-4 md:px-6 py-6 sm:py-12 md:py-24 lg:py-32">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Shop Our Products
            </h2>
            <Button>View All</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </>
  );
}
