import "./App.css";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Payment/Checkout";
import Details from "./pages/Payment/Details";
import Product from "./pages/Product/Product";
import Search from "./pages/Searches/Search";
import { Link, Route, Routes } from "react-router-dom";
import { TasksProvider } from "./context/Store";
import Orders from "./pages/Order/Orders";
import Wishlist from "./pages/Searches/Wishlist";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <TasksProvider>
        <div>
          <Routes>
            {/* <Route
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
            > */}
            <Route index element={<Home />} />
            <Route path="/search/:query?" element={<Search />} />
            <Route path="/categories/" element={<Categories />} />
            <Route path="/product/:name" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout/*?" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/details" element={<Details />} />
            <Route path="/user" element={<User />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="*"
              element={
                <h1>
                  Wrong page, <Link to="/">click here to redirect home</Link>{" "}
                </h1>
              }
            />
            {/* </Route> */}
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
export const BACKEND_URL = "https://ecommerce-x0we.onrender.com/";
export default App;
