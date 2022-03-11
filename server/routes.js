const express = require("express");
const routes = express.Router();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("data/ecoalDB.sqllite");

module.exports = routes;

routes
  .get("/", (req, res) => {
    res.json("Hello world!!");
  })

  .get("/Articles", (req, res) => {
    db.all("select * from article", (err, rows) => res.json(rows));
  })

  .post("/upload", (req, res) => {
    console.log("server", req.body);
    console.log("image", req.files.Image);
    req.files.Image.mv(__dirname + "/media/" + req.files.Image.name, (err) => {
      if (err) return res.status(500).send(err);
      res.json({ file: req.files.Image.name });
    });
  });
