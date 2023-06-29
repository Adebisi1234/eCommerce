import { useNavigate } from "react-router-dom";
import favorite from "../../assets/Favorite.svg";
import { useRef } from "react";
import { useTasks } from "../../context/Store";
import Search from "../../components/SearchComp";
import useWindowSize from "../../hooks/useWindowSize";
import Theme from "../../components/Theme";

const Header = () => {
  const navigate = useNavigate();
  const width = useWindowSize();
  const { user } = useTasks();
  const showDialog = useRef<HTMLDialogElement>(null);
  return (
    <header className="flex justify-between items-center h-fit mt-6  bg-[var(--bg-dark)]">
      <h1
        className="text-[22px] leading-8 font-medium text-[var(--highlight)] "
        onClick={() => {
          navigate("/");
        }}
      >
        Clocks
      </h1>
      {width > 640 && (
        <div className="w-2/3">
          <Search />
        </div>
      )}
      {width < 640 ? (
        <div className="flex items-center gap-5 icons">
          <img
            src={favorite}
            className="w-5 h-5 wishlists"
            onClick={() => navigate("/wishlist")}
          />
          <div className="profile h-[30px] w-[30px] relative rounded-full shadow shadow-[var(--highlight)] border">
            <div className="p-1 image">
              <svg
                className="w-full h-full fav user "
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  if (user!.name.length < 3) {
                    showDialog.current?.show();
                  } else {
                    navigate("/user");
                  }
                }}
              >
                <path
                  d="M905.008932 920.891667c0 15.482623-12.544711 27.91477-27.91477 27.91477-15.482623 0-27.91477-12.544711-27.91477-27.91477h-0.22615c0-186.135304-150.874219-337.009524-337.009524-337.009523S174.933171 734.756363 174.933171 920.891667h-0.112563c0 15.482623-12.544711 27.91477-27.91477 27.91477-15.482623 0-27.91477-12.544711-27.91477-27.91477 0-172.460864 111.206778-318.587965 265.810948-371.592156-74.928526-43.849694-125.33352-124.993782-125.33352-218.005153C259.242346 191.720509 372.369869 78.592986 511.943718 78.592986s252.700349 113.127524 252.700349 252.700349c0 93.123934-50.404993 174.155459-125.33352 218.005153 154.491607 52.891627 265.698384 199.132316 265.698385 371.593179zM708.475813 331.294358c0-110.415762-88.038102-199.923332-196.533118-199.923332s-196.532095 89.50757-196.532095 199.923332c0 101.261265 74.024947 184.665837 170.086793 197.889 8.81476-0.564865 17.516956-1.355881 26.445302-1.355881 8.928347 0 17.630542 0.791016 26.445302 1.355881 96.062869-13.223163 170.087816-96.627734 170.087816-197.889z"
                  fill=""
                />
              </svg>
            </div>

            <dialog
              className="absolute w-fit top-10 -translate-x-full tra z-10 p-0 bg-[var(--bg-dark)] text-inherit"
              ref={showDialog}
            >
              <p
                className="bg-[var(--bg-lightDark)] p-2 w-full mb-2 border"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </p>
              <p
                className="bg-[var(--bg-lightDark)] p-2 w-full mb-2 border"
                onClick={() => {
                  navigate("/details");
                }}
              >
                Sign in
              </p>
              <button
                className="py-2 px-12 bg-[var(--highlight)] rounded-[30px] mb-2"
                onClick={() => {
                  showDialog.current?.close();
                }}
              >
                Close
              </button>
            </dialog>
          </div>
          <Theme />
        </div>
      ) : (
        <Theme />
      )}
    </header>
  );
};

export default Header;
