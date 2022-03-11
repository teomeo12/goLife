import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import mail from "../Images/mail.png"
import password from "../Images/password.png"
import logo from "../Images/logo3.png"

export default function Login(props) {
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
        <h1 className="signup">Sign Up</h1>
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
            <input type="password" name="password" placeholder="Password" autoComplete="off" ref={props.passwordRef} required />
          </div>
          <div>
            <p><a href="" id="Forgot">Forgot password ?</a></p>
          </div>
          <div>
            <button type="submit" name="login" onClick={props.onSignup}>
              Login
            </button>
          </div>
          <div>
            <p>Don't have an account ? <a href="" id="Sign_upButton">Sign Up</a></p>
          </div>
        </div>
      </form>
    </>
  );
}


{/* <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="title">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="Title" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="content">
    <Form.Label>Content</Form.Label>
    <Form.Control type="text" placeholder="Content" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="myfile">
    <Form.Label>Image</Form.Label>
    <Form.Control type="file" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>; */}