const Popup = () => {
  return (
    <div className={` bg-green-500 fixed min-w-[300px]`}>
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
      // onClick={() => {
      //   setShowAbs(false);
      // }}
      >
        Close
      </button>
    </div>
  );
};

export default Popup;
