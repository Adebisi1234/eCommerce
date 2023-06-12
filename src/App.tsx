import "./App.css";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Payment/Checkout";
import Details from "./pages/Payment/Details";
import Product from "./pages/Product/Product";
import Search from "./pages/Searches/Search";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Categories /> */}
      {/* <Product /> */}
      {/* <Cart num="2" /> */}
      {/* <Checkout /> */}
      <Details />
      {/* <Search query="Luxury" num={15} /> */}
    </>
  );
}

export default App;
