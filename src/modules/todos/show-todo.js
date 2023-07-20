const Todo = require("./Todos");

const showTodo = async ({ id, user, list }) => {
  const todo = await Todo.findOne({ _id: id, user: user, list: list });

  if (!todo) {
    throw new NotFoundError("Todo topilmadi.");
  }
  return todo;
};
module.exports = showTodo;
