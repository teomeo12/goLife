import React, { Component } from "react";
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

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="follow">
            <h3 className="logo-text">
              Follow <span>Us</span>
            </h3>

            <div className="socials">
              <a href="https://www.facebook.com/DkIT.ie/" className="social_FB">
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/dkit_ie/?hl=en"
                className="social_IN"
              >
                <BsInstagram />
              </a>
              <a
                href=" https://twitter.com/DkIT_ie?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                className="social_TW"
              >
                <BsTwitter />
              </a>
              <a
                href="https://www.youtube.com/user/DkITVideo"
                className="social_YT"
              >
                <GrYoutube />
              </a>
            </div>
          </div>

          <div className="links">
            <h3 className="logo-text">Links </h3>

            <ul>
              <li>
                <a href="https://www.tripadvisor.ie/Attractions-g212094-Activities-c26-Dundalk_County_Louth.html">
                  Shops
                </a>
              </li>
              <li>
                <a href="https://www.tripadvisor.ie/Restaurants-g212094-Dundalk_County_Louth.html">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="https://www.daft.ie/louth/rooms-to-share/dundalk/">
                  Accommodation
                </a>
              </li>
            </ul>
          </div>

          <div className="contact">
            <h3 className="logo-text">
              Contact <span>Us</span>
            </h3>
            <ul>
              <li>
                <BsTelephoneForwardFill /> &nbsp; 047-8631274
              </li>
              <li>
                <AiOutlineMail /> &nbsp;
                <a href="mailto:teomeo82@gmail.com">teomeo82@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            copyright &copy;{" "}
            <a href="https://www.dkit.ie/">
              DKIT 2022 | Design by Teodor Donchev
            </a>
          </p>
          <Link to="/">
            {/* <img src={googlePlay} className="header__logo" alt="Logo" /> */}
          </Link>
          {/*<div className="footer-menu">*/}
          {/*    <ul className="f-menu">*/}
          {/*        <li><a href="">Home</a></li>*/}
          {/*        <li><a href="">About</a></li>*/}
          {/*        <li><a href="">Blog</a></li>*/}
          {/*    </ul>*/}
          {/*</div>*/}
        </div>
      </footer>
    );
  }
}
