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
import { Cart } from "./components/Cart";
function App() {
  return (
    <div className="mx-auto max-w-7xl">
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
        <Route path="/shop">
          <Route index element={<Shop />} />
          <Route path=":categories" element={<Shop />} />
        </Route>
      </Routes>
      <Cart />
    </div>
  );
}
export default App;
