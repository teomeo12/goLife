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

    const [ulVisible,setUlVisible]=useState(false)
    function handleClick(e){
        console.log("footer", e.target.checked);
        setUlVisible(e.target.checked);
    }
    const jsxUL= <ul>
        <li>salut</li>
        <li>hello</li>
        <li>yooo</li>
    </ul>;

    return (
      <footer >
        <section className="category-section contain">
            <input type="checkbox" className="category-box" id="category-news" onClick={handleClick}/>
            <label for="category-news" className="category-label">
                <h3>Categories</h3>
            </label>
            {ulVisible && jsxUL}
        </section>
      </footer>
    );
}
