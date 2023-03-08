const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const myPageController = require("./src/controllers/userPage.controller.js");

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(morgan("tiny"));

  // Health Check
  app.get("/hello", async (req, res) => {
    res.status(200).send("hello");
  });

  app.post("/myPage", myPageController.insertUserInfo);

  app.patch("/myPage", myPageController.insertUserPosts);

  app.get("/myPage", myPageController.getUserInfo);

  app.use((error, req, res, next) => {
    res.staus(400).send({ message: error.message });
  });

  return app;
};

module.exports = { createApp };
