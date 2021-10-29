const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const port = 3001;
const db = require("./db");
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
app.use("/products", require("./routes/products"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});