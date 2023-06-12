import cart from "../assets/cart.svg";
import menu from "../assets/menu.svg";
import filter from "../assets/filter.svg";
import left from "../assets/chevron-left.svg";
import heart from "../assets/wishListed.svg";

const Header = ({
  leftIcon,
  title,
  rightIcon,
  item,
}: {
  leftIcon: string;
  title?: string;
  rightIcon?: string;
  item?: number;
}): JSX.Element => {
  return (
    <header className="flex items-center justify-between w-full px-2 my-4 max-h-8">
      <img
        src={leftIcon === "left" ? left : menu}
        alt="chevron-left"
        className="w-6 h-6"
      />
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="relative cart">
        {rightIcon && (
          <img
            src={
              rightIcon === "cart"
                ? cart
                : rightIcon === "cart"
                ? filter
                : rightIcon === "heart"
                ? heart
                : ""
            }
            alt="icon"
            className="w-6 h-6"
          />
        )}
        {item && (
          <div className="item absolute h-4 w-4 rounded-full bg-[#ff2b2b] -top-2 text-white text-sm flex justify-center items-center -right-1">
            {item}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
