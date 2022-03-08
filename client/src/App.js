import { Route, Link, Routes } from "react-router-dom";
import Home from "./home/Home";
import Articles from "./articles/Articles";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
