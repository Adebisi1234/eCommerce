import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
// Toast component
export const CartIcon = () => {
  const navigate = useNavigate();
  return (
    <Button
      aria-label="Add to Cart"
      className="fixed right-0 z-20 p-3 mx-5 text-white bg-blue-600 rounded-full bottom-3 h-fit w-fit aspect-square hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
      onClick={() => {
        const userId = localStorage.getItem("id");
        navigate(`/cart/${userId}`);
      }}
    >
      <ShoppingCartIcon className="w-10 h-10" />
    </Button>
  );
};

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
