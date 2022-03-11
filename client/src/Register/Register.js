import React, { useState, useEffect } from "react";
import axios from "axios";
import mail from "../Images/mail.png"
import password from "../Images/password.png"
import logo from "../Images/logo3.png"

export default function Register(props) {
  const [data, setData] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Title", e.target.title.value);
    console.log("Content", e.target.content.value);
    console.log("Image", e.target.myfile.files[0]);
  }
  return (
    <>
      <header>
        <div className="logo_img">
          <img src={logo} />
        </div>
        <h1>Sign Up</h1>
      </header>
      <div class="triangle"></div>
      <form onSubmit={props.onSignin}>
        <div class="container__form">
          <div class="container__div">
            <img src={mail} />
            <input type="email" id="username" autoComplete="off" placeholder="Email" ref={props.usernameRef} required />
          </div>
          <div class="container__div">
            <img src={password} />
            <input type="password" name="password" placeholder="Choose password" autoComplete="off" ref={props.passwordRef} required />
          </div>
          <div class="container__div">
            <img src={password} />
            <input type="password" name="password" placeholder="Confirm password" autoComplete="off" ref={props.passwordRef} required />
          </div>
          <div>
            <p><a href="" id="Forgot">Forgot password ?</a></p>
          </div>
          <div>
            <button type="submit" name="login" onClick={props.onSignup}>
              Sign Up
            </button>
          </div>
          <div>
            <p>Already have an account ? <a href="" id="Sign_upButton">Login</a></p>
          </div>
        </div>
      </form>
    </>
  );
}