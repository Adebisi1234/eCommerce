import { useNavigate } from "react-router-dom";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <a
        className="flex items-center justify-center"
        onClick={() => {
          navigate("/");
        }}
      >
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => {
            navigate("/shop");
          }}
        >
          Shop
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => {
            navigate("/categories");
          }}
        >
          Categories
        </a>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <Avatar>
                <AvatarImage>
                  <img
                    alt="Avatar"
                    className="rounded-full bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:from-black dark:via-gray-600 dark:to-gray-300 animate-pulse aspect-square object-cover"
                    height="32"
                    src="/placeholder.svg"
                    onLoad={(ev) => {
                      ev.currentTarget.classList.remove("animate-pulse");
                    }}
                    width="32"
                  />
                </AvatarImage>
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
