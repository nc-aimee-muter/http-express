const express = require("express");
const { getDogs } = require("./controllers");

const app = express();

app.get("/", getDogs);

app.listen(9090);
