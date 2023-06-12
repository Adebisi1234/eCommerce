import right from "../assets/chevron-right.svg";
const Box = ({
  icon,
  name,
  small,
}: {
  icon: string;
  name: string;
  small: boolean;
}) => {
  return (
    <div className="discounts bg-white flex items-center justify-between p-3 gap-4 h-20 mx-2 ">
      <div className="dis flex gap-4 items-center w-[207px] h-14">
        <div className="img h-14 w-14 flex items-center justify-center bg-[#E1E1E1]">
          <img src={icon} className="h-6 w-6" alt="discount icon" />
        </div>
        <div className="text">
          <h2 className="font-semibold text-lg">{name}</h2>
          {small && (
            <p className="text-xs font-semibold mt-[2px] text-[#7B7B7B]">
              On all luxury watches
            </p>
          )}
        </div>
      </div>
      <div className="right w-4 h-4">
        <img src={right} alt="next page icon" />
      </div>
    </div>
  );
};

export default Box;
