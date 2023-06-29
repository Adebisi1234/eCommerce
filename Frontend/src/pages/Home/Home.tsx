import Card from "../../components/Card";
import { Link } from "react-router-dom";
import { useTasks } from "../../context/Store";

import Footer from "../../components/Footer";
import Search from "../../components/SearchComp";
import Header from "./Header";
import useWindowSize from "../../hooks/useWindowSize";

const Home = () => {
  const { clocks } = useTasks();
  const width = useWindowSize();
  const luxury = clocks.filter((clock) => clock.category.includes("luxury"));
  const forMen = clocks.filter((clock) => clock.category.includes("forMen"));
  const forWomen = clocks.filter((clock) =>
    clock.category.includes("forWomen")
  );
  const forKids = clocks.filter((clock) => clock.category.includes("forKids"));
  const trending = clocks.filter((clock) =>
    clock.category.includes("trending")
  );
  const forCouples = clocks.filter((clock) =>
    clock.category.includes("forCouples")
  );
  const budget = clocks.filter((clock) => clock.category.includes("budget"));
  return (
    <div className="relative z-0">
      <Header />
      {width <= 640 && <Search />}

      {width <= 640 && (
        <div className="buttons mb-[30px] w-full justify-between flex">
          <Link to="/search/trending">
            <button className="bg-[var(--highlight)] h-[40px] rounded-[30px] w-[120px] mt-6 text-white">
              Trending
            </button>
          </Link>
          <Link to="/categories">
            <button className=" bg-[var(--bg-lightDark)] h-[40px] rounded-[30px] w-[120px] mt-6 ">
              Category
            </button>
          </Link>
        </div>
      )}
      <div
        className={`grid grid-cols-2 sm:block gap-x-2 w-full gap-y-5 ${
          clocks?.length <= 0 ? "animate-pulse" : ""
        } mb-[58px] mt-6`}
      >
        {width <= 640 ? (
          clocks?.length > 0 ? (
            clocks.map((clock) => {
              return <Card name={clock?.name} key={clock?.name} />;
            })
          ) : (
            "No clocks found"
          )
        ) : (
          <>
            {luxury.length > 0 && (
              <div className="Luxury overflow-scroll w-full">
                <h1 className="ml-3 font-bold text-lg">Luxury watches</h1>
                <hr />
                <div
                  className={`grid pb-2 grid-rows-1 grid-flow-col sm:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-x-4 w-full overflow-scroll ${
                    clocks?.length <= 0 ? "animate-pulse" : ""
                  } mb-3 mt-6`}
                >
                  {luxury.map((clock) => {
                    return <Card name={clock.name} key={clock?.name} />;
                  })}
                </div>
              </div>
            )}
            {forMen.length > 0 && (
              <div className="men">
                <h1 className="ml-3 font-bold text-lg">For men watches</h1>
                <hr />
                <div
                  className={`grid pb-2 grid-rows-1 grid-flow-col sm:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-x-4 w-full overflow-scroll ${
                    clocks?.length <= 0 ? "animate-pulse" : ""
                  } mb-3 mt-6`}
                >
                  {forMen.map((clock) => {
                    return <Card name={clock.name} key={clock?.name} />;
                  })}
                </div>
              </div>
            )}
            {forWomen.length > 0 && (
              <div className="women">
                <h1 className="ml-3 font-bold text-lg">For women watches</h1>
                <hr />
                <div
                  className={`grid pb-2 grid-rows-1 grid-flow-col sm:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-x-4 w-full overflow-scroll ${
                    clocks?.length <= 0 ? "animate-pulse" : ""
                  } mb-3 mt-6`}
                >
                  {forWomen.map((clock) => {
                    return <Card name={clock.name} key={clock?.name} />;
                  })}
                </div>
              </div>
            )}
            {forKids.length > 0 && (
              <div className="Kids">
                <h1 className="ml-3 font-bold text-lg">For Kids watches</h1>
                <hr />
                <div
                  className={`grid pb-2 grid-rows-1 grid-flow-col sm:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-x-4 w-full overflow-scroll ${
                    clocks?.length <= 0 ? "animate-pulse" : ""
                  } mb-3 mt-6`}
                >
                  {forKids.map((clock) => {
                    return <Card name={clock.name} key={clock?.name} />;
                  })}
                </div>
              </div>
            )}
            {forCouples.length > 0 && (
              <div className="couples">
                <h1 className="ml-3 font-bold text-lg">For couples watches</h1>
                <hr />
                <div
                  className={`grid pb-2 grid-rows-1 grid-flow-col sm:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-x-4 w-full overflow-scroll ${
                    clocks?.length <= 0 ? "animate-pulse" : ""
                  } mb-3 mt-6`}
                >
                  {forCouples.map((clock) => {
                    return <Card name={clock.name} key={clock?.name} />;
                  })}
                </div>
              </div>
            )}
            {budget.length > 0 && (
              <div className="Budget-Friendly">
                <h1 className="ml-3 font-bold text-lg">
                  Budget-Friendly watches
                </h1>
                <hr />
                <div
                  className={`grid pb-2 grid-rows-1 grid-flow-col sm:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-x-4 w-full overflow-scroll ${
                    clocks?.length <= 0 ? "animate-pulse" : ""
                  } mb-3 mt-6`}
                >
                  {budget.map((clock) => {
                    return <Card name={clock.name} key={clock?.name} />;
                  })}
                </div>
              </div>
            )}
            {trending.length > 0 && (
              <div className="Trending">
                <h1 className="ml-3 font-bold text-lg">Trending watches</h1>
                <hr />
                <div
                  className={`grid pb-2 grid-rows-1 grid-flow-col sm:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] gap-x-4 w-full overflow-scroll ${
                    clocks?.length <= 0 ? "animate-pulse" : ""
                  } mb-3 mt-6`}
                >
                  {trending.map((clock) => {
                    return <Card name={clock.name} key={clock?.name} />;
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
