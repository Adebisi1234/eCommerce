import "./App.css";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import Verify from "./pages/Auth/Verify";
import Home from "./pages/Home/Home";
import Categories from "./pages/Shop/Categories/Categories";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Shop } from "./pages/Shop/Shop";
import Product from "./components/Product";
import Cart from "./components/Cart";
import UserProfile from "./components/Profile";
import { Header } from "./components/Header";
import Orders from "./components/Orders";
import OrderProducts from "./components/OrderProducts";
import { CartIcon } from "./components/CartIcon";
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
          path: "cart/:id",
          element: <Cart />,
        },

        {
          path: "order",
          element: <OrderProducts />,
        },
        {
          path: "orders/:id",
          element: <Orders />,
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
    { path: "*", element: <h1>Page doesn't exist please go back to home</h1> },
  ]);
  return <RouterProvider router={router} />;
}

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <Outlet />
      {!pathname.includes("auth") && <CartIcon />}
    </div>
  );
};
export default App;
