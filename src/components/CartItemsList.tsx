import { useEffect, useRef, useState } from "react";
import { useTasksDispatch } from "../context/Store";

const CartItemsList = ({
  img,
  name,
  price,
  priceWord,
  maxNum = 10,
  setTotal,
  total,
}: {
  img: string;
  name: string;
  price: number;
  priceWord: string;
  maxNum: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  total: number;
}) => {
  const dispatch = useTasksDispatch();
  const totalRef = useRef(total);
  const [num, setNum] = useState(1);
  const minus = useRef<HTMLParagraphElement>(null);
  const plus = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    setTotal(1000 + price);
  }, [name]);
  return (
    <div className="w-full flex justify-between items-center gap-14 h-[49px]">
      <div className="flex items-center gap-4">
        <img src={img} alt="watch icon" className="w-12 h-12" />
        <div>
          <p className="text-[#7a7a7a] font-medium text-sm">{name}</p>
          <p className="text-sm font-bold">{priceWord} NGN</p>
        </div>
      </div>

      <div className="flex items-center gap-3 num h-9">
        <p
          className={`text-[#7a7a7a] text-2xl ${
            num === 1 ? "hidden" : ""
          } cursor-pointer`}
          onClick={() => {
            if (num !== 1) {
              setNum((pre) => pre - 1);
              setTotal((prev) => prev - price);
            }
          }}
          ref={minus}
        >
          -
        </p>
        <p className="text-lg font-semibold">{num}</p>
        <p
          className={`text-[#7a7a7a] ${
            num === maxNum ? "hidden" : ""
          } text-2xl cursor-pointer`}
          onClick={() => {
            if (num !== maxNum) {
              setNum((pre) => pre + 1);
              setTotal((prev) => prev + price);
            }
          }}
          ref={plus}
        >
          +
        </p>
      </div>
      <div
        className="canc cursor-pointer"
        onClick={() => {
          dispatch({
            type: "removeFromCart",
            payload: name,
          });
          setTotal(totalRef.current);
        }}
      >
        X
      </div>
    </div>
  );
};

export default CartItemsList;
