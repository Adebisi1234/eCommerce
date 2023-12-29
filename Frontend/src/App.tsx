import "./App.css";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import Verify from "./pages/Auth/Verify";
import Home from "./pages/Home/Home";
import Categories from "./pages/Shop/Categories/Categories";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Shop } from "./pages/Shop/Shop";
import { Profile } from "./pages/Home/Profile/Profile";
import { CartIcon } from "./components/CartIcon";
import Product from "./components/Product";
import Cart from "./components/Cart";
import UserProfile from "./components/Profile";
import { Header } from "./components/Header";
function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "dashboard",
              element: <Dashboard />,
            },
            {
              path: "categories",
              element: <Categories />,
            },
          ],
        },
        {
          path: "/auth",
          children: [
            {
              path: "register",
              element: <Register />,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "verify",
              element: <Verify />,
            },
          ],
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "/shop",
          children: [
            {
              index: true,
              element: <Shop />,
            },
            {
              path: ":category",
              element: <Shop />,
            },
          ],
        },
        {
          path: "user",
          children: [
            {
              path: ":id",
              element: <UserProfile />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

const Layout = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <Outlet />
      <CartIcon />
    </div>
  );
};
export default App;
