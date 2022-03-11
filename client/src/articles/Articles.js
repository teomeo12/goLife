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
      <div className="contain">
        {data.map((x) => (
          <article key={x.id}>
            <div>
              <div>
                <h1>{x.title}</h1>
                <div>
                  {displayMedia(x.mediaType, x.mediaURL)}
                </div>
              </div>
              <span>
                <i></i>
              </span>
              <h5></h5>
              <div>
                <p>{x.content}</p>
              </div>
              <button>Read more</button>
            </div>


            {/* <section dangerouslySetInnerHTML={{ __html: x.content }}></section> */}
          </article>
        ))}
      </div>
      
        <Edit />
     
    </>
  );
}
