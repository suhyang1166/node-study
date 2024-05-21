const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const users = database.collection("users");

  // const userData = await users.insertOne({
  //   name: "yooyoo",
  //   age: 17,
  // });
  // console.log("result", userData);

  // const userList = [
  //   { name: "tea", age: 31 },
  //   { name: "jessi", age: 25 },
  // ];
  // const userListResult = await users.insertMany(userList);
  // console.log("result", userListResult);

  // const findUser = await users.findOne({ age: { $gt: 20 } });
  // console.log("result", findUser);

  // const updateUser = await users.updateOne(
  //   { name: "yooyoo" },
  //   { $set: { age: 18 } }
  // );
  // console.log(updateUser);

  // const deleteUsers = await users.deleteMany({ age: { $gt: 20 } });
  // consolelog(deleteUsers);

  const userData = await users
    .find({ name: "yooyoo" })
    .project({ name: 1, _id: 0 })
    .toArray();
  console.log(userData);
}
run();
