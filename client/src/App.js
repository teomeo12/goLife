import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Articles from "./Articles/Articles";
import "./App.css";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Admin from "./Admin/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/articles" element={<Articles />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/register" element={<Register />} />
        <Route exact={true} path="/admin" element={<Admin />} />
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
