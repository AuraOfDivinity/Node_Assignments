const express = require("express");

const router = express.Router();

const namesArr = [];

router.get("/addname", (req, res) => {
  console.log("/addname route hit");
  res.render("addname");
});

router.post("/addname", (req, res) => {
  console.log(req.body);
  namesArr.push(req.body.Name);
  res.redirect("/");
});

exports.routes = router;
exports.names = namesArr;
