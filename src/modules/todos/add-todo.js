// const List = require("../lists/List");
const User = require("../users/User");
const Todo = require("./Todos");

const addTodo = async (data) => {
  const result = await Todo.create(data);

  await User.findByIdAndUpdate(data.user, { $push: { todos: result._id } });
  // await List.findByIdAndUpdate(data.list, { $push: { todos: result._id } });
  return result;
};

module.exports = addTodo;
