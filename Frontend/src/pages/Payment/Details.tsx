import { Link, useNavigate } from "react-router-dom";
import { useTasks, useTasksDispatch } from "../../context/Store";
import watch from "../../assets/watch.png";
import { useRef } from "react";
const Details = () => {
  const navigate = useNavigate();
  const { user } = useTasks();
  const dispatch = useTasksDispatch();
  const name = useRef<HTMLInputElement>(null);
  const number = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);

  const delivery = useRef<HTMLSelectElement>(null);
  return (
    <>
      <header className="flex gap-[48px] h-[40px] mt-5">
        <svg
          className="fav"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => navigate("..")}
        >
          <path d="M674.891852 133.404444 322.275556 498.536296c-1.137778 1.232593-2.085926 2.56-2.939259 3.982222-4.361481 7.205926-3.508148 16.592593 2.56 22.945185l352.616296 365.131852c7.395556 7.68 19.816296 7.774815 27.306667 0 7.205926-7.395556 6.826667-19.342222-0.379259-26.737778l-339.626667-351.762963c0 0 0 0 0-0.094815l340.005926-352.047407c7.205926-7.395556 7.49037-19.342222 0.379259-26.737778C694.708148 125.62963 682.287407 125.724444 674.891852 133.404444z" />
        </svg>
        <h1>Fill your profile</h1>
      </header>
      <div className="editDetails mt-[20px] w-full">
        <img
          src={watch}
          alt="watch logo"
          className="w-[60px] h-[60px] object-cover mx-auto mb-5"
        />
        <h1 className="text-center text-red-500 italic">
          Please enter every details correctly and crosscheck for error
        </h1>
        <h2 className="mt-3 text-center">
          Already have an account{" "}
          <Link to="/login" replace className="italic underline">
            login{" "}
          </Link>
        </h2>

        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (
              name.current!.value.length > 4 &&
              email.current!.value.length > 4 &&
              number.current!.value.length > 4 &&
              password.current!.value.length > 4 &&
              address.current!.value.length > 4
            ) {
              dispatch({
                type: "updateUser",
                payload: {
                  name: name.current!.value,
                  email: email.current!.value,
                  address: address.current!.value,
                  number: number.current!.value,
                  delivery: delivery.current!.value,
                  password: password.current!.value,
                },
              });
              navigate(-1);
            }
          }}
        >
          <div className="input h-[60px] py-2 flex items-center">
            <input
              required
              className="bg-[var(--bg-lightDark)] w-full h-full p-4 rounded-[30px]"
              type="text"
              placeholder="Name"
              ref={name}
            />
          </div>
          <div className="input h-[60px] py-2 flex items-center">
            <input
              required
              className="bg-[var(--bg-lightDark)] w-full h-full p-4 rounded-[30px]"
              type="email"
              placeholder="Email"
              ref={email}
            />
          </div>
          <div className="input h-[60px] py-2 flex items-center">
            <input
              required
              className="bg-[var(--bg-lightDark)] w-full h-full p-4 rounded-[30px]"
              type="password"
              placeholder="Password"
              ref={password}
            />
          </div>
          <div className="input h-[60px] py-2 flex items-center">
            <input
              required
              className="bg-[var(--bg-lightDark)] w-full h-full p-4 rounded-[30px]"
              type="tel"
              placeholder="Phone number"
              ref={number}
            />
          </div>
          <div className="input h-[60px] py-2 flex items-center">
            <input
              required
              className="bg-[var(--bg-lightDark)] w-full h-full p-4 rounded-[30px]"
              type="text"
              placeholder="Delivery address"
              ref={address}
            />
          </div>
          <div className="input h-[60px] py-2 flex items-center">
            <select
              className="bg-[var(--bg-lightDark)] w-full h-full px-4 rounded-[30px]"
              id="options"
              defaultValue={user?.delivery}
              ref={delivery}
            >
              <option value="door">Deliver to doorstep</option>
              <option value="pick-up">Pick-up delivery</option>
            </select>
          </div>
          <button className="bg-[var(--highlight)] h-10 mt-3 rounded-[30px] shadow-[var(--highlight)] shadow-sm flex gap-3 justify-center items-center w-full">
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default Details;
