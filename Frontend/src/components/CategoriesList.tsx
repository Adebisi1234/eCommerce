/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IXOdvqfXbFt
 */
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Header } from "./Header";

export default function CategoriesList() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold tracking-tight">
            Product Categories
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Card className="transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center gap-4 p-4">
            <ShoppingCartIcon className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Fashion</h3>
            <p className="text-sm text-gray-500">
              Explore the latest trends and essentials designed for any and
              every occasion!
            </p>
            <a className="mt-auto" href="#">
              <Button variant="outline">Shop Now</Button>
            </a>
          </CardContent>
        </Card>
        <Card className="transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center gap-4 p-4">
            <BookIcon className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Books</h3>
            <p className="text-sm text-gray-500">
              Immerse yourself in a diverse range of books and ebooks from every
              genre.
            </p>
            <a className="mt-auto" href="#">
              <Button variant="outline">Shop Now</Button>
            </a>
          </CardContent>
        </Card>
        <Card className="transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center gap-4 p-4">
            <GamepadIcon className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Gaming</h3>
            <p className="text-sm text-gray-500">
              Get your hands on the latest gaming consoles, video games, and
              accessories.
            </p>
            <a className="mt-auto" href="#">
              <Button variant="outline">Shop Now</Button>
            </a>
          </CardContent>
        </Card>
        <Card className="transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center gap-4 p-4">
            <PhoneIcon className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Electronics</h3>
            <p className="text-sm text-gray-500">
              Discover a wide assortment of electronics from top brands at
              discounted prices.
            </p>
            <a className="mt-auto" href="#">
              <Button variant="outline">Shop Now</Button>
            </a>
          </CardContent>
        </Card>
        <Card className="transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center gap-4 p-4">
            <HomeIcon className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Home & Kitchen</h3>
            <p className="text-sm text-gray-500">
              Upgrade your home with our range of kitchen appliances, decorative
              items, and more.
            </p>
            <a className="mt-auto" href="#">
              <Button variant="outline">Shop Now</Button>
            </a>
          </CardContent>
        </Card>
        <Card className="transition-transform hover:scale-105">
          <CardContent className="flex flex-col items-center gap-4 p-4">
            <DumbbellIcon className="w-10 h-10" />
            <h3 className="font-semibold text-lg">Fitness</h3>
            <p className="text-sm text-gray-500">
              Discover our range of fitness equipment and accessories to help
              you stay fit and active.
            </p>
            <a className="mt-auto" href="#">
              <Button variant="outline">Shop Now</Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function BookIcon(props: any) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function DumbbellIcon(props: any) {
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
      <path d="m6.5 6.5 11 11" />
      <path d="m21 21-1-1" />
      <path d="m3 3 1 1" />
      <path d="m18 22 4-4" />
      <path d="m2 6 4-4" />
      <path d="m3 10 7-7" />
      <path d="m14 21 7-7" />
    </svg>
  );
}

function GamepadIcon(props: any) {
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
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
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
