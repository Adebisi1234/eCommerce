import { Link, useNavigate } from "react-router-dom";
import right from "../assets/chevron-right.svg";
import { useTasks } from "../context/Store";
import mode from "../assets/mode.svg";
const Sidebar = () => {
  const { user } = useTasks();

  const navigate = useNavigate();
  return (
    <div className="h-screen z-50 flex p-6  flex-col gap-4 overflow-y-scroll">
      <img src={mode} className="h-6 w-6" alt="Dark mode" />
      <Link to="/cart">
        <div className="flex justify-between items-center">
          <h2>Cart</h2>
          <img src={right} alt="right icon" />
        </div>
      </Link>
      <Link to="/wishlist">
        <div className="flex justify-between items-center">
          <h2>Wish list</h2>
          <img src={right} alt="right icon" />
        </div>
      </Link>
      <Link to="/categories">
        <div className="flex justify-between items-center">
          <h2>Categories</h2>
          <img src={right} alt="right icon" />
        </div>
      </Link>
      <Link to="/orders">
        <div className="flex justify-between items-center">
          <h2>Orders</h2>
          <img src={right} alt="right icon" />
        </div>
      </Link>
      <div className="details">
        <h2 className=" font-bold text-lg mb-2">Details</h2>
        {user ? (
          <>
            <div className="mb-2 ml-2 name border-b">
              <h5 className="mb-1 font-bold">name</h5>
              <p className="text-sm text-[#7a7a7a]">{user?.name}</p>
            </div>
            <div className="mb-2 ml-2 number border-b">
              <h5 className="mb-1 font-bold">number</h5>
              <p className="text-sm text-[#7a7a7a]">{user?.number}</p>
            </div>
            <div className="mb-2 ml-2 email border-b">
              <h5 className="mb-1 font-bold">email</h5>
              <p className="text-sm text-[#7a7a7a]">{user?.email}</p>
            </div>
            <div className="mb-2 ml-2 address border-b">
              <h5 className="mb-1 font-bold">address</h5>
              <p className="text-sm text-[#7a7a7a]">{user?.address}</p>
            </div>
            <div className="mb-2 ml-2 delivery border-b">
              <h5 className="mb-1 font-bold">delivery</h5>
              <p className="text-sm text-[#7a7a7a]">
                {user?.delivery === "door"
                  ? "Deliver to doorstep"
                  : "Pick-up Delivery"}
              </p>
            </div>
            <button
              className="flex w-full h-12 gap-3 px-6 py-3 mx-auto mt-10 justify-center items-center text-white bg-black"
              onClick={() => navigate("/details")}
            >
              Enter/Update information
            </button>
          </>
        ) : (
          <>
            <div>
              No data found. <br /> Please Login/Sign-up
            </div>
            <button
              className="flex w-full h-12 gap-3 px-6 py-3 mx-auto mt-10 justify-center items-center text-white bg-black"
              onClick={() => navigate("/details")}
            >
              Enter/Update information
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
