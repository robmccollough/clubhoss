const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
require("dotenv").config();

const app = express();

// Apply plugins
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bp.json());

// Load routes
require("./routes")(app);

//Initialize DB Connection
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
