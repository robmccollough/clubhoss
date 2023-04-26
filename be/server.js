const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
require("dotenv").config();

const app = express();
//Load routes
require("./routes")(app);
app.use(cors()); // to allow cross origin requests
app.use(bp.json()); // to convert the request into JSON

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB database Connected..."))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () =>
  console.log(`App listening at http://localhost:${process.env.PORT}`)
);
