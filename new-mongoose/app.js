const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongoose-test");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
  name: "yooyoo",
  email: "123@naver.com",
  password: "12345",
  age: 25,
});

newUser.save().then((value) => console.log("value is", value));
