import Header from "../../components/Header";
const Product = () => {
  return (
    <div>
      <div className="top">
        <Header leftIcon="left" />
        <img src="" alt="product image" />
      </div>
      <div className="bottom">
        <div className="name">
          <p>name</p>
          <p>price</p>
        </div>
        <div className="desc">
          <h3>Description</h3>
          <p>desc...</p>
        </div>
        <div className="color">
          <h3>Choose color</h3>
          {/* Color */}
        </div>
        <button>
          <img src="" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
