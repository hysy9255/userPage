const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postId: String,
  title: String,
  name: String,
  email: String,
  contents: String,
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

const userPageSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: { type: String, unique: true },
  isAdmin: Boolean,
  isBlocked: Boolean,
  posts: [postSchema],
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now() },
});

module.exports = { userPageSchema };
