import "./App.css";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Payment/Checkout";
import Details from "./pages/Payment/Details";
import Product from "./pages/Product/Product";
import Search from "./pages/Searches/Search";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { TasksProvider } from "./context/Store";
import Orders from "./pages/Order/Orders";
import Wishlist from "./pages/Searches/Wishlist";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import { useEffect } from "react";
import Admin from "./pages/admin/Admin";
import AllOrders from "./pages/admin/AllOrders";
import Payment from "./pages/admin/Payment";
import Products from "./pages/admin/Products";
import Shippings from "./pages/admin/Shippings";
import Layout from "./pages/admin/Layout";

export const BACKEND_URL = "http://localhost:6001";
function App() {
  const location = useLocation().pathname;
  useEffect(() => {
    if (!localStorage.getItem("THEME")) {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? localStorage.setItem("THEME", "dark")
        : localStorage.setItem("THEME", "light");
    }
    if (localStorage.getItem("THEME") === "light") {
      document.documentElement.style.setProperty("--bg-dark", "#121212");
      document.documentElement.style.setProperty("--bg-lightDark", "#212121");
      document.documentElement.style.setProperty("--color-dark", "#f8f8f8");
      document.documentElement.style.setProperty("--highlight", "#7ea1c1");
    } else if (localStorage.getItem("THEME") === "dark") {
      document.documentElement.style.setProperty("--bg-dark", "#ddd9d9");
      document.documentElement.style.setProperty("--bg-lightDark", "#f8f8f8");
      document.documentElement.style.setProperty("--color-dark", "#1f1f1f");
      document.documentElement.style.setProperty("--highlight", "#3884cb");
    }
  }, []);
  return (
    <>
      <TasksProvider>
        <>
          {location.includes("/admin") ? (
            <Routes>
              <Route path="/admin" element={<Layout />}>
                <Route index element={<Admin />} />
                <Route path="orders" element={<AllOrders />} />
                <Route path="payments" element={<Payment />} />
                <Route path="products" element={<Products />} />
                <Route path="shippings" element={<Shippings />} />
              </Route>
            </Routes>
          ) : (
            <div className="lg:grid lg:grid-cols-[220px_minmax(900px,_1fr)_200px] gap-2">
              <div className="hidden lg:block">
                <Sidebar />
              </div>
              <div>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/search/:query?" element={<Search />} />
                  <Route path="/categories/" element={<Categories />} />
                  <Route path="/product/:name" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout/*?" element={<Checkout />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/order" element={<Wishlist />} />
                  <Route path="/details" element={<Details />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/login" element={<Login />} />

                  <Route
                    path="*"
                    element={
                      <h1>
                        Wrong page,{" "}
                        <Link to="/">click here to redirect home</Link>{" "}
                      </h1>
                    }
                  />
                </Routes>
              </div>
              <div className="hidden w-full h-screen sticky top-0 xl:block">
                <Rightbar />
              </div>
            </div>
          )}
        </>
      </TasksProvider>
    </>
  );
}
export default App;
