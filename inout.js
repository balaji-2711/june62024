import express from "express";
import { client, dbConnection } from "./db.js";
// import { getAllStudent } from "../Controllers/students.js";  indha 2 dots naaldhan ivlo neram full confusion.......
import { getAllStudent } from "./Controllers/students.js";
// import { StudentRouter } from "./Routes/students.js";
import { StudentRouter } from "./Routes/students.js";

//june 6
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

const app = express();

dbConnection();

// app.get("/s", async (req, res) => {
//   try {
//     // const students = await client  // first indha 4 lines ah place change pannanga
//     //   .db("demo")
//     //   .collection("students")
//     //   .find()
//     //   .toArray();

//     const students = await getAllStudent();
//     if (students.length === 0) {
//       return res.status(404).json({ message: "someting probem da bala" });
//     }
//     res.status(200).json({ data: students });
//   } catch (error) {
//     console.log("err");
//     res.status(500).json({ message: "intennal server da bala" });
//   }
// });
// app.listen(8000, () => console.log("hello world"));

// app.get("/s", async (req, res) => {   //   next indha yellathayume place change pannitanga
//   try {
//     // const students = await client
//     //   .db("demo")
//     //   .collection("students")
//     //   .find()
//     //   .toArray();

//     const students = await getAllStudent();
//     if (students.length === 0) {
//       return res.status(404).json({ message: "someting probem da bala" });
//     }
//     res.status(200).json({ data: students });
//   } catch (error) {
//     console.log(err);
//     res.status(500).json({ message: "intennal server da bala" });
//   }
// });

app.use(express.json());
// app.get("/a", StudentRouter);
app.use("/sss", StudentRouter);

app.listen(PORT, () => console.log("hello world"));
