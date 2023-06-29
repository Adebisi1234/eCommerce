import watch from "../../assets/watch.png";

const Admin = () => {
  return (
    <>
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
    </>
  );
};

export default Admin;
