const express = require("express");
const router = express.Router();

const names = [];
const addnameData = require("./addNameRoute");

router.get("/", (req, res) => {
  const names = addnameData.names;
  console.log(names);
  res.render("viewnames", { names: names });
});

module.exports = router;
