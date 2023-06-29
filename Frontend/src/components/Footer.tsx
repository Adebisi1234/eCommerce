// import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTasks } from "../context/Store";
const Footer = () => {
  const { cart } = useTasks();
  return (
    <>
      <div className="flex md:hidden justify-evenly items-center w-full rounded-lg h-[58px] bg-[var(--bg-lightDark)] right-2 left-1 fixed z-0 bottom-0 opacity-80">
        <Link to="/">
          <div className="h-[30px] w-[30px] home">
            <svg
              className="fav"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M851.2 441.6l-320-268.8C524.8 172.8 518.4 172.8 512 172.8s-12.8 0-19.2 6.4l-320 268.8C166.4 448 160 460.8 160 467.2L160 832c0 19.2 12.8 32 32 32l640 0c19.2 0 32-12.8 32-32L864 467.2C864 460.8 857.6 448 851.2 441.6zM806.4 806.4 601.6 806.4l0-147.2c0-51.2-38.4-89.6-89.6-89.6s-89.6 38.4-89.6 89.6l0 147.2L217.6 806.4 217.6 480 512 236.8l294.4 243.2L806.4 806.4z" />
            </svg>
          </div>
        </Link>
        <Link to="/categories">
          <div className="h-[30px] w-[30px] category">
            <svg
              className="fav"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M320 512 192 512c-70.4 0-128 57.6-128 128l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128l0-128C448 569.6 390.4 512 320 512zM384 768c0 35.2-28.8 64-64 64L192 832c-35.2 0-64-28.8-64-64l0-128c0-35.2 28.8-64 64-64l128 0c35.2 0 64 28.8 64 64L384 768zM768 64l-128 0C569.6 64 512 121.6 512 192l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128L896 192C896 121.6 838.4 64 768 64zM832 320c0 35.2-28.8 64-64 64l-128 0C604.8 384 576 355.2 576 320L576 192c0-35.2 28.8-64 64-64l128 0c35.2 0 64 28.8 64 64L832 320zM768 512l-128 0c-70.4 0-128 57.6-128 128l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128l0-128C896 569.6 838.4 512 768 512zM832 768c0 35.2-28.8 64-64 64l-128 0c-35.2 0-64-28.8-64-64l0-128c0-35.2 28.8-64 64-64l128 0c35.2 0 64 28.8 64 64L832 768zM320 64 192 64C121.6 64 64 121.6 64 192l0 128c0 70.4 57.6 128 128 128l128 0c70.4 0 128-57.6 128-128L448 192C448 121.6 390.4 64 320 64zM384 320c0 35.2-28.8 64-64 64L192 384C156.8 384 128 355.2 128 320L128 192c0-35.2 28.8-64 64-64l128 0c35.2 0 64 28.8 64 64L384 320z" />
            </svg>
          </div>
        </Link>
        <Link to="/cart">
          <div className="h-[30px] w-[30px] cart relative">
            {cart?.length > 0 ? (
              <div className="absolute right-0 -top-1 rounded-full h-2 w-2 bg-[var(--highlight)]"></div>
            ) : (
              ""
            )}
            <svg
              width="30"
              height="30"
              className="fav"
              viewBox="0 0 18 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.96 7.95799C16.29 7.21799 15.28 6.78799 13.88 6.63799V5.87799C13.88 4.50799 13.3 3.18799 12.28 2.26799C11.7767 1.80654 11.1815 1.45664 10.5336 1.24122C9.88558 1.02581 9.19941 0.949735 8.51999 1.01799C6.12999 1.24799 4.11999 3.55799 4.11999 6.05799V6.63799C2.71999 6.78799 1.70999 7.21799 1.03999 7.95799C0.0699899 9.03799 0.09999 10.478 0.20999 11.478L0.90999 17.048C1.11999 18.998 1.90999 20.998 6.20999 20.998H11.79C16.09 20.998 16.88 18.998 17.09 17.058L17.79 11.468C17.9 10.478 17.92 9.03799 16.96 7.95799ZM8.65999 2.40799C9.14462 2.35931 9.63407 2.41284 10.0967 2.56514C10.5594 2.71743 10.9849 2.96509 11.3459 3.29212C11.7068 3.61915 11.9952 4.01827 12.1922 4.46369C12.3893 4.90911 12.4907 5.39092 12.49 5.87799V6.57799H5.50999V6.05799C5.50999 4.27799 6.97999 2.56799 8.65999 2.40799ZM5.41999 12.148H5.40999C4.85999 12.148 4.40999 11.698 4.40999 11.148C4.40999 10.598 4.85999 10.148 5.40999 10.148C5.96999 10.148 6.41999 10.598 6.41999 11.148C6.41999 11.698 5.96999 12.148 5.41999 12.148ZM12.42 12.148H12.41C11.86 12.148 11.41 11.698 11.41 11.148C11.41 10.598 11.86 10.148 12.41 10.148C12.97 10.148 13.42 10.598 13.42 11.148C13.42 11.698 12.97 12.148 12.42 12.148Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </Link>
        <Link to="/user">
          <div className="h-[30px] w-[30px] user">
            <svg
              className="w-full h-full fav user "
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M905.008932 920.891667c0 15.482623-12.544711 27.91477-27.91477 27.91477-15.482623 0-27.91477-12.544711-27.91477-27.91477h-0.22615c0-186.135304-150.874219-337.009524-337.009524-337.009523S174.933171 734.756363 174.933171 920.891667h-0.112563c0 15.482623-12.544711 27.91477-27.91477 27.91477-15.482623 0-27.91477-12.544711-27.91477-27.91477 0-172.460864 111.206778-318.587965 265.810948-371.592156-74.928526-43.849694-125.33352-124.993782-125.33352-218.005153C259.242346 191.720509 372.369869 78.592986 511.943718 78.592986s252.700349 113.127524 252.700349 252.700349c0 93.123934-50.404993 174.155459-125.33352 218.005153 154.491607 52.891627 265.698384 199.132316 265.698385 371.593179zM708.475813 331.294358c0-110.415762-88.038102-199.923332-196.533118-199.923332s-196.532095 89.50757-196.532095 199.923332c0 101.261265 74.024947 184.665837 170.086793 197.889 8.81476-0.564865 17.516956-1.355881 26.445302-1.355881 8.928347 0 17.630542 0.791016 26.445302 1.355881 96.062869-13.223163 170.087816-96.627734 170.087816-197.889z"
                fill=""
              />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
