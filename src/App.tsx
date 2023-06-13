import "./App.css";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Payment/Checkout";
import Details from "./pages/Payment/Details";
import Product from "./pages/Product/Product";
import Search from "./pages/Searches/Search";
import { Route, Routes } from "react-router-dom";
// import { useState, createContext } from "react";
import { TasksProvider } from "./context/Store";

function App() {
  // const [cartItem, setCartItems]: [
  //   string[],
  //   React.Dispatch<React.SetStateAction<string[]>>
  // ] = useState<string[]>(["Family"]);
  return (
    <>
      <TasksProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query?" element={<Search />} />
          <Route path="/categories/" element={<Categories />} />
          <Route path="/product/:name" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/*?" element={<Checkout />} />
          <Route path="/details" element={<Details disabled={false} />} />
        </Routes>
      </TasksProvider>
      {/* <Categories /> */}
      {/* <Product /> */}
      {/* <Cart num="2" /> */}
      {/* <Checkout /> */}
      {/* <Details /> */}
      {/* <Search query="Luxury" num={15} /> */}
    </>
  );
}

export default App;
