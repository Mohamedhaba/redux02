import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAdd } from "../redux/actions";

const Add = () => {
  const [taskTodo, setTaskTodo] = useState("hii");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      todo: taskTodo,
      isDone: false,
    };
    dispatch(handleAdd(newItem))
    setTaskTodo('')
  };
  return (
    <div>
      <h1>Our Todo App</h1>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          value={taskTodo}
          onChange={(e) => setTaskTodo(e.target.value)}
        />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default Add;
