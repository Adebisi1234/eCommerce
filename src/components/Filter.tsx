const Filter = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="flex flex-col gap-3 bg-white p-4"
      onClick={() => {
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
