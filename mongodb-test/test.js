const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("secondDB");
  const inventory = database.collection("inventory");

  // const inventoryData = await inventory.insertOne({
  //   item: "canvas",
  //   qty: 100,
  //   tags: ["cotton"],
  //   size: { h: 28, w: 35.5, uom: "cm" },
  // });
  // console.log(inventoryData);

  // const inventoryList = [
  //   {
  //     item: "journal",
  //     qty: 25,
  //     tags: ["blank", "red"],
  //     size: { h: 14, w: 21, uom: "cm" },
  //   },
  //   {
  //     item: "mat",
  //     qty: 85,
  //     tags: ["gray"],
  //     size: { h: 27.9, w: 35.5, uom: "cm" },
  //   },
  //   {
  //     item: "mousepad",
  //     qty: 25,
  //     tags: ["gel", "blue"],
  //     size: { h: 19, w: 22.85, uom: "cm" },
  //   },
  // ];
  // const inventoryListResult = await inventory.insertMany(inventoryList);
  // console.log(inventoryListResult);

  // const findInventory = await inventory.find({}).toArray();
  // console.log(findInventory);

  // const inventoryList02 = [
  //   {
  //     item: "planner",
  //     qty: 75,
  //     size: { h: 22.85, w: 30, uom: "cm" },
  //     status: "D",
  //   },
  //   {
  //     item: "postcard",
  //     qty: 45,
  //     size: { h: 10, w: 15.25, uom: "cm" },
  //     status: "A",
  //   },
  // ];
  // const inventoryListResult02 = await inventory.insertMany(inventoryList02);
  // console.log(inventoryListResult02);

  const findInventory = await inventory
    .find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })
    .toArray();
  console.log(findInventory);
}
run();
