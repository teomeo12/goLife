import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Edit.css";
 import { Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Edit() {
  const [data, setData] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("Title", e.target.title.value);
    data.append("Content", e.target.content.value);
    data.append("Image", e.target.myfile.files[0]);

    const res = await axios.post("http://localhost:8000/upload", data);

    console.log("Title", e.target.title.value);
    console.log("Content", e.target.content.value);
    console.log("Image", e.target.myfile.files[0]);
    }

  return (
      <>
          
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
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
      </Form>
    </>
  );
}

//  <Form>
//    <Form.Group controlId="model">
//      <Form.Label>Title</Form.Label>
//      <Form.Control
//        ref={(input) => {
//          this.inputToFocus = input;
//        }}
//        type="text"
//        name="model"
//        value={this.state.model}
//        onChange={this.handleChange}
//      />
//    </Form.Group>
//    <Form.Group controlId="colour">
//      <Form.Label>Content</Form.Label>
//      <Form.Control
//        type="text"
//        name="colour"
//        value={this.state.colour}
//        onChange={this.handleChange}
//      />
//    </Form.Group>
//    <Form.Group controlId="photos">
//      <Form.Label>Photos</Form.Label>
//      <Form.Control
//        type="file"
//        name="photos"
//        multiple
//        onChange={this.handleFileChange}
//      />
//    </Form.Group>{" "}
//    <br />
//    <br />
//    {/* <LinkInClass
//           value="Update"
//           className="green-button"
//           onClick={this.handleSubmit}
//         />
//         <Link className="red-button" to={"/DisplayAllCars"}>
//           Cancel
//         </Link> */}
//  </Form>;
