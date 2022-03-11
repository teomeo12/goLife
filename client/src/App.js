import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Articles from "./Articles/Articles";
import "./App.css";
import Login from "./Login/Login";
import Admin from "./Admin/Admin";
import Register from "./Register/Register";
import ReadFullArticle from "./ReadFullArticle/ReadFullArticle";
import Climate from "./Menu/Climate";
import Fashion from "./Menu/Fashion";
import Food from "./Menu/Food";
import House from "./Menu/House";
import Travel from "./Menu/Travel";
import Wellbeing from "./Menu/Wellbeing";
import Flying from "./Menu/Flying";
import Sport from "./Menu/Sport";

//import Login, { ProtectedRoute, NotProtectedLink } from "./Login";

function App() {
  return (
    <>
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/articles" element={<Articles />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/register" element={<Register />} />
        <Route exact={true} path="/admin" element={<Admin />} />
        <Route
          exact={true}
          path="/ReadFullArticle"
          element={<ReadFullArticle />}
        />
        <Route exact={true} path="/flying" element={<Flying />} />
        <Route exact={true} path="/travel" element={<Travel />} />
        <Route exact={true} path="/sport" element={<Sport />} />
        <Route exact={true} path="/food" element={<Food />} />
        <Route exact={true} path="/wellbeing" element={<Wellbeing />} />
        <Route exact={true} path="/fashion" element={<Fashion />} />
        <Route exact={true} path="/house" element={<House />} />
        <Route exact={true} path="/climate" element={<Climate />} />
        <Route path="*" element={() => <p>Page Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
