import { createContext, useContext } from "react";

// creating the context for todo with values and functions
export const TodoContext = createContext({
  todos: [{ id: 1, todo: "Todo msn", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
});

// exporting the TodoContext using useContext 
export const useTodo = () => {
  return useContext(TodoContext);
};

// setting provider method
export const Todoprovider = TodoContext.Provider;
