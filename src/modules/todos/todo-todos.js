const Todo = require("./Todos");

const todoTodos = async ({ user, list, q, page = { limit: 2, offset: 0 } }) => {
  const filter = {};

  if (q) {
    filter.name = { $regex: new RegExp(q, "i") };
  }

  const result = await Todo.find({ user, ...filter, list, ...filter })
    .populate([
      {
        path: "user",
        select: "first_name username",
      },
    ])
    .skip(page.offset)
    .limit(page.limit);

  return { todo: result, pageInfo: { ...page } };
};

module.exports = todoTodos;
