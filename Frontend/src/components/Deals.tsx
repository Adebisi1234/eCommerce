/**
 * v0 by Vercel.
 * @see https://v0.dev/t/calh55nFxz8
 */
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import ProductCart from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Deals() {
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
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
            <ProductCart />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
            <ProductCart />
          </CarouselItem>
          <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
            <ProductCart />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="" />
        <CarouselNext className="-right-5" />
      </Carousel>
    </div>
  );
}
