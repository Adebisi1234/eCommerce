// import Header from "../../components/Header";
import Card from "../../components/Card";
// import filter from "../../assets/filter.svg";
// import search from "../../assets/search.svg";
// import discount from "../../assets/discount.svg";
// import dashboard from "../../assets/dashboard.svg";
// import luxury from "../../assets/luxury.png";
// import fashion from "../../assets/fashion.svg";
// import sport from "../../assets/sport.png";
// import smart from "../../assets/smart.png";
// import Cat from "../../components/Cat";
// import Box from "../../components/Box";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useTasks } from "../../context/Store";
// import Filter from "../../components/Filter";
import { clocks } from "../../types/defaults";
import favorite from "../../assets/Favorite.svg";
import search from "../../assets/Search.svg";
import userIcon from "../../assets/User.png";
import Footer from "../../components/Footer";
const Home = () => {
  const navigate = useNavigate();
  const { user } = useTasks();
  const clocksArr = useTasks().clocks;
  const clocks = useRef<clocks>(clocksArr);
  const [query, setQuery]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");

  const showDialog = useRef<HTMLDialogElement>(null);
  return (
    <div className="relative z-0">
      <header className="flex justify-between items-center h-[30px] mt-6 bg-[var(--bg-dark)]">
        <h1 className="text-[22px] leading-8 font-medium text-[var(--highlight)]">
          Clocks
        </h1>
        <div className="flex items-center gap-5 icons">
          <img
            src={favorite}
            className="w-5 h-5 wishlists"
            onClick={() => navigate("/wishlist")}
          />
          <div className="profile h-[30px] w-[30px] relative rounded-full shadow shadow-[var(--highlight)] border">
            <img
              src={userIcon}
              alt="user icon"
              onClick={() => {
                console.log(user?.name, user?.name.length);
                if (user!.name.length < 3) {
                  showDialog.current?.show();
                } else {
                  navigate("/user");
                }
              }}
            />
            <dialog
              className="absolute w-fit top-10 -translate-x-full tra z-10 p-0 bg-[var(--bg-dark)] text-inherit"
              ref={showDialog}
            >
              <p
                className="bg-[var(--bg-lightDark)] p-2 w-full mb-2 border"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </p>
              <p
                className="bg-[var(--bg-lightDark)] p-2 w-full mb-2 border"
                onClick={() => {
                  navigate("/details");
                }}
              >
                Sign in
              </p>
              <button
                className="py-2 px-12 bg-[var(--highlight)] rounded-[30px] mb-2"
                onClick={() => {
                  showDialog.current?.close();
                }}
              >
                Close
              </button>
            </dialog>
          </div>
        </div>
      </header>
      <div className="search h-[55px] rounded-3xl mt-6 flex pl-4 items-center gap-5 bg-[var(--bg-lightDark)]">
        <img
          src={search}
          alt="search icon"
          className="w-[30px] h-[30px]"
          onClick={() => {
            navigate(`/search/${query}`);
          }}
        />
        <input
          type="text"
          placeholder="Search Products"
          className="w-full h-full bg-transparent outline-none text-white/90"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              navigate(`/search/${query}`);
            }
          }}
        />
      </div>

      <div className="buttons mb-[30px] w-full justify-between flex">
        <Link to="/search/trending">
          <button className="bg-[var(--highlight)] h-[55px] rounded-[30px] w-[172px] mt-6 text-white">
            Trending
          </button>
        </Link>
        <Link to="/categories">
          <button className=" bg-[var(--bg-lightDark)] h-[55px] rounded-[30px] w-[172px] mt-6 text-white">
            Category
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-between w-full gap-y-5">
        {clocks.current.map((clock) => {
          return <Card name={clock?.name} key={clock?.name} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
