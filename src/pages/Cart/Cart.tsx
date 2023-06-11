import Header from "../../components/Header";

const Cart = ({ num }: { num: string }) => {
  return (
    <div>
      <div className="top">
        <Header leftIcon="left" title={`cart(${num})`} />

        <div className="list">{/* List */}</div>
      </div>

      <div className="bottom">
        <h2>Order Info</h2>
        <div className="details">
          <p>name</p>
          <p>price</p>
        </div>
        <div className="delivery">
          <p>Delivery</p>
          <p>price</p>
        </div>
        <hr />
        <div className="total">
          <p>Total</p>
          <p>price</p>
        </div>

        <button>Proceed to place order</button>
      </div>
    </div>
  );
};

export default Cart;
