import { client } from "../db.js";
import { ObjectId } from "bson";
// export function getAllStudent() {
//   return client.db("demo").collection("students").find().toArray();
// }

export function getAllStudent(req) {
  return client.db("demo").collection("students").find(req.query).toArray();
}

export function getStudentById(id) {
  return client
    .db("demo")
    .collection("students")
    .findOne({ _id: new ObjectId(id) });
}

export function PostNewStudent(data) {
  return client.db("demo").collection("students").insertOne(data);
}

export function EditStudent(id, data) {
  return client
    .db("demo")
    .collection("students")
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data });
}

export function DeleteStudent(id) {
  return client
    .db("demo")
    .collection("students")
    .deleteOne({ _id: new ObjectId(id) });
}
