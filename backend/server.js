const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
dotenv.config();

const DB = process.env.DB_URL;
mongoose.connect(DB, { useNewUrlParser: true });

const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

//! Get
app.get("/users", async (req, res) => {
  const getUser = await User.find({});
  res.send(getUser);
});

//! Post
app.post("/users", async (req, res) => {
  const getBody = req.body;
  const postUser =  new User(getBody);
  postUser.save();
  res.send(postUser);
});

//! Delete
app.delete("/users/:id", async (req, res) => {
  const getId = req.params.id;
  const deleteUser = await User.findByIdAndDelete(getId);
  res.send(deleteUser);
});

app.get("/users/:id", async (req, res) => {
  const getId = req.params.id;
  const user = await User.findById(getId);
  res.send(user);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is up");
});