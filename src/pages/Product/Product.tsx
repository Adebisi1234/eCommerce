import Header from "../../components/Header";
import clock from "../../images/clock3.jpg";
import plus from "../../assets/plusLight.svg";
const Product = () => {
  return (
    <div>
      <Header leftIcon="left" rightIcon="heart" />
      <div className="top h-[268px] mt-6 mb-10 bg-white">
        <img
          src={clock}
          className="object-cover h-full mx-auto"
          alt="product image"
        />
      </div>
      <div className="flex flex-col gap-12 p-6 bg-white bottom">
        <div className="flex flex-col gap-4 group ">
          <div className="flex items-center justify-between name">
            <p className="text-[#7A7A7A] font-semibold text-lg">Family</p>
            <p className="text-xl font-bold">9000 NGN</p>
          </div>
          <div className="desc">
            <h3 className="text-sm font-bold">Description</h3>
            <p className="text-[#7A7A7A]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
              at molestiae eligendi harum fugiat obcaecati. Quam repudiandae
              optio corporis quisquam.
            </p>
          </div>

          <h3 className="text-sm font-bold">Choose color</h3>
          <div className="flex items-center h-12 gap-4 overflow-scroll colors justify-evenly">
            <div className="w-12 h-12 bg-red-500 rounded-full color"></div>
            <div className="w-12 h-12 bg-blue-500 rounded-full color"></div>
            <div className="w-12 h-12 bg-green-500 rounded-full color"></div>
            <div className="w-12 h-12 bg-yellow-500 rounded-full color"></div>
            <div className="w-12 h-12 bg-black rounded-full color"></div>
          </div>
        </div>
        <button className="flex h-12 gap-3 px-6 py-3 mx-auto text-white bg-black">
          <img src={plus} alt="add to cart" />
          <p className="text-sm font-bold">Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
