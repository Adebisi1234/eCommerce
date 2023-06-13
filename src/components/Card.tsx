import wishList from "../assets/wishList.svg";
import wishListed from "../assets/wishListed.svg";
import plus from "../assets/plus.svg";
import { useNavigate } from "react-router-dom";
import { useTasks, useTasksDispatch } from "../context/Store";
const Card = ({ name }: { name: string }) => {
  const { clocks } = useTasks();
  const clock = clocks.find((clock) => clock?.name === name);
  const navigate = useNavigate();
  const dispatch = useTasksDispatch();
  return (
    <div className="w-[144px] relative mb-6 h-[255px]">
      <div className="image mb-3">
        {/* before pseudo for small */}
        <img
          src={clock?.imgUrl}
          className="h-[194px] w-[144px] object-cover"
          height={194}
          width={144}
          alt="product image"
          onClick={() => {
            navigate(`/product/${clock?.name}`);
          }}
        />
        <div className="wishList absolute top-3 right-3 h-8 w-8 border-2 rounded-full flex justify-center items-center">
          <img
            src={clock?.wishListed ? wishListed : wishList}
            alt="add to wishlist"
            onClick={() => {
              dispatch({
                type: "wishList",
                payload: clock?.name,
              });
              // return (isWishListed = !isWishListed);
            }}
          />
        </div>
      </div>
      <p
        className="text-[#7B7B7B] font-semibold text-xs mb-1"
        onClick={() => {
          navigate(`/product/${clock?.name}`);
        }}
      >
        {clock?.name}
      </p>
      <div className="price flex justify-between items-center w-full h-6">
        <p
          className="text-black text-sm font-bold"
          onClick={() => {
            navigate(`/product/${clock?.name}`);
          }}
        >
          {clock?.priceWord} NGN
        </p>
        <img
          src={plus}
          alt="add to cart"
          className="h-6 w-6"
          onClick={() => {
            dispatch({
              type: "addToCart",
              payload: name,
            });
          }}
        />
      </div>
    </div>
  );
};

export default Card;
