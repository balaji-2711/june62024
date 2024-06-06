import { MongoClient } from "mongodb";

// nodejs day 3
// 2.15.00
import Obj from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// const mongoConnectString =
// "mongodb+srv://balaji:balapass@cluster0.wr30crl.mongodb.net/?retryWrites=true&w=majority";

// const mongoConnectString =
//   "mongodb+srv://balaji:balapass@cluster0.wr30crl.mongodb.net/?retryWrites=true&w=majority";

// const mongoConnectString =
// "mongodb+srv://balaji:balapass@cluster0.wr30crl.mongodb.net/?retryWrites=true&w=majority";
const mongoConnectString = process.env.MONGO_URL;

export async function dbConnection() {
  // const client = new MongoClient(mongoConnectString);
  // const client = new MongoClient("mongodb+srv://balaji:balapass@cluster0.wr30crl.mongodb.net/?retryWrites=true&w=majority");

  // june 6
  // const client = new MongoClient(
  //   "mongodb+srv://balaji:balapass@cluster0.wr30crl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  // );

  const client = new MongoClient(mongoConnectString);

  await client.connect();
  console.log("vandhutten");
  return client;
  // mongodb+srv://balaji:<password>@cluster0.wr30crl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
}
export var ObjectId = Obj.ObjectId;
export const client = await dbConnection();

// inga await kudukala
