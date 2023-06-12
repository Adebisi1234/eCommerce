import Header from "../../components/Header";
import clock from "../../images/clock4.jpg";

const Cart = ({ num }: { num: string }) => {
  return (
    <div>
      <Header leftIcon="left" title={`cart (${num})`} />
      <div className="top max-h-[385px] mt-10">
        <div className="flex flex-col items-center gap-10 mb-4 lists">
          <div className="w-full flex justify-between items-center gap-14 h-[49px]">
            <div className="flex items-center gap-4">
              <img src={clock} alt="watch icon" className="w-12 h-12" />
              <div>
                <p className="text-[#7a7a7a] font-medium text-sm">Family</p>
                <p className="text-sm font-bold">9000 NGN</p>
              </div>
            </div>

            <div className="flex items-center gap-3 num h-9">
              <p className="text-[#7a7a7a] text-2xl">-</p>
              <p className="text-lg font-semibold">01</p>
              <p className="text-[#7a7a7a] text-2xl">+</p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-14 h-[49px]">
            <div className="flex items-center gap-4">
              <img src={clock} alt="watch icon" className="w-12 h-12" />
              <div>
                <p className="text-[#7a7a7a] font-medium text-sm">Family</p>
                <p className="text-sm font-bold">9000 NGN</p>
              </div>
            </div>

            <div className="flex items-center gap-3 num h-9">
              <p className="text-[#7a7a7a] text-2xl">-</p>
              <p className="text-lg font-semibold">01</p>
              <p className="text-[#7a7a7a] text-2xl">+</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 p-6 mt-10 bg-white bottom">
        <h2 className="text-xl font-semibold text-center">Order Info</h2>
        <div className="flex flex-col gap-4 h-[200px] w-full mt-6">
          <div className="details text-[#7a7a7a] font-semibold h-6 justify-between flex">
            <p>Family</p>
            <p>9000 NGN</p>
          </div>
          <div className="details text-[#7a7a7a] font-semibold h-6 justify-between flex">
            <p>Family</p>
            <p>9000 NGN</p>
          </div>
          <div className="delivery text-[#7a7a7a] font-semibold h-6 justify-between flex">
            <p>Delivery</p>
            <p>1000 NGN</p>
          </div>
          <hr />
          <div className="flex justify-between h-6 font-semibold total">
            <p>Total</p>
            <p className="font-extrabold">19,000 NGN</p>
          </div>
        </div>

        <button className="flex h-12 gap-3 px-6 py-3 mx-auto text-white bg-black">
          Proceed to place order
        </button>
      </div>
    </div>
  );
};

export default Cart;
