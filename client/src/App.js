import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Articles from "./Articles/Articles";
import "./App.css";
import Login from "./Login/Login";
import Admin from "./Admin/Admin";
import ReadFullArticle from "./ReadFullArticle/ReadFullArticle";

//import Login, { ProtectedRoute, NotProtectedLink } from "./Login";

function App() {
  return (
    <>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/articles" element={<Articles />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/admin" element={<Admin />} />
        <Route exact={true} path="/ReadFullArticle" element={<ReadFullArticle />} />
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;