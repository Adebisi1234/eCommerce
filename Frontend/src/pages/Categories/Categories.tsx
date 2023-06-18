import Header from "../../components/Header";
// import discount from "../../assets/discount.svg";
import smart from "../../assets/smart.png";
import luxury from "../../assets/luxury.png";
import sport from "../../assets/sport.png";
import fashion from "../../assets/fashion.svg";
import dashboard from "../../assets/dashboard.svg";
import wishListed from "../../assets/wishListed.svg";
import Box from "../../components/Box";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <>
      <div className="mt-10 flex flex-col gap-4 h-[560px]">
        <Link to="/wishlist">
          <Box name="Wish list" icon={wishListed} small="" />
        </Link>
        <Link to="/search/smart">
          <Box name="Smart watches" icon={smart} small="" />
        </Link>
        <Link to="/search/sports">
          <Box name="Sports" icon={sport} small="" />
        </Link>
        <Link to="/search/fashion">
          <Box name="Fashion watches" icon={fashion} small="" />
        </Link>
        <Link to="/search/all">
          <Box name="All" icon={dashboard} small="" />
        </Link>
        <Link to="/search/luxury">
          <Box name="Luxury" icon={luxury} small="" />
        </Link>
      </div>
    </>
  );
};

export default Categories;
