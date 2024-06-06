// const express = require("express");

// const app = express();

// app.get("/out", (req, res) => {
//   res.send("out seccess");
// });

// app.listen(4000, () => console.log("outdex da"));

// next
// const express = require("express");

// const app = express();

// app.get("/content", (req, res) => {
//   res.send("backend raja");
//   res.send({ message: "vanakan da mapla " });
// });

// app.listen(4000, () => console.log("next"));

// aduthu

const carData = [
  {
    car: "alto",
    brand: "maruthi",
    country: "china",
  },
  {
    car: "creta",
    brand: "hyndai",
    country: "korean",
  },
  {
    car: "alto",
    brand: "800",
    country: "india",
  },
  {
    car: "swift",
    brand: "800",
    country: "india",
  },
  {
    car: "swift",
    brand: "800",
    country: "india",
  },
  {
    car: "swift",
    brand: "800",
    country: "india",
  },
];

const express = require("express");

const app = express();
app.use(express.json());

// 1
// app.get("/car/all", (req, res) => {
//   console.log(req.query);
//   res.send({ wwwww: carData });
// });
// app.listen(5005, () => console.log("volvo "));

// app.get("/car/all", (req, res) => {
//   // console.log(req.query);
//   const { car } = req.query;
//   let returnData = carData;

//   if (req.query) {
//     if (car) {
//       returnData = returnData.filter((val) => val.car === car);
//     }
//   }
//   res.send({ dataa: returnData });
// });

// 2

// app.get("/car/:car", (req, res) => {
//   const { car } = req.params;
//   const selectedData = carData.filter((val) => val.car === car);
//   // res.status(200).send(`the parameter is ${selectedData}`);
//   res.status(200).send({ selectedData });
// });

// app.listen(5005, () => console.log("perfect "));

// post
// app.post("/car/add", express.json(), (req, res) => {
//   //method 1
//   // const newCar = {
//   //   car: "audi",
//   //   brand: "audi",
//   //   country: "german",
//   // };
//   //method 1

//   //method 2
//   const newCar = req.body; // semma da see in postman body json in post
//   //method 2

//   carData.push(newCar);
//   console.log(req.body);
//   res.status(201).json({ wow: carData });
// });

// deleting
app.delete("/car/delete/:car", (req, res) => {
  const { car } = req.params;
  const newCarList = carData.filter((val) => val.car !== car);
  res.send(newCarList);
  res.send({ message: `${car} is deleted successfully` });
});
app.listen(5005, () => console.log("perfect "));
