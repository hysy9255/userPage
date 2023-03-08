const myPageService = require("../services/userPage.service.js");

const insertUserInfo = async (req, res, next) => {
  try {
    const userPage = await myPageService.insertUserInfo(
      req.body.userInfo._id,
      req.body.userInfo.name,
      req.body.userInfo.email,
      req.body.userInfo.isAdmin,
      req.body.userInfo.isBlocked
    );
    res.status(200).send({ message: "Successfully posted", userPage });
  } catch (error) {
    next(error);
  }
};

const insertUserPosts = async (req, res, next) => {
  try {
    const userPage = await myPageService.insertUserPosts(
      req.body.postInfo._id,
      req.body.postInfo.title,
      req.body.postInfo.name,
      req.body.postInfo.email,
      req.body.postInfo.contents,
      req.body.postInfo.createdAt,
      req.body.postInfo.updatedAt
    );
    console.log(userPage);
    res.status(200).send({ message: "Successfully posted", userPage });
  } catch (error) {
    next(error);
  }
};

const getUserInfo = async (req, res, next) => {
  try {
    const userPage = await myPageService.getUserInfo(req.body.email);
    res.status(200).send({ message: "User page has been retrieved", userPage });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertUserInfo,
  insertUserPosts,
  getUserInfo,
};
