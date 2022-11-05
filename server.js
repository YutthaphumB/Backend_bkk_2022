const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
global.Task = require("./api/models/taskModel");
global.TaskVoter = require("./api/models/taskVoter");
const routes = require("./api/routes/taskRoutes");
const fileUpload = require("express-fileupload");

mongoose.connect("mongodb+srv://bkk2022:pass1234@atlascluster.tlfcs4f.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.use(cors()); // it enables all cors requests
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/images', express.static('uploads'));

// file upload api
app.post("/upload", (req, res) => {
  if (!req.files) {
    return res.status(500).send({ msg: "file is not found" });
  }
  // accessing the file
  const myFile = req.files.file;

  //  mv() method places the file inside public directory
  myFile.mv(`${__dirname}/uploads/${myFile.name}`, function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send({ msg: "Error occured" });
    }
    // returing the response with file path and name
    return res.send({ name: myFile.name, path: `/${myFile.name}` });
  });
});

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);
