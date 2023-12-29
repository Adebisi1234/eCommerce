/**
 * v0 by Vercel.
 * @see https://v0.dev/t/calh55nFxz8
 */
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import ProductCard, { ProductSkeleton } from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ProductDoc } from "@/types/types";

export default function Deals({ products }: { products?: ProductDoc[] }) {
  return (
    <div className="w-full h-fit">
      <Badge variant={"destructive"}>Top deals</Badge>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          {!products ? (
            <>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <ProductSkeleton />
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <ProductSkeleton />
              </CarouselItem>
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                <ProductSkeleton />
              </CarouselItem>
            </>
          ) : (
            products.map((v) => {
              return (
                <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                  <ProductCard
                    id={v._id}
                    name={v.name}
                    price={v.price}
                    discount={v.discount}
                    rating={v.rating}
                    desc={v.desc}
                    img={v.thumbnail}
                  />
                </CarouselItem>
              );
            })
          )}
        </CarouselContent>
        <CarouselPrevious className="" />
        <CarouselNext className="-right-5" />
      </Carousel>
    </div>
  );
}
