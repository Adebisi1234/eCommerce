import Card from "../../components/Card";
import Header from "../../components/Header";
import filter from "../../assets/filter.svg";
// import clock from "../../images/clock2.jpg";
import Filter from "../../components/Filter";
import { useTasks } from "../../context/Store";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Search = () => {
  const query = useParams().query;
  const Allclocks = useTasks().clocks;
  const clocks = Allclocks.filter((clock) => {
    if (clock.name.includes(query!.toLocaleLowerCase())) {
      return true;
    } else if (
      typeof clock.category === "object"
        ? clock.category.some((el) => el.includes(query!))
        : clock.category.includes(query!)
    ) {
      return true;
    } else {
      return false;
    }
  });
  const num = clocks.length;
  const [show, setShow] = useState(false);
  return (
    <>
      <Header leftIcon="left" title={query} item={0} />
      <div className="filter flex justify-between items-center relative">
        <h4 className="text-center font-bold text-[#7a7a7a] mb-2 text-base">
          {num} items..
        </h4>
        <img src={filter} alt="filter icon" onClick={() => setShow(!show)} />
        {show && (
          <div className="absolute top-8 right-0 z-50">
            <Filter setShow={setShow} />
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
