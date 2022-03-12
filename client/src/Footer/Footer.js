import React, {Component, useState} from "react";
import "../Footer/Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
//import googlePlay from "../Images/google_play.png";

// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";



export default function Footer() {

    const [ulVisibleCat,setUlVisibleCat]=useState(false)
    const [ulVisibleLog,setUlVisibleLog]=useState(false)
    const jsxCat = (
      <ul>
        <li className="categories">Travel</li>
        <li className="categories">Food</li>
        <li className="categories">Sport</li>
        <li className="categories">House</li>
        <li className="categories">Fashion</li>
      </ul>
    );
    const jsless = "-";

    const jsmore = "+";

    const jsxLog= <ul>
        <li ><Link to="/login">Login</Link></li>
        <li><Link to="/register">About</Link></li>
    </ul>;

    function handleClickCat(e){
        console.log("footer", e.target.checked);
        setUlVisibleCat(e.target.checked);
    }
    function handleClickLog(e){
        console.log("footer", e.target.checked);
        setUlVisibleLog(e.target.checked);
    }

    return (
        <footer >
            <section className="category-section contain">
                <input type="checkbox" className="category-box" id="category-news" onClick={handleClickCat}/>
                <label for="category-news" className="category-label">
                    <h3 className="footer-title">Categories {!ulVisibleCat && jsmore} {ulVisibleCat && jsless}</h3>
                </label>
                {ulVisibleCat && jsxCat}
            </section>
            <section className="login-section contain">
                <input type="checkbox" className="category-box" id="login-box" onClick={handleClickLog}/>
                <label for="login-box" className="category-label  ">
                    <h3 className="footer-title">Connexion {!ulVisibleLog && jsmore} {ulVisibleLog && jsless}</h3>
                </label>
                {ulVisibleLog && jsxLog}
            </section>
            <section className="login-section contain">
                <h3 className="footer-title"><Link to="/contact">Contact</Link></h3>
            </section>
        </footer>
    );
}
