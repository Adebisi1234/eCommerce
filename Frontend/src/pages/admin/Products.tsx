const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-x-3 w-full h-full">
      <div className="border px-2">
        <h1>All Products</h1>
        {/* List that displays a modal when hovered on where all details is showed and edit button is there which focuses the second column and change "new" to "edit"  */}
        <div className="prod flex justify-between items-center my-3">
          <div className="img w-12 h-12 bg-green-400"></div>
          <h3>Family 1</h3>
          <div className="name  overflow-hidden text-ellipsis">
            <p title="NGN 2,000">NGN 2,000</p>
          </div>
        </div>
        <div className="prod flex justify-between items-center my-3">
          <div className="img w-12 h-12 bg-green-400"></div>
          <h3>Family 1</h3>
          <div className="name  overflow-hidden text-ellipsis">
            <p title="NGN 2,000">NGN 2,000</p>
          </div>
        </div>
        <div className="prod flex justify-between items-center my-3">
          <div className="img w-12 h-12 bg-green-400"></div>
          <h3>Family 1</h3>
          <div className="name  overflow-hidden text-ellipsis">
            <p title="NGN 2,000">NGN 2,000</p>
          </div>
        </div>
      </div>
      <div className="border px-2">
        <h1>New Product</h1>
        <div>{/* Details of new watch and stuff */}</div>
      </div>
      <div className="border px-2">
        <h1>Preview</h1>
      </div>
    </div>
  );
};

export default Products;
