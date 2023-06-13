import Header from "../../components/Header";
import edit from "../../assets/edit.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useTasks, useTasksDispatch } from "../../context/Store";

const Checkout = () => {
  const navigate = useNavigate();
  const { clocks, user } = useTasks();
  const dispatch = useTasksDispatch();
  const items: string[] | string = JSON.parse(useLocation().state);
  const cartItems = clocks.filter((clock) => {
    if (typeof items === "string") {
      return clock.name === items;
    } else {
      return items.some((item) => clock.name === item);
    }
  });
  return (
    <>
      <Header leftIcon="left" title="Place order" />
      <div className="flex flex-col gap-5 details">
        <div className="name">
          <h6 className="text-sm font-bold">Name</h6>
          <p className="font-semibold text-[#7a7a7a] mt-2">{user?.name}</p>
        </div>
        <div className="phone">
          <h6 className="text-sm font-bold">Phone number</h6>
          <p className="font-semibold text-[#7a7a7a] mt-2">{user?.number}</p>
        </div>
        <div className="delivery">
          <h6 className="text-sm font-bold">Delivery address</h6>

          <address className="font-semibold text-[#7a7a7a] mt-2">
            {user?.address}
          </address>
        </div>
        <div className="Shipping options">
          <h6 className="text-sm font-bold">Shipping option</h6>
          <select
            className="font-semibold w-full text-[#7a7a7a] mt-2"
            id="options"
            defaultValue={user?.delivery}
            disabled
          >
            <option value="door">Deliver to doorstep</option>
            <option value="pick-up">Pick-up delivery</option>
          </select>
        </div>
        <button
          className="flex items-center justify-center w-full h-12 gap-3 px-6 py-3 mx-auto text-black border-2 border-black"
          onClick={() => {
            navigate("/details", { state: JSON.stringify(items) });
          }}
        >
          <img src={edit} alt="edit icon" />
          Edit details
        </button>
      </div>
      <div className="flex flex-col items-center gap-10 py-6 px-3 bg-white bottom">
        {cartItems
          ? cartItems.map((clock) => {
              return (
                <div
                  key={clock.name}
                  className="flex items-center justify-between w-full name h-7"
                >
                  <p className="text-lg font-semibold text-[#7a7a7a]">
                    {clock.name}
                  </p>
                  <p className="text-2xl font-extrabold">
                    {clock.priceWord} NGN
                  </p>
                </div>
              );
            })
          : ""}

        <div className="terms">
          This are the terms and conditions and shit and shat and shot and slap,
          Yada Yada
        </div>
        <button
          className="flex items-center justify-center w-full h-12 gap-3 px-6 py-3 mx-auto text-white bg-black"
          onClick={() => {
            dispatch({
              type: "clearCart",
            });
            navigate("/");
          }}
        >
          Confirm purchase
        </button>
      </div>
    </>
  );
};

export default Checkout;
