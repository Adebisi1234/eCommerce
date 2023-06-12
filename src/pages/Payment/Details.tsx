import Header from "../../components/Header";

const Details = () => {
  return (
    <div>
      <Header leftIcon="left" />
      <form className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 w-full max-h-[74px] name">
          <label className="text-sm font-bold" htmlFor="name">
            Name
          </label>
          <input
            className="p-2 bg-[#dfdfdf] text-[#7a7a7a] font-semibold h-[45px]"
            type="text"
            placeholder="Family"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-2 w-full max-h-[74px] phone">
          <label className="text-sm font-bold" htmlFor="number">
            Phone number
          </label>
          <input
            className="p-2 bg-[#dfdfdf] text-[#7a7a7a] font-semibold h-[45px]"
            type="tel"
            placeholder="244 333 099"
            id="number"
          />
        </div>
        <div className="flex flex-col gap-2 w-full max-h-[74px] email">
          <label className="text-sm font-bold" htmlFor="email">
            Email Address
          </label>
          <input
            className="p-2 bg-[#dfdfdf] text-[#7a7a7a] font-semibold h-[45px]"
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2 w-full max-h-[74px] address">
          <label className="text-sm font-bold" htmlFor="address">
            Delivery Address
          </label>
          <input
            className="p-2 bg-[#dfdfdf] text-[#7a7a7a] font-semibold h-[45px]"
            type="address"
            placeholder="delivery address"
            id="address"
          />
        </div>

        <div className="flex flex-col gap-2 w-full max-h-[74px] option">
          <label className="text-sm font-bold" htmlFor="options">
            Shipping options
          </label>
          <select
            className="p-2 bg-[#dfdfdf] text-[#7a7a7a] font-semibold h-[45px]"
            id="options"
            defaultValue="door"
          >
            <option value="door">Deliver to doorstep</option>
            <option value="pick-up">Pick-up delivery</option>
          </select>
        </div>
      </form>
      <button className="flex w-full h-12 gap-3 px-6 py-3 mx-auto mt-10 text-white bg-black">
        Enter/Update information
      </button>
    </div>
  );
};

export default Details;
