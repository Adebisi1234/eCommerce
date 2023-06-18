import Card from "../../components/Card";
import { useTasks } from "../../context/Store";

const Wishlist = () => {
  const { user } = useTasks();
  const clocks = useTasks().clocks.filter((clock) =>
    user?.favorites.includes(clock.name)
  );
  const num = clocks.length;
  return (
    <>
      <div className="filter flex justify-between items-center relative">
        <h4 className="text-center font-bold text-[#7a7a7a] mb-2 text-base">
          {num} items..
        </h4>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 w-full place-items-center gap-y-6 gap-x-6">
        {clocks.map((clock) => {
          return <Card name={clock.name} />;
        })}
      </div>
    </>
  );
};

export default Wishlist;
