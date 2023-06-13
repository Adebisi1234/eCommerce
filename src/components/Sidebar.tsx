import Details from "../pages/Payment/Details";

const Sidebar = () => {
  return (
    <>
      <h2>Cart</h2>
      <h2>Light/Dark mode</h2>
      <h2>Details</h2>
      <Details disabled={true} />
    </>
  );
};

export default Sidebar;
