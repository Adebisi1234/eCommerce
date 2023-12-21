import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Verify from "./components/Verify";
import Home from "./components/Home";
function App() {
  // const BACKEND_URL = "https://clock-backend-v8eh.onrender.com";
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="verify" element={<Verify />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}
export default App;
