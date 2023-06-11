import Header from "../../components/Header";

const Account = () => {
  return (
    <div>
      <Header leftIcon="left" />
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="number">Phone number</label>
        <input type="tel" id="number" />
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" />

        <label htmlFor="address">Delivery Address</label>
        <input type="address" id="address" />
        <label htmlFor="options">Shipping options</label>
        <select id="options" defaultValue="door">
          <option value="door">Deliver to doorstep</option>
          <option value="pick-up">Pick-up delivery</option>
        </select>
      </form>
      <button>Enter/Update information</button>
    </div>
  );
};

export default Account;
