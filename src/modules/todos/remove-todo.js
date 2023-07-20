const { NotFoundError } = require("../../shared/errors");
const Todo = require("./Todos")

const removetodo = async ({ id, user, list }) => {
  const existing = await Todo.findOne({ _id: id, user, list });

  if (!existing) {
    throw new NotFoundError("List topilmadi.");
  }

  return Todo.findByIdAndRemove(id);
};

module.exports = removetodo;
