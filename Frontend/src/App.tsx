import "./App.css";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Verify from "./components/Verify";
import Home from "./components/Home";
// import Sidebar from "./components/Sidebar";
// import CategoriesList from "./components/CategoriesList";
// import Dashboard from "./components/Dashboard";
export const BACKEND_URL = "http://localhost:6001";
function App() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <Routes>
        <Route path="/">
          <Route index element={<Register user={user} setUser={setUser} />} />
          <Route
            path="login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="verify" element={<Verify user={user} />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes> */}
      {/* <CategoriesList /> */}

      <Home />
    </div>
  );
}
export default App;
