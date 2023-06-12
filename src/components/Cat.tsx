const Cat = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <>
      <div className="w-14 h-[89px] flex flex-col gap-3 items-center ">
        <div className="h-14 w-14 border-2 rounded-full bg-white flex justify-center items-center">
          <img src={icon} className="h-6 w-6 object-cover" alt="cat. icon" />
        </div>
        <h4>{name}</h4>
      </div>
    </>
  );
};

export default Cat;
