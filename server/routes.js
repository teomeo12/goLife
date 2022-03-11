const express = require("express");
const routes = express.Router();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("data/ecoalDB");

module.exports = routes;

routes
  .get("/", (req, res) => {
    res.json("Hello world!!");
  })

  .get("/articles", (req, res) => {
    db.all("select * from article", (err, rows) => res.json(rows));
  })

  .post("/upload", (req, res) => {
    console.log("server", req.body);
    console.log("image", req.files.Image);

    req.files.Image.mv(__dirname + "/media/" + req.files.Image.name, (err) => {
      if (err) return res.status(500).send(err);
      res.json({ file: req.files.Image.name });
    });
  })

  .put("/articles/:id", (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let thumbnailURL = req.body.content;
    let mediaType = req.body.mediaType;
    let mediaUrl = req.body.mediaUrl;

    db.run(
      "UPDATE article SET(title, content, thumbnailURL, mediaType, mediaUrl) values (?,?,?,?,?)",
      [title, content, thumbnailURL, mediaType, mediaUrl],
      (err) => {
        if (err) {
          return res.status(500).json(err);
        }
        res.json(200).json({
          success: "true",
          message: "article editing successful",
        });
      }
    );
  })

  .post("/articles", (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let thumbnailURL = req.body.content;
    let mediaType = req.body.mediaType;
    let mediaUrl = req.body.mediaUrl;

    db.run(
      "INSERT INTO article (title, content, thumbnailURL, mediaType, mediaUrl) values (?,?,?,?,?)",
      [title, content, thumbnailURL, mediaType, mediaUrl],
      (err) => {
        if (err) {
          console.log("An Error has occured");
          return res.status(500).json(err);
        }
        console.log("successful");
        res.status(200).json({
          success: "true",
          message: "article successful",
        });
      }
    );
  });

module.exports = routes;

// .post("/upload", (req, res) => {
//   if (req.files.media) {
//     req.files.thumbnail.mv(`./thumbnail/${req.files.thumbnail.name}`);
//     req.files.media.mv(`./media/${req.files.media.name}`);
//     db.run(
//       `insert into article (title, content, thumbnailURL, mediaType, mediaURL, leadStory)  values ('${req.body.title}', '${req.body.content}', '${req.files.thumbnail.name}', '${req.files.media.mimetype}', '${req.files.media.name}', ${req.body.leadStory})`
//     );
//   } else {
//     req.files.thumbnail.mv(`./thumbnail/${req.files.thumbnail.name}`);
//     db.run(
//       `insert into article (title, content, thumbnailURL, leadStory)  values ('${req.body.title}', '${req.body.content}', '${req.files.thumbnail.name}', ${req.body.leadStory})`
//     );
//   }
// });
