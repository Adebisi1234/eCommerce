import Header from "../../components/Header";
import edit from "../../assets/edit.svg";

const Checkout = () => {
  return (
    <>
      <Header leftIcon="left" title="Place order" />
      <div className="flex flex-col gap-5 details">
        <div className="name">
          <h6 className="text-sm font-bold">Name</h6>
          <p className="font-semibold text-[#7a7a7a] mt-2">Family</p>
        </div>
        <div className="phone">
          <h6 className="text-sm font-bold">Phone number</h6>
          <p className="font-semibold text-[#7a7a7a] mt-2">081 827 2834</p>
        </div>
        <div className="delivery">
          <h6 className="text-sm font-bold">Delivery address</h6>
          <p className="font-semibold text-[#7a7a7a] mt-2">
            <address>123 yorkshire street hotel</address>
          </p>
        </div>
        <div className="Shipping options">
          <h6 className="text-sm font-bold">Shipping option</h6>
          <select
            className="font-semibold w-full text-[#7a7a7a] mt-2"
            id="options"
            defaultValue="door"
          >
            <option value="door">Deliver to doorstep</option>
            <option value="pick-up">Pick-up delivery</option>
          </select>
        </div>
        <button className="flex items-center justify-center w-full h-12 gap-3 px-6 py-3 mx-auto text-black border-2 border-black">
          <img src={edit} alt="edit icon" />
          Edit details
        </button>
      </div>
      <div className="flex flex-col items-center gap-10 p-6 bottom">
        <div className="flex items-center justify-between w-full name h-7">
          <p className="text-lg font-semibold text-[#7a7a7a]">Family</p>
          <p className="text-2xl font-extrabold">1000 NGN</p>
        </div>

        <div className="terms">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
          sit incidunt. Iusto, explicabo?
        </div>
        <button className="flex items-center justify-center w-full h-12 gap-3 px-6 py-3 mx-auto text-white bg-black">
          Confirm purchase
        </button>
      </div>
    </>
  );
};

export default Checkout;
