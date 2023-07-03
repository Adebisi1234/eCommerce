import wishList from "../assets/wishList.svg";
import wishListed from "../assets/wishListed.svg";
import { useNavigate } from "react-router-dom";
import { useTasks, useTasksDispatch } from "../context/Store";
import { useState } from "react";
const Card = ({ name }: { name: string }) => {
  const { clocks, user } = useTasks();
  const clock = clocks.find((clock) => clock?.name === name);
  const navigate = useNavigate();
  const dispatch = useTasksDispatch();
  const [isInCart, setIsInCart] = useState<boolean>(
    Boolean(user?.cart.includes(clock!.name))
  );
  return (
    <div className="max-w-[170px] w-[140px] pb-2 bg-[var(--bg-lightDark)] h-fit rounded-[25px]">
      <div className="relative z-0 smallUrl">
        <img
          className="img h-[200px] object-cover rounded-[25px]"
          src={clock?.imgUrl}
          height={250}
          width={170}
          alt={clock?.name}
          onClick={() => {
            navigate(`/product/${clock?.name}`);
          }}
        />
        <div className="absolute z-0 p-2 border rounded-full right-3 top-4 favorite">
          <img
            src={
              user?.favorites?.includes(
                clock?.name ? clock.name : "lskdaldfkdalfnadsfk"
              )
                ? wishListed
                : wishList
            }
            alt="favorite?"
            className="w-5 h-5"
            onClick={() => {
              console.log("clicked", user?.favorites);
              dispatch({
                type: "wishList",
                payload: clock?.name,
              });
            }}
          />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div
          className="pl-2 mt-4"
          onClick={() => {
            navigate(`/product/${clock?.name}`);
          }}
        >
          <h3 className="text-xs font-semibold">{clock?.name}</h3>
          <p className="text-sm font-bold">NGN {clock?.priceWord}</p>
        </div>
        <div
          className={`plus w-[30px] h-full ${
            isInCart ? "rotate-45" : ""
          } transition-all`}
          onClick={() => {
            if (isInCart) {
              dispatch({ type: "removeFromCart", payload: clock?.name });
              console.log("removed from cart");
              setIsInCart(false);
            } else {
              console.log("fuck");
              dispatch({ type: "addToCart", payload: clock?.name });
              setIsInCart(true);
            }
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Card;
