import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Articles from "./Articles/Articles";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";

function App() {
  return (
    <>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">News</Link>
      </nav>

      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/articles" element={<Articles />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
