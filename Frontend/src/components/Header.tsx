export const Header = () => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <a className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Home
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Shop
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Categories
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </a>
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
