import "./App.css";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import Verify from "./pages/Auth/Verify";
import Home from "./pages/Home/Home";
import Categories from "./pages/Shop/Categories/Categories";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { Shop } from "./pages/Shop/Shop";
import { Profile } from "./pages/Home/Profile/Profile";
import { CartIcon } from "./components/CartIcon";
import Product from "./components/Product";
import Cart from "./components/Cart";
import UserProfile from "./components/Profile";
import { Header } from "./components/Header";
function App() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
        </Route>
        <Route path="/auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="verify" element={<Verify />} />
        </Route>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path=":category" element={<Shop />} />
        </Route>
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
      <CartIcon />
    </div>
  );
}
export default App;
