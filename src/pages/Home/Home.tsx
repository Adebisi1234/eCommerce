import Header from "../../components/Header";
import Card from "../../components/Card";
import filter from "../../assets/filter.svg";
import search from "../../assets/search.svg";
import right from "../../assets/chevron-right.svg";
import discount from "../../assets/discount.svg";
import clock from "../../images/clock1.jpg";
import dashboard from "../../assets/dashboard.svg";
import luxury from "../../assets/luxury.png";
import fashion from "../../assets/fashion.svg";
import sport from "../../assets/sport.png";
import smart from "../../assets/smart.png";
import Cat from "../../components/Cat";
import Box from "../../components/Box";
const Home = () => {
  const cats = [
    { name: "All", icon: dashboard },
    { name: "Luxury", icon: luxury },
    { name: "fashion", icon: fashion },
    { name: "sports", icon: sport },
    { name: "smart", icon: smart },
  ];
  return (
    <>
      <Header leftIcon="menu" title="Home" rightIcon="cart" />
      <div className="search mx-2 flex gap-4 h-10">
        <div className="h-full flex p-1 gap-1 w-full ml-1 border-2">
          <img src={search} alt="search icon" />
          <input type="text" className="bg-transparent" placeholder="Search" />
        </div>
        <img src={filter} alt="filter" />
      </div>
      <div className="collections mt-6 mb-3">
        <h2 className="font-bold mb-4">Browse collections</h2>
        <div className="slide flex gap-8 pt-2 h-fit overflow-x-scroll mb-8 mx-2 ">
          {cats.map((cat) => (
            <Cat name={cat.name} key={cat.name} icon={cat.icon} />
          ))}
        </div>
      </div>
      <div className="mb-8">
        <Box name="40% OFF" icon={discount} small={true} />
      </div>
      <div className="topPicks h-[292px] ">
        <h2 className="font-bold mb-3">Top Picks</h2>

        <div className="grid grid-cols-2 w-full place-items-center gap-x-6">
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
