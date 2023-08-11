import { useContext } from "react";
import TodoContext from "../context/TodoProvider";

const useTodo = () => {
  return useContext(TodoContext);
};

export default useTodo;
