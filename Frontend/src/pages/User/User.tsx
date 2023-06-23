import userIcon from "../../assets/User.png";
import Footer from "../../components/Footer";
import { useTasks } from "../../context/Store";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { user } = useTasks();
  const navigate = useNavigate();
  return (
    <>
      <header className="flex items-center h-[30px] mt-[30px] gap-[91px]">
        <svg
          className="fav"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => navigate("..")}
        >
          <path d="M674.891852 133.404444 322.275556 498.536296c-1.137778 1.232593-2.085926 2.56-2.939259 3.982222-4.361481 7.205926-3.508148 16.592593 2.56 22.945185l352.616296 365.131852c7.395556 7.68 19.816296 7.774815 27.306667 0 7.205926-7.395556 6.826667-19.342222-0.379259-26.737778l-339.626667-351.762963c0 0 0 0 0-0.094815l340.005926-352.047407c7.205926-7.395556 7.49037-19.342222 0.379259-26.737778C694.708148 125.62963 682.287407 125.724444 674.891852 133.404444z" />
        </svg>
        <h1>Profile Details</h1>
      </header>
      <div className="bg-[var(--highlight)] h-[99px] w-full mt-16 flex justify-center items-center gap-8 rounded-[20px]">
        <div className="img h-[60px] w-[60px] rounded-full shadow-sm shadow-[var(--highlight)]">
          <img
            src={userIcon}
            alt="user icon"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="name">
          <h1 className="text-xl font-bold">{user?.name}</h1>
        </div>
      </div>
      <div className="share mt-6 h-[60px] flex justify-between items-center p-5 bg-[var(--bg-lightDark)] rounded-[20px]">
        <p className="max-w-[139px] font-semibold text-sm">
          Share your review on products
        </p>
        <button
          className="w-[119px] h-8 bg-[var(--highlight)] rounded-3xl"
          disabled
        >
          Share review
        </button>
      </div>
      <div className="details flex flex-col gap-[35px] mt-10">
        <h1>Your Details</h1>
        <div className="flex justify-between items-center">
          <p className="max-w-[179px] overflow-hidden text-ellipsis ">Name</p>
          <p className="max-w-[179px] overflow-hidden text-ellipsis ">
            {user?.name}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="max-w-[179px] overflow-hidden text-ellipsis ">
            Address
          </p>
          <address className="max-w-[179px] overflow-hidden text-ellipsis ">
            {user?.address}
          </address>
        </div>
        <div className="flex justify-between items-center">
          <p className="max-w-[179px] overflow-hidden text-ellipsis ">email</p>
          <p className="max-w-[179px] overflow-hidden text-ellipsis ">
            {user?.email}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="max-w-[179px] overflow-hidden text-ellipsis ">
            phone no.
          </p>
          <p className="max-w-[179px] overflow-hidden text-ellipsis ">
            {user?.number}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="max-w-[179px] overflow-hidden text-ellipsis ">
            delivery method
          </p>
          <p className="max-w-[179px] overflow-hidden text-ellipsis ">
            {user?.delivery}
          </p>
        </div>
      </div>
      <div className="shared mt-10 bg-[var(--bg-lightDark)]">
        <h1>Shared review</h1>
        <p className="mt-5">Work in progress....</p>
      </div>
      <Footer />
    </>
  );
};

export default User;
