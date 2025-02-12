const express = require("express");
const connectDB = require("./DB/db");

const cors = require("cors");
const dotenv = require("dotenv");
const formRoutes = require("./routes/form.route");
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/form", formRoutes);

app.listen(port, () => {
  connectDB();
  console.log("Port is running  ");
});
