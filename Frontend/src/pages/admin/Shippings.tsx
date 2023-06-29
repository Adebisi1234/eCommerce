const Shippings = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-3 w-full h-full">
        <div className="border active p-3">
          <div className="header">
            <h2 className="font-extrabold text-2xl">Active Shippings</h2>
            <p>25 open shippings</p>
          </div>
          <div className="mt-3 shippings flex flex-col gap-6">
            {/* Shipping card something */}
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
          <div className="mt-3 shippings flex flex-col gap-6">
            {/* Shipping card something */}
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
        <div className="border details">
          {/* <h1>Click on a item to check out it's details</h1> */}
          <div className="image h-1/2 border"></div>
          <div className="details px-2">
            <div className="flex justify-between items-center font-bold my-2">
              <h2>Product Name</h2>
              <p>Family</p>
            </div>
            <div className="flex justify-between items-center font-bold my-2">
              <h2>Customer name</h2>
              <p>Tobiloba </p>
            </div>
            <div className="flex justify-between items-center font-bold my-2">
              <h2>Customer's Address</h2>
              <p>1234 Bolanle street</p>
            </div>
            <div className="flex justify-between items-center font-bold my-2">
              <h2>Purchased</h2>
              <p>12/22/2023</p>
            </div>
            <div className="flex justify-between items-center font-bold my-2">
              <h2>Delivered?</h2>
              <p>False</p>
            </div>
            <button className="w-full px-3 py-2 bg-[var(--highlight)] rounded-md text-center">
              Mark as Delivered
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shippings;
