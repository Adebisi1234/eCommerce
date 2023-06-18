import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../../context/Store";
import CartItemsList from "../../components/CartItemsList";
import { useEffect, useState } from "react";
import { clocks } from "../../types/defaults";
const Cart = () => {
  const { cart, clocks } = useTasks();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<clocks>();
  const [total, setTotal] = useState<number>(1000);
  useEffect(() => {
    setCartItems(clocks.filter((clock) => cart.includes(clock.name)));
  }, [cart]);

  const query = cart.join("/");
  return (
    <div>
      <div className="top max-h-[385px] mt-10">
        <div className="flex flex-col items-center gap-10 mb-4 lists">
          {cart.length === 0 && (
            <p>Please select some clocks you wish to buy </p>
          )}
          {cartItems?.map((item) => {
            return (
              <CartItemsList
                key={item.name}
                img={item.imgUrl}
                name={item.name}
                price={item.price}
                priceWord={item.priceWord}
                maxNum={item.amount}
                setTotal={setTotal}
                total={total}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 p-6 mt-10 bg-white bottom">
        <h2 className="text-xl font-semibold text-center">Order Info</h2>
        <div className="flex flex-col gap-4 h-[200px] w-full mt-6">
          {cartItems?.map((clock) => {
            return (
              <div className="details text-[#7a7a7a] font-semibold h-6 justify-between flex">
                <p>{clock.name}</p>
                <p>{clock.priceWord} NGN</p>
              </div>
            );
          })}
          <div className="delivery text-[#7a7a7a] font-semibold h-6 justify-between flex">
            <p>Delivery</p>
            <p>1000 NGN</p>
          </div>
          <hr />
          <div className="flex justify-between h-6 font-semibold total">
            <p>Total</p>
            <p className="font-extrabold">{total} NGN</p>
          </div>
        </div>

        <button
          className="flex h-12 gap-3 px-6 py-3 mx-auto text-white bg-black"
          onClick={() => {
            if (cart.length > 0) {
              navigate(`/checkout/${query}`, {
                state: JSON.stringify([total, cart]),
              });
            }
          }}
        >
          Proceed to place order
        </button>
      </div>
    </div>
  );
};

export default Cart;
