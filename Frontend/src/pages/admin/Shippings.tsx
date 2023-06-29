import { Link } from "react-router-dom";
import Search from "../../components/SearchComp";
import useWindowSize from "../../hooks/useWindowSize";
import watch from "../../assets/watch.png";

const Shippings = () => {
  const width = useWindowSize();
  return (
    <div className="grid grid-cols-[200px_minmax(900px,_1fr)] gap-x-8 h-full w-full">
      {width > 768 ? (
        <>
          <div className="sidebar border-r-2 -2 flex flex-col gap-y-10 pt-7">
            <img
              src={watch}
              alt="logo"
              className="w-16 h-16 mx-auto object-cover"
            />
            <Link className="hover:bg-[var(--bg-lightDark)]" to="">
              <div className=" flex gap-3 h-10 items-center  image">
                <img
                  src={watch}
                  alt="placeholder"
                  className="h-full object-cover"
                />
                <p>Dashboard</p>
              </div>
            </Link>
            <Link className="hover:bg-[var(--bg-lightDark)]" to="orders">
              <div className=" flex gap-3 h-10 items-center  order">
                <img
                  src={watch}
                  alt="placeholder"
                  className="h-full object-cover"
                />
                <p>Orders</p>
              </div>
            </Link>
            <Link className="hover:bg-[var(--bg-lightDark)]" to="products">
              <div className=" flex gap-3 h-10 items-center  products">
                <img
                  src={watch}
                  alt="placeholder"
                  className="h-full object-cover"
                />
                <p>Products</p>
              </div>
            </Link>
            <Link className="hover:bg-[var(--bg-lightDark)]" to="shippings">
              <div className=" flex gap-3 h-10 items-center  shipping">
                <img
                  src={watch}
                  alt="placeholder"
                  className="h-full object-cover"
                />
                <p>Shipping</p>
              </div>
            </Link>
            <Link className="hover:bg-[var(--bg-lightDark)]" to="payments">
              <div className=" flex gap-3 h-10 items-center  payments">
                <img
                  src={watch}
                  alt="placeholder"
                  className="h-full object-cover"
                />
                <p>Payments</p>
              </div>
            </Link>
          </div>
          <div className="main flex flex-col gap-7 ">
            <header className=" header mt-7 h-12 flex items-center gap-5 justify-between">
              <div className="h-full  w-full revenue">
                <p className="font-light text-xs ">Total revenue</p>
                <h2 className="font-extrabold text-lg leading-5">
                  NGN 630,000
                </h2>
              </div>
              <div className="h-full  w-full search">
                <Search />
              </div>
              <div className="h-full flex justify-between items-center  w-full icon">
                <img src={watch} alt="placeholder" className="fav" />
                <img src={watch} alt="placeholder" className="fav" />
                <img src={watch} alt="placeholder" className="fav" />
              </div>
            </header>
            <div className="grid grid-cols-3 gap-x-3 w-full h-full">
              <div className="border active p-3">
                <div className="header">
                  <h2 className="font-extrabold text-2xl">Active Shippings</h2>
                  <p>25 open shippings</p>
                </div>
                <div className="shippings flex flex-col gap-3">
                  <div className="prod flex justify-between items-center">
                    <div className="img w-12 h-12 bg-green-400"></div>
                    <div className="name  overflow-hidden text-ellipsis">
                      <h3>Arian Grande</h3>
                      <address title="1234 streets something">
                        1234 streets something
                      </address>
                    </div>
                    <div className="time">13/09/2023</div>
                  </div>
                </div>
              </div>
              <div className="border shipped p-3">
                <div className="header">
                  <h2 className="font-extrabold text-2xl">Closed Shippings</h2>
                  <p>26 open shippings</p>
                </div>
                <div className="shippings flex flex-col gap-3">
                  <div className="prod flex justify-between items-center">
                    <div className="img w129 h12 bg-green-400"></div>
                    <div className="name  overflow-hidden text-ellipsis">
                      <h3>Arian Grande</h3>
                      <address title="1234 streets something">
                        1234 streets something
                      </address>
                    </div>
                    <div className="time">13/09/2023</div>
                  </div>
                </div>
              </div>
              <div className="border details">
                <div className="image"></div>
                <div className="details"></div>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <div>Please open this route on a larger screen</div>
      )}
    </div>
  );
};

export default Shippings;
