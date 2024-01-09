/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qLKZklA7OoW
 */
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
