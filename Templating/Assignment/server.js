const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const addnameData = require("./routes/addNameRoute");
const viewnameroute = require("./routes/viewNameRoute");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(addnameData.routes);
app.use(viewnameroute);

app.listen(4000, () => {
  console.log("App listening on port 4000");
});
