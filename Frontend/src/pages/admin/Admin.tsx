import Search from "../../components/SearchComp";
import useWindowSize from "../../hooks/useWindowSize";
import watch from "../../assets/watch.png";
import { Link } from "react-router-dom";

const Admin = () => {
  const width = useWindowSize();
  return (
    <div className=" grid grid-cols-[200px_minmax(900px,_1fr)] gap-x-8 h-full w-full ">
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
            <div className="  card flex gap-5 items-center justify-between">
              <div className="  cards rounded-xl p-5 flex gap-4 h-24 w-full bg-blue-500/70">
                <h3 className="w-full font-semibold ">Shipped Orders</h3>
                <p className="font-black text-5xl">35</p>
              </div>
              <div className="  cards rounded-xl p-5 flex gap-4 h-24 w-full bg-orange-500/70">
                <h3 className="w-full font-semibold ">Pending Orders</h3>
                <p className="font-black text-5xl">35</p>
              </div>
              <div className="  cards rounded-xl p-5 flex gap-4 h-24 w-full bg-purple-500/70">
                <h3 className="w-full font-semibold ">New Orders</h3>
                <p className="font-black text-5xl">35</p>
              </div>
            </div>
            <div className="  contain h-full flex gap-7">
              <div className="activities w-full h-full">
                <div className="border  py-3 inbox h-1/3 rounded-2xl">
                  <div className="inbox px-2  flex justify-between items-center">
                    <h1 className="font-bold text-lg">Inbox</h1>
                    <p className="font-semibold text-sm">view all</p>
                  </div>

                  <div className=" px-2 py-1  mt-3 -white flex justify-between items-center">
                    <p>New Order waiting for delivery</p>
                    <p>4:30am 2days ago</p>
                  </div>
                  <div className="px-2 py-1  -white flex justify-between items-center">
                    <p>Order #12345 delivered</p>
                    <p>4:30am 2days ago</p>
                  </div>
                </div>
                <div className="border bg-[#123456] recent h-2/3 mt-3 rounded-2xl">
                  <div className=" flex justify-between px-2 py-1 items-center">
                    <h1 className="font-bold text-lg">Recent Activity</h1>
                    <p className="font-semibold text-sm">view all</p>
                  </div>

                  <div className="mt-3">
                    <div className="px-2  border-b flex justify-between items-center">
                      <p>Confirm order update</p>
                      <p className=" bg-green-500 rounded-md px-3  my-3">NEW</p>
                    </div>
                    <div className="px-2  border-b flex justify-between items-center">
                      <p>Added new watch</p>
                      <p className=" bg-green-500 rounded-md px-3  my-3">NEW</p>
                    </div>
                    <div className="px-2  border-b flex justify-between items-center">
                      <p>Delivery confirmed</p>
                      <p className=" bg-green-500 rounded-md px-3  my-3">NEW</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border rounded-2xl chart w-full -violet-500 h-full">
                <div className="  users h-1/2 overflow-y-scroll">
                  <div className="my-3 px-2 font-bold flex justify-between items-center">
                    <h1>Total Users</h1>
                    <p>205</p>
                  </div>
                  <div className="my-2 flex justify-between px-2">
                    <div className="name">Tobiloba</div>
                    <div className="number">234811477957</div>
                  </div>
                  <div className="my-2 flex justify-between px-2">
                    <div className="name">Tobiloba</div>
                    <div className="number">234811477957</div>
                  </div>
                  <div className="my-2 flex justify-between px-2">
                    <div className="name">Tobiloba</div>
                    <div className="number">234811477957</div>
                  </div>
                  <div className="my-2 flex justify-between px-2">
                    <div className="name">Tobiloba</div>
                    <div className="number">234811477957</div>
                  </div>
                  <div className="my-2 flex justify-between px-2">
                    <div className="name">Tobiloba</div>
                    <div className="number">234811477957</div>
                  </div>
                </div>
                <div className="  products h-1/2 overflow-y-scroll">
                  <div className="my-3 px-2 font-bold flex justify-between items-center">
                    <h1>Total Products</h1>
                    <p>21,000</p>
                  </div>
                  {/* Clocks */}
                  <div className="my-2 flex justify-between">
                    <div className="name flex items-center gap-3 px-2">
                      <img src={watch} alt="watch icon" className="fav" />
                      <h3>Family</h3>
                    </div>
                    <div className="number">NGN 21,000</div>
                  </div>
                  <div className="my-2 flex justify-between">
                    <div className="name flex items-center gap-3 px-2">
                      <img src={watch} alt="watch icon" className="fav" />
                      <h3>Family</h3>
                    </div>
                    <div className="number">NGN 21,000</div>
                  </div>
                  <div className="my-2 flex justify-between">
                    <div className="name flex items-center gap-3 px-2">
                      <img src={watch} alt="watch icon" className="fav" />
                      <h3>Family</h3>
                    </div>
                    <div className="number">NGN 21,000</div>
                  </div>
                  <div className="my-2 flex justify-between">
                    <div className="name flex items-center gap-3 px-2">
                      <img src={watch} alt="watch icon" className="fav" />
                      <h3>Family</h3>
                    </div>
                    <div className="number">NGN 21,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <div>Please open this route on a larger screen</div>
      )}
      {/* 

gap-28
  Whole gap-30
    Sidebar - 200px gap-50
    Main - Rest flex
      Header
      Cards
      div.main gap-28
        one - 50%
          inbox
          recent Activities
        two - 50%
          something
          No of users
          No of products
          
      
  */}
    </div>
  );
};

export default Admin;
