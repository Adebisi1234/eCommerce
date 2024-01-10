import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

export default function Sidebar() {
  return (
    <aside className="absolute h-full px-4 py-6 -translate-x-full w-60 md:translate-x-0 md:static">
      <div className="flex items-center mb-6">
        <Avatar className="mr-2 h-9 w-9">
          <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <h2 className="text-lg font-bold">User Name</h2>
      </div>
      <nav className="flex flex-col flex-wrap">
        <a className="flex py-1.5 px-2 rounded hover:bg-gray-200" href="#">
          Cart
        </a>
        <a className="flex py-1.5 px-2 rounded hover:bg-gray-200" href="#">
          Orders
        </a>
        <a className="flex py-1.5 px-2 rounded hover:bg-gray-200" href="#">
          Categories
        </a>
        <a className="flex py-1.5 px-2 rounded hover:bg-gray-200" href="#">
          Categories
        </a>
        <a className="flex py-1.5 px-2 rounded hover:bg-gray-200" href="#">
          Categories
        </a>
        <a className="flex py-1.5 px-2 rounded hover:bg-gray-200" href="#">
          Categories
        </a>
        <a className="flex py-1.5 px-2 rounded hover:bg-gray-200" href="#">
          Categories
        </a>
        <a className="flex py-1.5 px-2 rounded hover:bg-gray-200" href="#">
          Categories
        </a>
      </nav>
    </aside>
  );
}

// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// // import { Checkbox } from "@/components/ui/checkbox"
// import { Button } from "@/components/ui/button"
// import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

// // export default function Sidebar2() {
// //   return (
// //     <div className="w-full max-w-[240px] flex flex-col gap-6 p-4">
// //       <h2 className="text-lg font-semibold">Product Categories</h2>
// //       <nav className="grid gap-2">
// //         <a className="text-base font-medium hover:underline" href="#">
// //           Electronics
// //         </a>
// //         <a className="text-base font-medium hover:underline" href="#">
// //           Fashion
// //         </a>
// //         <a className="text-base font-medium hover:underline" href="#">
// //           Home & Kitchen
// //         </a>
// //         <a className="text-base font-medium hover:underline" href="#">
// //           Books
// //         </a>
// //         <a className="text-base font-medium hover:underline" href="#">
// //           Toys & Games
// //         </a>
// //       </nav>
// //       <h2 className="mt-6 text-lg font-semibold">Filters</h2>
// //       <form className="space-y-4">
// //         <fieldset>
// //           <legend className="text-base font-medium">Price Range</legend>
// //           <div className="grid gap-2 mt-2">
// //             <Label className="text-sm" htmlFor="price-min">
// //               Min
// //             </Label>
// //             <Input className="w-full" id="price-min" type="number" />
// //             <Label className="text-sm" htmlFor="price-max">
// //               Max
// //             </Label>
// //             <Input className="w-full" id="price-max" type="number" />
// //           </div>
// //         </fieldset>
// //         <fieldset>
// //           <legend className="text-base font-medium">Brand</legend>
// //           <div className="grid gap-2 mt-2">
// //             <Label className="flex items-center gap-2 font-normal">
// //               <Checkbox id="brand-apple" />
// //               Apple{"\n                  "}
// //             </Label>
// //             <Label className="flex items-center gap-2 font-normal">
// //               <Checkbox id="brand-samsung" />
// //               Samsung{"\n                  "}
// //             </Label>
// //             <Label className="flex items-center gap-2 font-normal">
// //               <Checkbox id="brand-sony" />
// //               Sony{"\n                  "}
// //             </Label>
// //           </div>
// //         </fieldset>
// //         <fieldset>
// //           <legend className="text-base font-medium">Color</legend>
// //           <div className="grid gap-2 mt-2">
// //             <Label className="flex items-center gap-2 font-normal">
// //               <Checkbox id="color-black" />
// //               Black{"\n                  "}
// //             </Label>
// //             <Label className="flex items-center gap-2 font-normal">
// //               <Checkbox id="color-white" />
// //               White{"\n                  "}
// //             </Label>
// //             <Label className="flex items-center gap-2 font-normal">
// //               <Checkbox id="color-blue" />
// //               Blue{"\n                  "}
// //             </Label>
// //           </div>
// //         </fieldset>
// //         <Button className="w-full" variant="outline">
// //           Clear Filters
// //         </Button>
// //       </form>
// //       <h2 className="mt-6 text-lg font-semibold">Sort By</h2>
// //       <DropdownMenu>
// //         <DropdownMenuTrigger asChild>
// //           <Button className="w-full" variant="outline">
// //             Relevance
// //           </Button>
// //         </DropdownMenuTrigger>
// //         <DropdownMenuContent align="end" className="w-[200px]">
// //           <DropdownMenuRadioGroup value="relevance">
// //             <DropdownMenuRadioItem value="relevance">Relevance</DropdownMenuRadioItem>
// //             <DropdownMenuRadioItem value="low-to-high">Price: Low to High</DropdownMenuRadioItem>
// //             <DropdownMenuRadioItem value="high-to-low">Price: High to Low</DropdownMenuRadioItem>
// //           </DropdownMenuRadioGroup>
// //         </DropdownMenuContent>
// //       </DropdownMenu>
// //     </div>
// //   )
// // }
