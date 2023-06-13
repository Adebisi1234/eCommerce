import cartIcon from "../assets/cart.svg";
import menu from "../assets/menu.svg";
import left from "../assets/chevron-left.svg";
import wished from "../assets/wishListed.svg";
import wish from "../assets/wishList.svg";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/Store";

const Header = ({
  leftIcon,
  title,
  rightIcon,
  item,
  wishListed,
}: {
  leftIcon: string;
  title?: string;
  rightIcon?: string;
  item?: number;
  wishListed?: boolean;
}): JSX.Element => {
  const navigate = useNavigate();
  const { cart } = useTasks();
  // const [displayFilter, setDisplayFilter]: [
  //   displayFilter: boolean,
  //   setDisplayFilter: React.Dispatch<React.SetStateAction<boolean>>
  // ] = useState<boolean>(false);
  // const [showMenu, setShowMenu]: [
  //   showMenu: boolean,
  //   setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
  // ] = useState<boolean>(false);
  return (
    <header className="flex items-center justify-between w-full px-2 my-4 max-h-8">
      <img
        src={leftIcon === "left" ? left : menu}
        alt="chevron-left"
        className="w-6 h-6"
        onClick={() => {
          if (leftIcon === "left") {
            navigate(-1);
          } else {
            // setShowMenu(true);
          }
        }}
      />
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="relative cart">
        {rightIcon === "cart" && (
          <img
            src={cartIcon}
            alt="icon"
            onClick={() => {
              navigate("/cart");
            }}
            className="w-6 h-6"
          />
        )}
        {cart.length > 0 && rightIcon === "cart" ? (
          <div className="item absolute h-4 w-4 rounded-full bg-[#ff2b2b] -top-2 text-white text-sm flex justify-center items-center -right-1">
            {cart.length}
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
