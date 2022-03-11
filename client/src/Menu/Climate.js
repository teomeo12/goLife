import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Climate.css";
import logo from "../Images/logo3.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Articles from "../Articles/Articles";

export default function Climate() {
  return (
    <>
      <Header />
      <Articles />
      <Footer />
    </>
  );
}
