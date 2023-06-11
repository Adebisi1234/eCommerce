import cart from "../assets/cart.svg";
import menu from "../assets/menu.svg";
import left from "../assets/chevron-left.svg";

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
    <header className="flex w-full max-h-8 my-4 justify-between items-center">
      <img
        src={leftIcon === "left" ? left : menu}
        alt="chevron-left"
        className="w-6 h-6"
      />
      <h1>{title}</h1>
      <div className="cart">
        <img
          src={rightIcon === "cart" ? cart : ""}
          alt="icon"
          className="w-6 h-6"
        />
        {item && <div className="item absolute -top-1-">{item}</div>}
      </div>
    </header>
  );
};

export default Header;
