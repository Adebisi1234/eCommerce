import { clocks } from "../types/defaults";

const Filter = ({
  setShow,
  setFilt,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setFilt: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div
      className="flex flex-col gap-3 bg-white p-4"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log((e.target as HTMLDivElement).textContent);
        if ((e.target as HTMLDivElement).textContent?.includes("Low to High")) {
          setFilt("Low to High");
        } else if (
          (e.target as HTMLDivElement).textContent?.includes("High to Low")
        ) {
          setFilt("High to Low");
        } else if (
          (e.target as HTMLDivElement).textContent?.includes("Newest")
        ) {
          setFilt("Newest");
        } else if (
          (e.target as HTMLDivElement).textContent?.includes("Popularity")
        ) {
          setFilt("Popularity");
        }
        setShow((pre) => !pre);
      }}
    >
      <p>Popularity</p>
      <p>Newest Arrivals</p>
      <p>Price: Low to High</p>
      <p>Price: High to Low</p>
      <p>Product Rating</p>
    </div>
  );
};

export default Filter;
