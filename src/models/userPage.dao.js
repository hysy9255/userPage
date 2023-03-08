const mongoose = require("mongoose");
const { userPageSchema } = require("../schemas/userPage.schema.js");
const UserPage = mongoose.model("userPage", userPageSchema);

const insertUserInfo = async (id, name, email, isAdmin, isBlocked) => {
  try {
    const userPage = await UserPage.create({
      userId: id,
      name: name,
      email: email,
      isAdmin: isAdmin,
      isBlocked: isBlocked,
    });
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
    const userPage = await UserPage.findOne({ email });
    userPage.posts.push({
      postId: id,
      title,
      name,
      email,
      contents,
      createdAt,
      updatedAt,
    });
    const result = await userPage.save();
    return result;
  } catch (error) {
    throw error;
  }
};

const getUserInfo = async (email) => {
  try {
    const userPage = await UserPage.findOne({ email });
    return userPage;
  } catch (error) {
    throw error;
  }
};
module.exports = { insertUserInfo, insertUserPosts, getUserInfo };
