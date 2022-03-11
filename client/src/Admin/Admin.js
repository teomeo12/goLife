import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";
import logo from "../Images/logo3.png"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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

            <Footer />
        </>
    );
}