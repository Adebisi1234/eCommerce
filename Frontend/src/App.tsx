import "./App.css";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Payment/Checkout";
import Details from "./pages/Payment/Details";
import Product from "./pages/Product/Product";
import Search from "./pages/Searches/Search";
import { Route, Routes, useLocation } from "react-router-dom";
// import { useState, createContext } from "react";
import { TasksProvider, useTasks } from "./context/Store";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useEffect, useRef, useState } from "react";
import Orders from "./pages/Order/Orders";
import Wishlist from "./pages/Order/Wishlist";

function App() {
  // const [cartItem, setCartItems]: [
  //   string[],
  //   React.Dispatch<React.SetStateAction<string[]>>
  // ] = useState<string[]>(["Family"]);
  let location = useLocation();
  const { cart } = useTasks();
  const [showSidebar, setShowSidebar] = useState(true);
  const sideRef = useRef<HTMLDivElement>(null!);

  return (
    <>
      <TasksProvider>
        <div>
          <div
            className={`w-full fixed z-50 inset-0 ${
              !showSidebar ? "-translate-x-full hidden" : "translate-x-0"
            } transition-all`}
            ref={sideRef}
            onClick={(e) => {
              console.log(e.target, sideRef.current);
              if (e.target === sideRef.current) {
                setShowSidebar(!showSidebar);
              }
            }}
          >
            <div className="sidebar bg-white w-2/3">
              <Sidebar />
            </div>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <Header
                  setShowSidebar={setShowSidebar}
                  leftIcon={location.pathname === "/" ? "menu" : "left"}
                  title={
                    location.pathname === "/"
                      ? "Home"
                      : location.pathname === "/cart"
                      ? `Cart (${cart.length})`
                      : location.pathname.includes("/search")
                      ? location.pathname.split("/search/")[1]
                      : location.pathname.includes("/categories")
                      ? "Categories"
                      : location.pathname.includes("/categories")
                      ? "Place Order"
                      : ""
                  }
                  rightIcon="cart"
                />
              }
            >
              <Route index element={<Home />} />
              <Route path="/search/:query?" element={<Search />} />
              <Route path="/categories/" element={<Categories />} />
              <Route path="/product/:name" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout/*?" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/details" element={<Details disabled={false} />} />
            </Route>
          </Routes>
        </div>
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
