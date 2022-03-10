import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Edit() {
  const [data, setData] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
   

    console.log("Title", e.target.title.value);
    console.log("Content", e.target.content.value);
    console.log("Image", e.target.myfile.files[0]);
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
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