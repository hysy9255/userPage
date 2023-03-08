const userPageDao = require("../models/userPage.dao.js");

const insertUserInfo = async (id, name, email, isAdmin, isBlocked) => {
  try {
    const userPage = await userPageDao.insertUserInfo(
      id,
      name,
      email,
      isAdmin,
      isBlocked
    );
    return userPage;
  } catch (error) {
    throw error;
  }
};

const insertUserPosts = async (
  id,
  title,
  name,
  email,
  contents,
  createdAt,
  updatedAt
) => {
  try {
    const userPage = await userPageDao.insertUserPosts(
      id,
      title,
      name,
      email,
      contents,
      createdAt,
      updatedAt
    );
    return userPage;
  } catch (error) {
    throw error;
  }
};

const getUserInfo = async (email) => {
  try {
    const userPage = await userPageDao.getUserInfo(email);
    return userPage;
  } catch (error) {
    throw error;
  }
};

module.exports = { insertUserInfo, insertUserPosts, getUserInfo };
