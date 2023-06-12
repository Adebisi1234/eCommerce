import Card from "../../components/Card";
import Header from "../../components/Header";
import clock from "../../images/clock2.jpg";
const Search = ({ query, num }: { query: string; num: number }) => {
  return (
    <>
      <Header leftIcon="left" rightIcon="filter" title={query} item={0} />
      <h4 className="text-center font-bold text-base">{num} items..</h4>
      {/* Cards */}
      <div className="grid grid-cols-2 w-full place-items-center gap-y-6 gap-x-6">
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
    </>
  );
};

export default Search;
