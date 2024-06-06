// // // console.log(process.argv);

// // // const [, , name] = process.argv;
// // // console.log("and the award goes to", name);

// // // // const { log } = require("console");
// // // // const fs = require("fs");

// // // // fs.readFile("./sampleFile.txt", "utf-8", (err, data) => {
// // // //   if (err) {
// // // //     console.log("error committtted");
// // // //   } else {
// // // //     console.log(data);
// // // //   }
// // // // });

// // // // const sample = "i am a little star";

// // // // fs.writeFile("Writingfile.txt", sample, (err) => {
// // // //   if (err) {
// // // //     console.log(err);
// // // //   } else {
// // // //     console.log("successfull da");
// // // //   }
// // // // });

// // // // const sample2 = "\ni am a little star2";

// // // // fs.appendFile("./WritingFile.txt", sample2, (err) => {
// // // //   if (err) {
// // // //     console.log(err);
// // // //   } else {
// // // //     console.log("nice");
// // // //   }
// // // // });

// // // // revision
// // // // revision
// // // // revision
// // // // revision
// // // // revision

// // // // read

// // // const { log } = require("console");
// // // const fs = require("fs");
// // // fs.readFile("./sampleFile.txt", "utf-8", (err, data) => {
// // //   if (err) {
// // //     console.log(err);
// // //   } else {
// // //     console.log(data);
// // //   }
// // // });

// // // // write
// // // const just = "let me try";
// // // fs.writeFile("./try.txt", just, (err) => {
// // //   if (err) {
// // //     console.log(err);
// // //   } else {
// // //     console.log("succesfully tried");
// // //   }
// // // });

// // // // update / append

// // // const just2 = "\nlet me try 2";
// // // fs.appendFile("./try.txt", just2, (err) => {
// // //   if (err) {
// // //     console.log(err);
// // //   } else {
// // //     console.log("successfully tried 2");
// // //   }
// // // });
// // .
// // // // delete/ unlink

// // // fs.unlink("try.txt", (err) => {
// // //   if (err) {
// // //     console.log(err);
// // //   } else {
// // //     console.log("deleted da");
// // //   }
// // // });

// // // again quick revision

// // // const fs = require("fs");
// // // const { log } = require("util");

// // // fs.readFile("./read.txt", "utf-8", (err, data) => {
// // //   if (err) {
// // //     console.log(err);
// // //   } else {
// // //     console.log(data);
// // //   }
// // // });

// // // const content = "reading boss again";
// // // fs.writeFile("./read.txt", content, (err) => {
// // //   if (err) {
// // //     console.log(err);
// // //   } else {
// // //     console.log("read success");
// // //   }
// // // });

// // const os = require("os");

// // // console.log("version is.....", os.version());

// // const mani = Date.now();
// // console.log("and the time is.......", mani);

// // const naal = new Date();
// // console.log("and the naal  is.......", naal);

// // console.log("current working directory name", __filename);

// // // may 30 night  9pm
// // // express

// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("hey im fully backend");
// });
// app.listen(9000, () => console.log("server started newly"));

const express = require("express");

const app = express();

app.get("/content", (req, res) => {
  // res.send("backend raja");
  res.send({ message: "vanakan da mapla " });
});

// // // app.get("/content", (req, res) => {
// // //   // res.send("backend raja");

// // //   let date = new Date();
// // //   let timestampJam = date.toUTCString().slice(0, -3);

// // //   res.send({ ttt: timestampJam });
// // // });

app.listen(3005, () => console.log("super try"));

// // // // node index.js

// // // const fs = require("fs");
// // // // const neram = "woow";
// // // const date = new Date();
// // // const neram = date.toUTCString().slice(0, -3);
// // // fs.writeFile(date.toUTCString().slice(0, 19), neram, (err) => {
// // //   if (err) {
// // //     // console.log("err happend");
// // //     console.log(err);
// // //   } else {
// // //     console.log("updatted timeda");
// // //   }
// // // });

// // const { log } = require("console");
// // const express = require("express");
// // const fs = require("fs");

// // const app = express();

// // app.get("/justdial", (req, res) => {
// //   let date = new Date();
// //   let times = date.toUTCString().slice(0, -2);

// //   fs.writeFile("./mani.txt", times, (err) => {
// //     if (err) {
// //       // console.log("err happend");
// //       res.send("thappu aaidchi");
// //     }
// //   });
// //   res.send({ ans: times });
// // });

// // app.listen(3002, () => console.log("new dial"));

// // const os = require("os");

// // // console.log("va da", __dirname);
// // console.log("va da", __filename);

// // const path = require("path");

// // const dirname = path.join(__dirname, "r u ok baby");

// // console.log(dirname);

// // june 1 revision
// // line 150

// // const express = require("express");

// // const app = express();

// // app.get("/ss", (req, res) => {
// //   let ajee = new Date();
// //   let ttf = ajee.toUTCString().slice(0, 10);
// //   res.send({ mess: ttf });
// // });
// // app.listen(5000, () => console.log("i tried correctly"));

// // const { log } = require("console");
// const express = require("express");
// const fs = require("fs");

// const app = express();

// app.get("/ss", (req, res) => {
//   let ajee = new Date();
//   let ttf = ajee.toUTCString().slice(0, 10);
//   fs.writeFile("./june1", ttf, (err) => {
//     // if (err) {
//     //   console.log("thaappu thambi");
//     // } else {
//     //   console.log("correct thambi");
//     // }

//     if (err) {
//       res.send("thpppu");
//     }
//   });
//   res.send({ mess: ttf });
// });
// app.listen(5000, () => console.log("i tried correctly"));

// // const express = require("express");
// // const fs = require("fs");

// // const app = express();

// // app.get("/justdial", (req, res) => {
// //   let date = new Date();
// //   let times = date.toUTCString().slice(0, -2);

// //   fs.writeFile("./mani.txt", times, (err) => {
// //     if (err) {
// //       // console.log("err happend");
// //       res.send("thappu aaidchi");
// //     }
// //   });
// //   res.send({ ans: times });
// // });

// // app.liste

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

// const express = require("express");

// const app = express();
// app.use(express.json());

app.get("/car/all", (req, res) => {
  console.log(req.query);
  res.send({ wwwww: carData });
});
// app.listen(5005, () => console.log("volvo "));

// semma.. this worked.. greatly
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

// app.get("/car/:car", (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });

// app.get("/car/:car", (req, res) => {
//   const { car } = req.params;
//   res.status(200).send(`the parameter is ${car}`);
// });

// app.listen(5005, () => console.log("volvo "));

// app.get("/car/:car", (req, res) => {
//   const { car } = req.params;
//   const selectedData = carData.filter((val) => val.car === car);
//   // res.status(200).send(`the parameter is ${selectedData}`);
//   res.status(200).send({ selectedData });
// });

app.get("/car/all/spec", (req, res) => {
  // const { car } = req.params;
  const selectedInfo = carData.map((val) => ({
    carname: val.car,
    companyname: val.brand,
  }));
  // res.status(200).send(`the parameter is ${selectedData}`);
  res.status(200).send({ selectedInfo });
});

// app.use(express.json);
app.use(express.json()); // this is a middleware function

app.post("/car/add", express.json(), (req, res) => {
  //method 1
  // const newCar = {
  //   car: "audi",
  //   brand: "audi",
  //   country: "german",
  // };
  //method 1

  //method 2
  const newCar = req.body; // semma da see in postman body json in post
  //method 2

  carData.push(newCar);
  console.log(req.body);
  res.status(201).json({ wow: carData });
});

app.put("/car/edit/:car", (req, res) => {
  const { car } = req.params;
  const selec = carData.find((val) => val.car === car);
  selec.country = req.body.country;
  res.status(200).send({ selec });
});

app.delete("/car/delete/:car", (req, res) => {
  const { car } = req.params;
  const newCarList = carData.filter((val) => val.car !== car);
  // res.send(newCarList);
  res.send({ message: `${car} is deleted successfully` });
});

app.listen(5006, () => console.log("volvoo "));
