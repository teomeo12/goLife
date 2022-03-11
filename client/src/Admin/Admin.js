import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../Articles/Articles.css";

export default function Admin(props) {
    const [data, setData] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Title", e.target.title.value);
        console.log("Content", e.target.content.value);
        console.log("Image", e.target.myfile.files[0]);
    }
    return (
        <>
            <Header />
            <form action="" method="">
            <div className="Admin__container">
                <div>
                    <input type="text" placeholder="Title" required />
                </div>
                <div>
                    <textarea id="" name="" placeholder="Type your text just here" rows="33" cols="40">
                    </textarea>
                </div>
                <div>
                    <input type="text" placeholder="#Tags"  required />
                </div>
                <div>
                    <input type="file" id="Upload"  required accept="image/png, image/jpeg" />
                </div>
                <div>
                    <input type="submit" placeholder="Publish"  required />
                </div>
            </div>
           </form>
            <Footer />
        </>
    );
}