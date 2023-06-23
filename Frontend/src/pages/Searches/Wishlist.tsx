import Card from "../../components/Card";
import Filter from "../../components/Filter";
import { useTasks } from "../../context/Store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import back from "../../assets/back.svg";
import slider from "../../assets/Slider.svg";
const Search = () => {
  const navigate = useNavigate();
  const { cart, user } = useTasks();

  const Allclocks = useTasks().clocks.filter((clock) =>
    user?.favorites.includes(clock.name)
  );

  const [clocks, setClocks] = useState(Allclocks);
  const num = clocks.length;
  const [show, setShow] = useState(false);
  const [filt, setFilt] = useState<string>("");
  useEffect(() => {
    function filterClock() {
      if (filt === "Low to High") {
        const filteredClocks = [...clocks].sort((a, b) => a.price - b.price);
        setClocks(filteredClocks);
        // setClocks([...clocks.sort((a, b) => a.price - b.price)]);
        console.log(
          "test",
          clocks.sort((a, b) => a.price - b.price)
        );
      } else if (filt === "High to Low") {
        const filteredClocks = [...clocks].sort((a, b) => b.price - a.price);
        setClocks(filteredClocks);

        console.log(
          "test",
          clocks.sort((a, b) => b.price - a.price)
        );
      } else if (filt === "Newest") {
        const filteredClocks = [...clocks].sort(
          (a, b) => Number(a?.updatedAt) - Number(b?.updatedAt!)
        );
        setClocks(filteredClocks);
      } else if (filt === "Popularity") {
        const filteredClocks = [...clocks].reverse();
        setClocks(filteredClocks);
      }
      console.log("clocks", clocks);
    }
    filterClock();
  }, [filt]);
  return (
    <>
      <header className="h-[35px] flex items-center justify-between">
        <div className="name flex items-center gap-[9px] ml-2">
          <img src={back} alt="back arrow" onClick={() => navigate("..")} />
          <h1 className="ml-[9px] font-extrabold text-xl text-[#e2e2e2]">
            Wishlist
          </h1>
        </div>
        <div className="filter relative">
          <img src={slider} alt="filter icon" onClick={() => setShow(!show)} />
          {show && <Filter setShow={setShow} setFilt={setFilt} />}
        </div>
      </header>
      <div className="mt-3 ml-4">{num} items</div>

      <div className="flex flex-wrap mt-6 justify-between w-full gap-y-5">
        {clocks.length > 0 ? (
          clocks.map((clock) => {
            return <Card name={clock?.name} key={clock?.name} />;
          })
        ) : (
          <div className="h-full w-full flex justify-center items-center">
            No Items found, please add some products to your wishlist
          </div>
        )}
      </div>

      <div className="bg-[var(--highlight)] rounded-full h-[75px] w-[75px] flex items-center fixed bottom-[54px] right-[23px] justify-center">
        <div className="relative w-fit h-fit">
          <svg
            width="30"
            height="30"
            className="fav"
            viewBox="0 0 18 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.96 7.95799C16.29 7.21799 15.28 6.78799 13.88 6.63799V5.87799C13.88 4.50799 13.3 3.18799 12.28 2.26799C11.7767 1.80654 11.1815 1.45664 10.5336 1.24122C9.88558 1.02581 9.19941 0.949735 8.51999 1.01799C6.12999 1.24799 4.11999 3.55799 4.11999 6.05799V6.63799C2.71999 6.78799 1.70999 7.21799 1.03999 7.95799C0.0699899 9.03799 0.09999 10.478 0.20999 11.478L0.90999 17.048C1.11999 18.998 1.90999 20.998 6.20999 20.998H11.79C16.09 20.998 16.88 18.998 17.09 17.058L17.79 11.468C17.9 10.478 17.92 9.03799 16.96 7.95799ZM8.65999 2.40799C9.14462 2.35931 9.63407 2.41284 10.0967 2.56514C10.5594 2.71743 10.9849 2.96509 11.3459 3.29212C11.7068 3.61915 11.9952 4.01827 12.1922 4.46369C12.3893 4.90911 12.4907 5.39092 12.49 5.87799V6.57799H5.50999V6.05799C5.50999 4.27799 6.97999 2.56799 8.65999 2.40799ZM5.41999 12.148H5.40999C4.85999 12.148 4.40999 11.698 4.40999 11.148C4.40999 10.598 4.85999 10.148 5.40999 10.148C5.96999 10.148 6.41999 10.598 6.41999 11.148C6.41999 11.698 5.96999 12.148 5.41999 12.148ZM12.42 12.148H12.41C11.86 12.148 11.41 11.698 11.41 11.148C11.41 10.598 11.86 10.148 12.41 10.148C12.97 10.148 13.42 10.598 13.42 11.148C13.42 11.698 12.97 12.148 12.42 12.148Z"
              fill="currentColor"
            />
          </svg>
          {cart.length ? (
            <div className="absolute right-0 -top-1 rounded-full h-2 w-2 bg-black"></div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
