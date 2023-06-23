import edit from "../../assets/edit.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useTasks, useTasksDispatch } from "../../context/Store";
import { PaystackButton } from "react-paystack";

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useTasks();
  const dispatch = useTasksDispatch();

  const total = useLocation().state;

  const componentProps = {
    email: user!.email,
    amount: Number(total) * 100,
    publicKey: "pk_test_406e44afd8d13715d52f62dad9d383d2035ee0e7",
    text: "Confirm purchase",
    onSuccess: () => {
      dispatch({
        type: "clearCart",
      });
      navigate("/");
    },
    onClose: () => navigate("/"),
  };
  return (
    <>
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
            navigate("/details");
          }}
        >
          <img src={edit} alt="edit icon" />
          Edit details
        </button>
      </div>
      <div className="flex flex-col items-center gap-10 py-6 px-3 bg-white bottom">
        <div className="flex items-center justify-between w-full name h-7">
          <p className="text-lg font-semibold text-[#7a7a7a]">Order</p>
          <p className="text-2xl font-extrabold">{total} NGN</p>
        </div>

        <div className="terms">
          This are the terms and conditions and shit and shat and shot and slap,
          Yada Yada
        </div>
        <PaystackButton
          className="flex items-center justify-center w-full h-12 gap-3 px-6 py-3 mx-auto text-white bg-black"
          {...componentProps}
        />
        {/* <button
          className="flex items-center justify-center w-full h-12 gap-3 px-6 py-3 mx-auto text-white bg-black"
          onClick={() => {
            dispatch({
              type: "clearCart",
            });
            navigate("/");
          }}
        >
          Confirm purchase
        </button> */}
      </div>
    </>
  );
};

export default Checkout;
