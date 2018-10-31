"use strict";

const express = require("express");
const { MongoClient } = require("mongodb");

const PORT = 8080;
const url = "mongodb://db:27017/";
const app = express();

app.get("/", (req, res) => {
  try {
    MongoClient.connect(
      url,
      (err, db) => {
        if (err) throw err;

        db          
          .db("docker-test")
          .collection("users")
          .find()
          .toArray((err, users) => {
            if (err) throw err;

            res.send(users);
          });

      }
    );
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT);
console.log(`Express is listening on ${PORT}`);
