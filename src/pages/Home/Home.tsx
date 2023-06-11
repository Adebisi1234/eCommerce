import Header from "../../components/Header";
import Card from "../../components/Card";
import filter from "../../assets/filter.svg";
import search from "../../assets/search.svg";
import clock from "../../images/clock1.jpg";
const Home = () => {
  return (
    <>
      <Header leftIcon="menu" title="Home" rightIcon="cart" />
      <div className="search flex gap-4 h-10">
        <div className="h-full flex p-1 gap-1 w-full border-2">
          <img src={search} alt="search icon" />
          <input type="text" placeholder="Search" />
        </div>
        <img src={filter} alt="filter" />
      </div>
      <div className="collections mt-6 mb-3">
        <h2 className="font-bold">Browse collections</h2>
        <div className="slide h-[89px] mb-8 border-black border-2"></div>
      </div>
      <div className="discounts h-20 border-black border-2 mb-8"></div>
      <div className="topPicks h-[292px] border-black border-2">
        <h2 className="font-bold mb-3">Top Picks</h2>
        {/* Card Component */}
        <div className="grid grid-cols-2 w-full place-items-center gap-2">
          <Card
            imgUrl={clock}
            smallImgUrl=""
            isWishListed={false}
            name="Family"
            price="2,000"
          />
          <Card
            imgUrl={clock}
            smallImgUrl=""
            isWishListed={false}
            name="Family"
            price="2,000"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
