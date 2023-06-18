import Card from "../../components/Card";
import Header from "../../components/Header";
import filter from "../../assets/filter.svg";
// import clock from "../../images/clock2.jpg";
import Filter from "../../components/Filter";
import { useTasks } from "../../context/Store";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { clocks } from "../../types/defaults";
const Search = () => {
  const query = useParams().query;

  const Allclocks = useTasks().clocks.filter((clock) => {
    if (clock?.name.toLowerCase().includes(query!.toLowerCase())) {
      return true;
    } else if (
      typeof clock?.category === "object"
        ? clock?.category.some((el) =>
            el.toLowerCase().includes(query!.toLowerCase())
          )
        : clock?.category.toLowerCase().includes(query!.toLowerCase())
    ) {
      return true;
    } else {
      return false;
    }
  });

  const [clocks, setClocks] = useState(Allclocks);
  const num = clocks.length;
  const [show, setShow] = useState(false);
  const [filt, setFilt] = useState<string>("");
  console.log(filt);
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
        // setClocks([...clocks.sort((a, b) => b.price - a.price)]);
        console.log(
          "test",
          clocks.sort((a, b) => b.price - a.price)
        );
      } else if (filt === "Newest") {
        const filteredClocks = [...clocks].sort(
          (a, b) => Number(a?.updatedAt) - Number(b?.updatedAt!)
        );
        setClocks(filteredClocks);
        // setClocks([
        //   ...clocks.sort(
        //     (a, b) => Number(a?.updatedAt) - Number(b?.updatedAt!)
        //   ),
        // ]);
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
      <div className="filter flex justify-between items-center relative">
        <h4 className="text-center font-bold text-[#7a7a7a] mb-2 text-base">
          {num} items..
        </h4>
        <img src={filter} alt="filter icon" onClick={() => setShow(!show)} />
        {show && (
          <div className="absolute top-8 right-0 z-50">
            <Filter setShow={setShow} setFilt={setFilt} />
          </div>
        )}
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 w-full place-items-center gap-y-6 gap-x-6">
        {clocks.map((clock) => {
          return <Card name={clock.name} />;
        })}
      </div>
    </>
  );
};

export default Search;
