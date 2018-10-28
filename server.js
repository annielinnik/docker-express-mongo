"use strict";

const express = require("express");
const mongo = require("mongodb");

const PORT = 8080;
const url = "mongodb://db:27017/";

const app = express();

app.get("/", (req, res) => {
  try {
    mongo.MongoClient.connect(
      url,
      (err, db) => {
        if (err) throw err;

        db
          .db("docker-test")
          .collection("users")
          .find()
          .toArray((err, docs) => {
            if (err) throw err;

            res.send(docs);
          });
      }
    );
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT);
console.log(`Express is listening on ${PORT}`);
