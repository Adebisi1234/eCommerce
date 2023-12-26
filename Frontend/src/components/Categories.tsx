/**
 * v0 by Vercel.
 * @see https://v0.dev/t/blBIDabZFMP
 */
// @ts-nocheck
import { CardContent, Card } from "@/components/ui/card";

export default function Categories() {
  return (
    <>
      <section className="w-full py-12">
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="grid gap-6 relative group">
                <a className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </a>
                <img
                  alt="Category 1"
                  className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-75 transition-opacity"
                  height="600"
                  src="/placeholder.svg"
                  width="450"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Category 1</h3>
                  <p className="text-sm leading-none">
                    Description for Category 1
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid gap-6 relative group">
                <a className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </a>
                <img
                  alt="Category 2"
                  className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-75 transition-opacity"
                  height="600"
                  src="/placeholder.svg"
                  width="450"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Category 2</h3>
                  <p className="text-sm leading-none">
                    Description for Category 2
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid gap-6 relative group">
                <a className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </a>
                <img
                  alt="Category 3"
                  className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-75 transition-opacity"
                  height="600"
                  src="/placeholder.svg"
                  width="450"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Category 3</h3>
                  <p className="text-sm leading-none">
                    Description for Category 3
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
