import Header from "../../components/Header";
import Card from "../../components/Card";
import filter from "../../assets/filter.svg";
import search from "../../assets/search.svg";
import discount from "../../assets/discount.svg";
import dashboard from "../../assets/dashboard.svg";
import luxury from "../../assets/luxury.png";
import fashion from "../../assets/fashion.svg";
import sport from "../../assets/sport.png";
import smart from "../../assets/smart.png";
import Cat from "../../components/Cat";
import Box from "../../components/Box";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTasks } from "../../context/Store";
import Filter from "../../components/Filter";
const Home = () => {
  const navigate = useNavigate();
  const { clocks } = useTasks();
  const [query, setQuery]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");
  const cats = [
    { name: "All", icon: dashboard },
    { name: "Luxury", icon: luxury },
    { name: "fashion", icon: fashion },
    { name: "sports", icon: sport },
    { name: "smart", icon: smart },
  ];
  const [show, setShow] = useState(false);
  return (
    <>
      <Header leftIcon="menu" title="Home" rightIcon="cart" />
      <div className="flex h-10 gap-4 mx-2 search">
        <div className="flex w-full h-full gap-1 p-1 ml-1 border-2">
          <img
            src={search}
            alt="search icon"
            onClick={() => {
              if (query !== "") {
                navigate(`/search/${query}`);
              }
            }}
          />
          <input
            type="text"
            className="bg-transparent"
            placeholder="Search"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(e.target.value);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter" && query !== "") {
                navigate(`/search/${query}`);
              }
            }}
          />
        </div>
        <div className="relative h-full">
          <img
            src={filter}
            className="h-full"
            alt="filter"
            onClick={() => {
              setShow(!show);
            }}
          />
          {show && (
            <div className="absolute top-8 w-[200px] right-0 z-50">
              <Filter setShow={setShow} />
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 mb-3 collections">
        <h2 className="mb-4 font-bold">Browse collections</h2>
        <div className="flex gap-8 pt-2 mx-2 mb-8 overflow-x-scroll slide h-fit ">
          {cats.map((cat) => (
            <Cat name={cat.name} key={cat.name} icon={cat.icon} />
          ))}
        </div>
      </div>
      <div className="mb-8">
        <Box name="40% OFF" icon={discount} small="On all luxury watches" />
      </div>
      <div className="topPicks h-[292px] ">
        <h2 className="mb-3 font-bold">Top Picks</h2>

        <div className="grid w-full grid-cols-2 place-items-center gap-x-6">
          {clocks.map((clock) => {
            return <Card name={clock?.name} key={clock?.name} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
