import express from "express";

import {
  DeleteStudent,
  EditStudent,
  PostNewStudent,
  getAllStudent,
  getStudentById,
} from "../Controllers/students.js";

const route = express.Router();

route.get("/alll", async (req, res) => {
  try {
    console.log(req.query);
    const students = await getAllStudent(req);
    if (students.length === 0) {
      return res.status(404).json({ message: "someting probem da bala" });
    }
    res.status(200).json({ data: students });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "intennal server da bala" });
  }
});

// route.get("/all/:id", (req, res) => {
//   try {
//     console.log(req.params);
//   } catch (error) {
//     res.status(500).json({ message: "mistake da" });
//   }
// });

// now commented june 5
route.get("/all/:id", async (req, res) => {
  try {
    // console.log(req.query);
    const { id } = req.params;
    const students = await getStudentById(id);
    if (!students) {
      return res.status(400).json({ message: "someting probem da bala" });
    }
    res.status(200).json({ data: students });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "intennal server da bala" });
  }
});

//now in cloud june 5 nodejs day 4class 1.35.30

route.post("/add", async (req, res) => {
  try {
    // console.log(req.query);
    const bidi = req.body;
    const students = await PostNewStudent(bidi);
    if (!students) {
      return res.status(400).json({ message: "someting probem da bala" });
    }
    res.status(200).json({ data: students });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "intennal server da bala" });
  }
});

route.put("/edit/:id", async (req, res) => {
  try {
    // console.log(req.query);
    const { id } = req.params;
    const updatedStudents = req.body;
    const students = await EditStudent(id, updatedStudents);
    if (!id || !updatedStudents) {
      return res.status(400).json({ message: "someting probem da bala" });
    }
    res.status(200).json({ data: students, status: updatedStudents });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "intennal server da bala" });
  }
});

//june 6 nodejs day 4    1.14.00
route.delete("/delete/:id", async (req, res) => {
  try {
    // console.log(req.query);
    const { id } = req.params;
    // const updatedStudents = req.body;
    // const students = await EditStudent(id, updatedStudents);
    if (!id) {
      return res.status(400).json({ message: "someting probem da in Id" });
    }
    const result = await DeleteStudent(id);
    if (!result) {
      return res.status(400).json({ message: "no result da" });
    }

    res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "intennal server da bala" });
  }
});
// app.listen(8000, () => console.log("hello world"));

export const StudentRouter = route;
