import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Verify from "./components/Verify";
import Home from "./components/Home";
import { useState } from "react";
export const BACKEND_URL = "https://clock-backend-v8eh.onrender.com";
function App() {
  // Just to test a concept
  const [user, setUser] = useState({
    name: "",
    password: "",
    number: "",
    email: "",
    address: "",
  });
  return (
    <div className="max-w-lg mx-auto">
      <Routes>
        <Route path="/">
          <Route index element={<Register user={user} setUser={setUser} />} />
          <Route
            path="login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="verify" element={<Verify user={user} />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
