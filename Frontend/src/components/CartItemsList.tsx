import { useRef, useState } from "react";
import { useTasksDispatch } from "../context/Store";
import trash from "../assets/Trash.svg";

const CartItemsList = ({
  img,
  name,
  priceWord,
  maxNum = 10,
  setRerender,
}: {
  img: string;
  name: string;
  priceWord: string;
  maxNum: number;
  setRerender: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const dispatch = useTasksDispatch();
  const [num, setNum] = useState(1);
  const minus = useRef<HTMLParagraphElement>(null);
  const plus = useRef<HTMLParagraphElement>(null);
  return (
    <>
      <div className="flex max-h-[140px] h-[100px] rounded-xl bg-[var(--bg-lightDark)] p-2 justify-between">
        <div className="flex items-center gap-4">
          <img
            src={img}
            alt="product image"
            className="w-20 object-cover h-full"
          />
          <div className="details">
            <p>{name}</p>
            <h3 className="font-extrabold text-lg">NGN {priceWord}</h3>
            <div className="count flex gap-3 justify-center items-center w-fit">
              <div
                className="minus border text-lg flex items-center justify-center p-1 cursor-pointer rounded-md h-[18px]"
                ref={minus}
                onClick={() => {
                  if (num !== 1) {
                    setNum(num - 1);
                  }
                  setRerender((prev) => prev + 1);
                }}
              >
                -
              </div>
              <div className="num text-lg">{num}</div>
              <div
                className="plus border text-lg flex items-center p-1 cursor-pointer rounded-md justify-center h-[18px]"
                ref={plus}
                onClick={() => {
                  if (num !== maxNum) {
                    setNum(num + 1);
                  }
                  setRerender((prev) => prev + 1);
                }}
              >
                +
              </div>
            </div>
          </div>
        </div>
        <div
          className="delete"
          onClick={() => {
            dispatch({
              type: "removeFromCart",
              payload: name,
            });
          }}
        >
          <img src={trash} alt="delete icon" />
        </div>
      </div>
    </>
  );
};

export default CartItemsList;
