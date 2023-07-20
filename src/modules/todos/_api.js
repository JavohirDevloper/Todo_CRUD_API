const express = require("express");
const isLoggedIn = require("../../shared/auth/is-loggedin");
const {
  postTodo,
  getTodos,
  getTodo,
  patchTodo,
  deleteTodo,
} = require("./_controllers");

const router = express.Router();

router.post("/todo", isLoggedIn, postTodo);
router.get("/todo", isLoggedIn, getTodos);
router.get("/todo/:id", isLoggedIn, getTodo);
router.patch("/todo/:id", isLoggedIn, patchTodo);
router.delete("/todo/:id", isLoggedIn, deleteTodo);

module.exports = router;
