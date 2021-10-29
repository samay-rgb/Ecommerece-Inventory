const express = require("express");
const router = express.Router();
const db = require("../db");
//const bcrypt = require("bcryptjs");
//const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "darthskywalker";
//const fetchuser = require("../middleware/fetchuser");
router.post("/createuser", (req, res) => {
  try {
    // console.log(email);
    db.query(
      `SELECT * FROM user WHERE email = ${req.body.email}`,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          // flag = 1;
          return res
            .status(400)
            .json({ error: "Sorry a user with this email already exists" });
        }
      }
    );

    // const salt = await bcrypt.genSalt(10);
    //const email = String(req.body.email);
    //   const secPas = await bcrypt.hash(req.body.password, salt);
    db.query(
      "INSERT INTO user(name,password,email,role) VALUES (?,?,?,?)",
      [req.body.name, req.body.password, req.body.email, req.body.role],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(result);
          const data = {
            id: req.body.email,
          };
          const authToken = jwt.sign(data, JWT_SECRET);
          res.json({ authToken });
        }
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
  }
});
router.post("/getuser", async (req, res) => {
  try {
    const useremail = `" ${req.user.email}"`;
    db.query(`SELECT * FROM user WHERE email = ${useremail}`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
