import Header from "../../components/Header";
// import discount from "../../assets/discount.svg";
import smart from "../../assets/smart.png";
import luxury from "../../assets/luxury.png";
import sport from "../../assets/sport.png";
import fashion from "../../assets/fashion.svg";
import dashboard from "../../assets/dashboard.svg";
import wishListed from "../../assets/wishListed.svg";
import Box from "../../components/Box";
const Categories = () => {
  return (
    <>
      <Header leftIcon="left" title="Categories" rightIcon="cart" />
      <div className="mt-10 flex flex-col gap-4 h-[560px]">
        <Box name="WishList" icon={wishListed} small="" />
        <Box name="Smart watches" icon={smart} small="" />
        <Box name="Sports" icon={sport} small="" />
        <Box name="Fashion watches" icon={fashion} small="" />
        <Box name="All" icon={dashboard} small="" />
        <Box name="Luxury" icon={luxury} small="" />
      </div>
    </>
  );
};

export default Categories;
