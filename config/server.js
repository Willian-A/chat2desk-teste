const express = require("express");
const consign = require("consign");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Inclui arquivos necessarios
consign()
    .include("./app/routes")
    .then("app/models")
    .then("app/controllers")
    .into(app);

app.get('*', function (req, res) {
    res.status(404).send("<h1>404 Page not found</h1>");
});

module.exports = app;
