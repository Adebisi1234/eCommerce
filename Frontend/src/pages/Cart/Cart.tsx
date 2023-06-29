import { Link, useNavigate } from "react-router-dom";
import { useTasks, useTasksDispatch } from "../../context/Store";
import CartItemsList from "../../components/CartItemsList";
import close from "../../assets/Close.svg";
import { useEffect, useState } from "react";
import { clocks } from "../../types/defaults";
import { PaystackButton } from "react-paystack";
const Cart = () => {
  const { cart, clocks, user } = useTasks();
  const dispatch = useTasksDispatch();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<clocks>();
  const [total, setTotal] = useState<number | undefined>(1000);
  const componentProps = {
    email: user!.email,
    amount: Number(total) * 100,
    publicKey: "pk_test_406e44afd8d13715d52f62dad9d383d2035ee0e7",
    text: "Checkout",
    onSuccess: () => {
      dispatch({
        type: "clearCart",
      });
      navigate("/");
    },
    onClose: () => navigate("/"),
  };
  const [rerender, setRerender] = useState<number>(1);
  console.log(`${total}`, rerender);

  useEffect(() => {
    setCartItems(clocks.filter((clock) => cart.includes(clock.name)));
  }, [cart]);

  useEffect(() => {
    const numbers = [...document.getElementsByClassName("num")].map((element) =>
      parseInt(element.textContent!)
    );
    setTotal(
      cartItems?.reduce(
        (total, clock, i) => total + clock.price * numbers[i],
        0
      )
    );
  });

  console.log(cart.length, cart);
  return (
    <div className=" flex flex-col">
      <header className="flex items-center mt-4">
        <img
          src={close}
          alt="close icon"
          onClick={() => {
            navigate("/");
          }}
        />
        <h1
          className="text-[#e2e2e2] font-bold text-lg"
          onClick={() => {
            navigate("/");
          }}
        >
          Close
        </h1>
      </header>
      <hr className="mt-[30px] mb-[25px]" />
      <div className="cartItems h-[60vh] overflow-scroll scrollbar flex flex-col gap-6 ">
        {cartItems && cartItems?.length > 0 ? (
          cartItems?.map((clock) => (
            <CartItemsList
              key={clock.createdAt}
              setRerender={setRerender}
              img={clock?.imgUrl}
              name={clock?.name}
              priceWord={clock?.priceWord}
              maxNum={clock?.amount}
            />
          ))
        ) : (
          <h1>
            No items found please check out our{" "}
            <Link to="/" className="italic">
              products
            </Link>
          </h1>
        )}
      </div>
      <div className="details h-[30vh] mt-auto p-3 flex flex-col">
        <hr />
        <div className="total h-14 flex justify-between flex-col">
          <div className="subt flex justify-between">
            <p>Subtotal:</p>
            <p>
              NGN{" "}
              {total ? (
                total
              ) : (
                <span className=" animate-pulse text-2xl font-extrabold inline-block text-[var(--color-dark)]">
                  ...
                </span>
              )}
            </p>
          </div>
          <div className="del flex justify-between">
            <p>Estimated shipping:</p>
            <p>NGN 1000</p>
          </div>
          <hr />
        </div>
        <div className="total mt-9 flex justify-between items-center">
          <h3>Estimated Total</h3>
          <p>NGN {total ? total + 1000 : 1000}</p>
        </div>
        {!(user?.name && user?.name.length > 3) ? (
          <button
            className="w-full bg-[var(--highlight)] mt-3 h-14 flex items-center justify-center rounded-[30px] "
            onClick={() => navigate("/details")}
          >
            Sign in to checkout
          </button>
        ) : (
          <PaystackButton
            className="w-full bg-[var(--highlight)] mt-3 h-14 flex items-center justify-center rounded-[30px] "
            {...componentProps}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
