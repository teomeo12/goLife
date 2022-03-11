import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Articles.css";
import Edit from "../Edit/Edit";

export default function Articles() {
  const [data, setData] = useState([]);

  async function getArticles() {
    const data = (await axios.get("http://localhost:8000/articles")).data;
    setData(data);
    console.log("articles", data);
  }

  useEffect(() => {
    getArticles();
  }, []);

  function displayMedia(type, url) {
    return <img src={"http://localhost:8000/media/" + url} />;
  }
  function fullReadArtticle(type, url) {

    return <img src={"http://localhost:8000/" + url} />;
  }

  return (
    <>
      <div className="contain">
        {data.map((x) => (
          <article key={x.id}>
            <div>
              <div>
                <h1>{x.title}</h1>
                <div>{displayMedia(x.mediaType, x.mediaURL)}</div>
              </div>
              <span>
                <i></i>
              </span>
              <h5></h5>
              <div>
                <p dangerouslySetInnerHTML={{ __html: x.content }}></p>
              </div>
              <button onClick={fullReadArtticle}>Read more</button>
            </div>

            {/* <section dangerouslySetInnerHTML={{ __html: x.content }}></section> */}
          </article>
        ))}
      </div>

      {/* <Edit /> */}
    </>
  );
}
