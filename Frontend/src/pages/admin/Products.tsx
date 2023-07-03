import { useRef, useState } from "react";
import clock from "../../images/clock14.jpg";
// import Showcase from "../../components/Showcase";

const Products = () => {
  const imgRef = useRef<HTMLInputElement>(null);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const [showAbs, setShowAbs] = useState(false);
  const abs = (
    <div
      className={` bg-green-500 fixed ${showAbs ? "" : "hidden"} min-w-[300px]`}
      style={{ top: `${top}px`, left: `${left}px`, width: `${width}px` }}
    >
      <div className="details px-2">
        <div className="flex justify-between items-center font-bold my-2">
          <h2>Name</h2>
          <p
            className="w-2/6 ml-auto h-5 overflow-hidden text-ellipsis"
            title="Family 4"
          >
            Family 4
          </p>
        </div>
        <div className="flex justify-between items-center font-bold my-2">
          <h2>price</h2>
          <p
            className="w-2/6 ml-auto h-5 overflow-hidden text-ellipsis"
            title="2,000"
          >
            2,000
          </p>
        </div>
        <div className="flex justify-between gap-2 items-center font-bold my-2">
          <h2>Desc</h2>
          <p
            className="w-2/6 ml-auto h-5  overflow-hidden text-ellipsis"
            title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              voluptatem quaerat voluptatibus explicabo laboriosam hic?"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            voluptatem quaerat voluptatibus explicabo laboriosam hic?
          </p>
        </div>
        <div className="flex justify-between items-center font-bold my-2">
          <h2>Purchased</h2>
          <p
            className="w-2/6 ml-auto h-5 overflow-hidden text-ellipsis"
            title="12/22/2023"
          >
            12/22/2023
          </p>
        </div>
        <div className="flex justify-between items-center font-bold my-2">
          <h2>Amount</h2>
          <p
            className="w-2/6 ml-auto h-5 overflow-hidden text-ellipsis"
            title="20"
          >
            20
          </p>
        </div>
        <div className="flex justify-between items-center font-bold my-2">
          <h2>Categories</h2>
          <p
            className="w-2/6 ml-auto h-5 overflow-hidden text-ellipsis"
            title="For men, luxury"
          >
            For men, luxury
          </p>
        </div>
      </div>
      <button className="mr-7">Edit</button>
      <button
        onClick={() => {
          setShowAbs(false);
        }}
      >
        Close
      </button>
    </div>
  );
  const showRef = useRef<HTMLInputElement>(null);
  return (
    <div className="grid grid-cols-3 gap-x-3 w-full h-full">
      {abs}
      <div className="border px-2 overflow-y-scroll">
        <h1>All Products</h1>
        {/* List that displays a modal when hovered on where all details is showed and edit button is there which focuses the second column and change "new" to "edit"  */}
        <div
          className="prod flex justify-between items-center my-3"
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setTop((e.target as HTMLDivElement).offsetTop);
            setLeft((e.target as HTMLDivElement).offsetLeft);
            setWidth((e.target as HTMLDivElement).offsetWidth);
            setShowAbs(true);
          }}
        >
          <div className="flex gap-3">
            <div className="img w-12 h-12 bg-green-400"></div>
            <div>
              <h3>Family 1</h3>
              <div className="name  overflow-hidden text-ellipsis">
                <p title="NGN 2,000">NGN 2,000</p>
              </div>
            </div>
          </div>
          <button className="px-2 py-1 bg-slate-500 rounded-2xl ">
            Sold out
          </button>
        </div>
        <div
          className="prod flex justify-between items-center my-3"
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setTop((e.target as HTMLDivElement).offsetTop);
            setLeft((e.target as HTMLDivElement).offsetLeft);
            setWidth((e.target as HTMLDivElement).offsetWidth);
            setShowAbs(true);
          }}
        >
          <div className="flex gap-3">
            <div className="img w-12 h-12 bg-green-400"></div>
            <div>
              <h3>Family 1</h3>
              <div className="name  overflow-hidden text-ellipsis">
                <p title="NGN 2,000">NGN 2,000</p>
              </div>
            </div>
          </div>
          <button className="px-2 py-1 bg-green-500 rounded-2xl ">
            Available
          </button>
        </div>
        <div
          className="prod flex justify-between items-center my-3"
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            setTop((e.target as HTMLDivElement).offsetTop);
            setLeft((e.target as HTMLDivElement).offsetLeft);
            setWidth((e.target as HTMLDivElement).offsetWidth);
            setShowAbs(true);
          }}
        >
          <div className="flex gap-3">
            <div className="img w-12 h-12 bg-green-400"></div>
            <div>
              <h3>Family 1</h3>
              <div className="name  overflow-hidden text-ellipsis">
                <p title="NGN 2,000">NGN 2,000</p>
              </div>
            </div>
          </div>
          <button className="px-2 py-1 bg-green-500 rounded-2xl ">
            Available
          </button>
        </div>
      </div>
      <div className="border px-2 flex-col flex overflow-y-scroll">
        <h1>New Product</h1>
        <div className="h-full overflow-y-scroll">
          {/* Details of new watch and stuff */}

          <fieldset className="border">
            <legend>Enter new product details</legend>
            <div className="flex justify-between items-center px-2 gap-3  py-1 h-12">
              <label className="w-1/3" htmlFor="name">
                name
              </label>
              <input
                type="text"
                id="name"
                className="w-full h-full bg-transparent outline-none text-[var(--color-dark)] border"
              />
            </div>
            <div className="flex justify-between items-center px-2 gap-3 py-1 h-12">
              <label className="w-1/3" htmlFor="price">
                price
              </label>
              <input
                type="number"
                id="price"
                className="w-full h-full bg-transparent outline-none text-[var(--color-dark)] border"
              />
            </div>
            <div>
              <div className="flex justify-between items-center px-2 gap-3 py-1 h-12">
                <label className="w-1/3" htmlFor="cat">
                  Categories
                </label>
                <select
                  name="cat"
                  className="bg-black text-white"
                  id="cat"
                  defaultValue="all"
                >
                  <option value="forMen">forMen</option>
                  <option value="forWomen">forWomen</option>
                  <option value="forKids">forKids</option>
                  <option value="trending">trending</option>
                  <option value="budget">budget</option>
                  <option value="all" selected>
                    all
                  </option>
                  <option value="luxury">luxury</option>
                </select>
              </div>
              <div className="selected flex flex-wrap gap-3 bg-[var(--bg-lightDark)] px-2 h-fit">
                <div className="px-2 py-1 rounded-md bg-[var(--bg-dark)] w-fit flex gap-x-3 h-fit">
                  <h1>Luxury</h1>
                  <p>X</p>
                </div>
                <div className="px-2 py-1 rounded-md bg-[var(--bg-dark)] w-fit flex gap-x-3 h-fit">
                  <h1>for men</h1>
                  <p>X</p>
                </div>
                <div className="px-2 py-1 rounded-md bg-[var(--bg-dark)] w-fit flex gap-x-3 h-fit">
                  <h1>for women</h1>
                  <p>X</p>
                </div>
                <div className="px-2 py-1 rounded-md bg-[var(--bg-dark)] w-fit flex gap-x-3 h-fit">
                  <h1>For kids</h1>
                  <p>X</p>
                </div>
                <div className="px-2 py-1 rounded-md bg-[var(--bg-dark)] w-fit flex gap-x-3 h-fit">
                  <h1>Budget-friendly</h1>
                  <p>X</p>
                </div>
                <div className="px-2 py-1 rounded-md bg-[var(--bg-dark)] w-fit flex gap-x-3 h-fit">
                  <h1>Trending</h1>
                  <p>X</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-2 gap-3 py-1 h-12  ">
              <label className="w-1/3" htmlFor="imgUrl">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                id="imgUrl"
                ref={imgRef}
                max={4}
                onInput={() => {
                  console.log(imgRef.current?.files);
                }}
                onDragEnter={() => {
                  imgRef.current?.classList.add("border-green-500");
                  console.log(imgRef.current?.files?.item(0));
                  console.log("second");
                }}
                onDrop={() => {
                  imgRef.current?.classList.remove("border-green-500");
                  console.log("first");
                }}
                className="opacity-0 w-full h-full bg-transparent outline-none text-[var(--color-dark)] border"
              />
            </div>
            <div className="flex justify-between items-center px-2 gap-3 py-1 h-12">
              <label className="w-1/3" htmlFor="desc">
                Desc
              </label>
              <input
                type="text"
                id="desc"
                className="w-full h-full bg-transparent outline-none text-[var(--color-dark)] border"
              />
            </div>
            <div className="flex justify-between items-center px-2 gap-3 py-1 h-12">
              <label className="w-1/3" htmlFor="amount">
                Amount
              </label>
              <input
                id="amount"
                type="number"
                className="w-full h-full bg-transparent outline-none text-[var(--color-dark)] border"
              />
            </div>
            <div className="flex justify-between items-center px-2 gap-3 py-1 h-12">
              <label className="w-1/3" htmlFor="show">
                Showcase
              </label>
              <input
                 
                accept="image/*"
                multiple
                id="show"
                ref={showRef}
                max={4}
                onInput={() => {
                  console.log(showRef.current?.files);
                }}
                onDragEnter={() => {
                  showRef.current?.classList.add("border-green-500");
                  console.log(showRef.current?.files?.item(0));
                  console.log("second");
                }}
                onDrop={() => {
                  showRef.current?.classList.remove("border-green-500");
                  console.log("first");
                }}
                className=" w-full h-full bg-transparent outline-none text-[var(--color-dark)] border"
              />
            </div>
          </fieldset>
          <button className="ml-auto px-2 py-1 rounded-lg bg-green-500">
            Add new field
          </button>
        </div>
        <div className="save mt-auto w-full">
          <button className="px-3 py-2 w-full rounded-2xl bg-green-500">
            Save new Product(s)
          </button>
        </div>
      </div>
      <div className="border px-2 overflow-y-scroll h-full">
        <h1>Preview</h1>

        {/* <h1>Click on a item to check out it's details</h1> */}
        <div className="image h-1/2 border">
          {/* showcase.length > 1 ? this : that */}
          <img
            src={clock}
            alt="product icon"
            className="w-full h-full object-cover"
          />
          {/* <Showcase /> */}
        </div>
        <div className="details px-2">
          <div className="flex justify-between items-center font-bold my-2">
            <h2>Name</h2>
            <p
              className="w-2/6 ml-auto h-5 overflow-hidden text-ellipsis"
              title="Family 4"
            >
              Family 4
            </p>
          </div>
          <div className="flex justify-between items-center font-bold my-2">
            <h2>price</h2>
            <p
              className="w-2/6 ml-auto h-5 overflow-hidden text-ellipsis"
              title="2,000"
            >
              2,000
            </p>
          </div>
          <div className="flex justify-between gap-2 items-center font-bold my-2">
            <h2>Desc</h2>
            <p
              className="w-2/6 ml-auto h-5  overflow-hidden text-ellipsis"
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              voluptatem quaerat voluptatibus explicabo laboriosam hic?"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              voluptatem quaerat voluptatibus explicabo laboriosam hic?
            </p>
          </div>
          <div className="flex justify-between items-center font-bold my-2">
            <h2>Purchased</h2>
            <p
              className="w-2/6 ml-auto h-5 overflow-hidden text-ellipsis"
              title="12/22/2023"
            >
              12/22/2023
            </p>
          </div>
          <div className="flex justify-between items-center font-bold my-2">
            <h2>Amount</h2>
            <p
              className="w-2/6 ml-auto h-5 overflow-hidden text-ellipsis"
              title="20"
            >
              20
            </p>
          </div>
          <div className="flex justify-between items-center font-bold my-2">
            <h2>Categories</h2>
            <p
              className="w-2/6 ml-auto h-5 overflow-hidden text-ellipsis"
              title="For men, luxury"
            >
              For men, luxury
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
