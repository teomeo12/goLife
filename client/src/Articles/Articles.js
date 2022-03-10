import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Articles.css";
import Edit from "../Edit/Edit";

export default function Articles() {
  const [data, setData] = useState([]);

  async function getArticles() {
    const data = (await axios.get("http://localhost:8000/articles")).data;
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    getArticles();
  }, []);

  function displayMedia(type, url) {
    return <img src={"http://localhost:8000/media/" + url} />;
  }

  return (
    <>
      {/* <div className="card">
        <img className="card-img-top" src="" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}

      <div className="container">
        {data.map((x) => (
          <article
            className="card m-2"
            key={x.id}
            style={{ textAlign: "center", minWidth: "100%" }}
          >
            <div className="card-body">
              <div className="text-muted">
                <h1 className="Article_title">{x.title}</h1>
                <div className="Article-image">
                  {displayMedia(x.mediaType, x.mediaURL)}
                </div>
              </div>
              <span className="pull-right delete-icon">
                <i className="fa fa-times"></i>
              </span>
              <h5 className="pt-2 border-top"></h5>
              <div className="Article_content">
                <h1>{x.content}</h1>
              </div>
            </div>
            <div className="card-footer text-right">
              <div className="float-left">
                <span className="badge">{} </span>
              </div>
              <div className="float-right"></div>
              <button className="btn btn-primary">Read more</button>
            </div>

            {/* <section dangerouslySetInnerHTML={{ __html: x.content }}></section> */}
          </article>
        ))}
      </div>
      
        <Edit />
     
    </>
  );
}
