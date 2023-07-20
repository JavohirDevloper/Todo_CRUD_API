const express = require("express");
const db = require("./db");
const config = require("./shared/config");
const handleError = require("./shared/errors/handle");
const usersRoute = require("./modules/users/_api");
const listRoute = require("../src/modules/lists/_api");
const todoRoute = require("../src/modules/todos/_api");
const app = express();

app.use(express.json());
// errordan tog'ri fotydalashlik
app.use(handleError);
// models popkasi uchun app.use()
app.use(usersRoute);
app.use(listRoute);
app.use(todoRoute);
db();

app.listen(config.port, () => {
  console.log(`Server ${config.port}-portda ishlayapti.`);
});
