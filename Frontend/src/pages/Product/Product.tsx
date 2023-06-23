// import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks, useTasksDispatch } from "../../context/Store";
import close from "../../assets/Close.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Showcase from "../../components/Showcase";
const Product = () => {
  const navigate = useNavigate();
  const dispatch = useTasksDispatch();
  const { name } = useParams();

  const clock = useTasks().clocks.find((clock) => clock.name === name);

  return (
    <div className="h-screen flex flex-col">
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
      <div className="top h-[524px] mb-[30px] relative z-0 w-full mt-6  bg-white">
        {/* WIP */}
        <Showcase />
      </div>
      <div className="bottom h-[268px] rounded-tr-[120px] px-4 bg-[var(--bg-lightDark)]">
        <h1 className="font-semibold text-sm mt-[16px] text-white">
          {clock?.name}
        </h1>
        <div className="price max-h-[30px] mt-[10px] items-end flex w-fit gap-1">
          <h1 className="font-bold text-lg ">{clock?.priceWord} NGN</h1>
          <p className="text-white/70 font-light">/</p>
          <p className="text-white/70 font-light">Price incl all Taxes</p>
        </div>
        <div className="colors flex gap-[34px] mt-[10px] items-center w-2/3">
          <div className="red h-fit  text-sm text-center font-extrabold rounded-2xl w-[48px] bg-red-500">
            red
          </div>
          <div className="blue h-fit text-sm text-center font-extrabold  rounded-2xl w-[48px] bg-blue-500">
            blue
          </div>
          <div className="green h-fit text-sm text-center font-extrabold  rounded-2xl w-[48px] bg-green-500">
            green
          </div>
        </div>

        <div className="add mt-[20px] flex justify-between">
          <button
            className="w-[160px] h-[45px] rounded-[30px] bg-[var(--highlight)] text-white"
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
          <div className="flex justify-between items-center gap-10 mr-2">
            <svg
              className="fav"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                dispatch({
                  type: "wishList",
                  payload: clock?.name,
                });
                navigate("/wishlist");
              }}
            >
              <path
                d="M15.7307 2.07199C15.3297 1.66957 14.8531 1.35027 14.3284 1.1324C13.8038 0.914533 13.2412 0.802383 12.6731 0.802383C12.105 0.802383 11.5424 0.914533 11.0177 1.1324C10.4931 1.35027 10.0165 1.66957 9.61551 2.07199L9 2.69549L8.38449 2.07199C7.98346 1.66957 7.50694 1.35027 6.98225 1.1324C6.45756 0.914533 5.89503 0.802383 5.3269 0.802383C4.75878 0.802383 4.19624 0.914533 3.67155 1.1324C3.14686 1.35027 2.67034 1.66957 2.26932 2.07199C0.574655 3.76665 0.470737 6.62839 2.60505 8.80267L9 15.1976L15.3949 8.80267C17.5293 6.62839 17.4253 3.76665 15.7307 2.07199Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              className="fav"
              viewBox="0 0 18 21"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <path
                d="M16.96 7.95799C16.29 7.21799 15.28 6.78799 13.88 6.63799V5.87799C13.88 4.50799 13.3 3.18799 12.28 2.26799C11.7767 1.80654 11.1815 1.45664 10.5336 1.24122C9.88558 1.02581 9.19941 0.949735 8.51999 1.01799C6.12999 1.24799 4.11999 3.55799 4.11999 6.05799V6.63799C2.71999 6.78799 1.70999 7.21799 1.03999 7.95799C0.0699899 9.03799 0.09999 10.478 0.20999 11.478L0.90999 17.048C1.11999 18.998 1.90999 20.998 6.20999 20.998H11.79C16.09 20.998 16.88 18.998 17.09 17.058L17.79 11.468C17.9 10.478 17.92 9.03799 16.96 7.95799ZM8.65999 2.40799C9.14462 2.35931 9.63407 2.41284 10.0967 2.56514C10.5594 2.71743 10.9849 2.96509 11.3459 3.29212C11.7068 3.61915 11.9952 4.01827 12.1922 4.46369C12.3893 4.90911 12.4907 5.39092 12.49 5.87799V6.57799H5.50999V6.05799C5.50999 4.27799 6.97999 2.56799 8.65999 2.40799ZM5.41999 12.148H5.40999C4.85999 12.148 4.40999 11.698 4.40999 11.148C4.40999 10.598 4.85999 10.148 5.40999 10.148C5.96999 10.148 6.41999 10.598 6.41999 11.148C6.41999 11.698 5.96999 12.148 5.41999 12.148ZM12.42 12.148H12.41C11.86 12.148 11.41 11.698 11.41 11.148C11.41 10.598 11.86 10.148 12.41 10.148C12.97 10.148 13.42 10.598 13.42 11.148C13.42 11.698 12.97 12.148 12.42 12.148Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
