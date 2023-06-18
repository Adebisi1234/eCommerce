import cartIcon from "../assets/cart.svg";
import menu from "../assets/menu.svg";
import left from "../assets/chevron-left.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { useTasks } from "../context/Store";

const Header = ({
  leftIcon,
  title,
  rightIcon,
  setShowSidebar,
}: {
  leftIcon: string;
  title?: string;
  rightIcon?: string;
  wishListed?: boolean;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
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
    <>
      <header className="flex items-center justify-between w-full px-2 my-4 max-h-8">
        <img
          src={leftIcon === "left" ? left : menu}
          alt="chevron-left"
          className="w-6 h-6"
          onClick={() => {
            console.log("fuck");
            if (leftIcon === "left") {
              navigate(-1);
            } else if (leftIcon === "menu") {
              setShowSidebar && setShowSidebar((prev) => !prev);
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
      <Outlet />
    </>
  );
};

export default Header;
