import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useTasks, useTasksDispatch } from "../../context/Store";
import { useRef } from "react";
const Details = ({ disabled = false }: { disabled: boolean }) => {
  const navigate = useNavigate();
  const { user } = useTasks();
  const dispatch = useTasksDispatch();
  const name = useRef<HTMLInputElement>(null);
  const number = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const items = useLocation().state;

  const delivery = useRef<HTMLSelectElement>(null);
  return (
    <div>
      <Header leftIcon="left" />
      <form className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 w-full max-h-[74px] name">
          <label className="text-sm font-bold" htmlFor="name">
            Name
          </label>
          <input
            disabled={disabled}
            className="p-2 bg-[#dfdfdf] text-[#7a7a7a] font-semibold h-[45px]"
            type="text"
            placeholder={user?.name}
            id="name"
            ref={name}
          />
        </div>
        <div className="flex flex-col gap-2 w-full max-h-[74px] phone">
          <label className="text-sm font-bold" htmlFor="number">
            Phone number
          </label>
          <input
            disabled={disabled}
            className="p-2 bg-[#dfdfdf] text-[#7a7a7a] font-semibold h-[45px]"
            type="tel"
            placeholder={user?.number}
            id="number"
            ref={number}
          />
        </div>
        <div className="flex flex-col gap-2 w-full max-h-[74px] email">
          <label className="text-sm font-bold" htmlFor="email">
            Email Address
          </label>
          <input
            disabled={disabled}
            className="p-2 bg-[#dfdfdf] text-[#7a7a7a] font-semibold h-[45px]"
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            ref={email}
          />
        </div>
        <div className="flex flex-col gap-2 w-full max-h-[74px] address">
          <label className="text-sm font-bold" htmlFor="address">
            Delivery Address
          </label>
          <input
            disabled={disabled}
            className="p-2 bg-[#dfdfdf] text-[#7a7a7a] font-semibold h-[45px]"
            type="address"
            placeholder={user?.address}
            id="address"
            ref={address}
          />
        </div>

        <div className="flex flex-col gap-2 w-full max-h-[74px] option">
          <label className="text-sm font-bold" htmlFor="options">
            Shipping options
          </label>
          <select
            className="p-2 bg-[#dfdfdf] text-[#7a7a7a] font-semibold h-[45px]"
            id="options"
            defaultValue={user?.delivery}
            disabled={disabled}
            ref={delivery}
          >
            <option value="door">Deliver to doorstep</option>
            <option value="pick-up">Pick-up delivery</option>
          </select>
        </div>
      </form>
      <button
        className="flex w-full h-12 gap-3 px-6 py-3 mx-auto mt-10 justify-center items-center text-white bg-black"
        onClick={() => {
          dispatch({
            type: "updateUser",
            payload: {
              name: name.current?.value,
              number: number.current?.value,
              email: email.current?.value,
              address: address.current?.value,
              delivery: delivery.current?.value,
            },
          });
          let inputsArr: HTMLInputElement[] = [
            ...document.getElementsByTagName("input"),
          ];
          if (inputsArr.every((input) => input.value.length > 2)) {
            navigate("/checkout/family", {
              replace: true,
              state: items,
            });
          } else {
            alert(
              " please input something to every box \n And I promise to remove this shit soon"
            );
          }
        }}
      >
        Enter/Update information
      </button>
    </div>
  );
};

export default Details;
