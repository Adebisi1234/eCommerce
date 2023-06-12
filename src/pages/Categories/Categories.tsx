import Header from "../../components/Header";
import discount from "../../assets/discount.svg";
import Box from "../../components/Box";
const Categories = () => {
  return (
    <>
      <Header leftIcon="left" title="Categories" rightIcon="cart" />
      <div className="mt-10 flex flex-col gap-4 h-[560px]">
        <Box name="Luxury" icon={discount} small={false} />
        <Box name="Smart watches" icon={discount} small={false} />
        <Box name="Sports" icon={discount} small={false} />
        <Box name="Fashion watches" icon={discount} small={false} />
        <Box name="Pocket watches" icon={discount} small={false} />
      </div>
    </>
  );
};

export default Categories;
