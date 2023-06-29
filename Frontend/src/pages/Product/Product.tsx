// import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks, useTasksDispatch } from "../../context/Store";
import close from "../../assets/Close.svg";
import wishlist from "../../assets/wishList.svg";
import favorite from "../../assets/Favorite.svg";
import Showcase from "../../components/Showcase";
const Product = () => {
  const navigate = useNavigate();
  const dispatch = useTasksDispatch();
  const { name } = useParams();
  const user = useTasks().user;
  const clock = useTasks().clocks.find((clock) => clock.name === name);

  return (
    /* 
    NAME PRICE
    DESCRIPTION
    COLORS
    ADD TO CART
    */
    <>
      <header className="flex items-center h-[30px] mt-4">
        <img
          src={close}
          alt="close icon"
          onClick={() => {
            navigate("..");
          }}
        />
        <h1
          className="text-[#e2e2e2] font-bold text-lg"
          onClick={() => {
            navigate("..");
          }}
        >
          Close
        </h1>
      </header>
      <div className="top h-[60vh] mb-[30px] w-full mt-6  bg-white">
        {/* WIP */}
        <Showcase />
      </div>
      <div className="px-4 bg-[var(--bg-lightDark)] py-4 bottom-0">
        <div className="name pt-7 flex justify-between">
          <h3 className="font-bold">{clock?.name}</h3>
          <h3 className="font-bold text-lg ">{clock?.priceWord} NGN</h3>
        </div>
        <div className="desc py-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem commodi
            unde quam laboriosam natus laborum.
          </p>
        </div>
        <h1>Colors: </h1>
        <div className="colors flex gap-5 mt-[10px] items-center w-2/3">
          <div className="red h-fit  text-sm text-center font-extrabold p-1 rounded-2xl w-[48px] bg-red-500">
            red
          </div>
          <div className="blue h-fit text-sm text-center font-extrabold  p-1 rounded-2xl w-[48px] bg-blue-500">
            blue
          </div>
          <div className="green h-fit text-sm text-center font-extrabold  p-1 rounded-2xl w-[48px] bg-green-500">
            green
          </div>
        </div>

        <div className="add mt-[20px] h-9 flex gap-6 justify-between items-center">
          <button
            className="w-full h-9 rounded-[30px] bg-[var(--highlight)] text-white"
            onClick={() => {
              dispatch({
                type: "addToCart",
                payload: clock?.name,
              });
              navigate("/cart");
            }}
          >
            ADD TO CART
          </button>
          <img
            src={user?.favorites.includes(name!) ? favorite : wishlist}
            className="h-[30px] w-[30px] object-cover text-white"
            alt="wishlist icon"
            onClick={() => {
              dispatch({
                type: "wishList",
                payload: name,
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
