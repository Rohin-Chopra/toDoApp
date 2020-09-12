import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({
  toDos,
  handleComplete,
  handleEdit,
  handleDelete,
  completed,
  className,
}) =>
  toDos.map((todo, index) => {
    const x = (
      <ToDo
        key={index}
        task={todo.task}
        handleDelete={() => handleDelete(todo.id)}
        handleEdit={(e) => handleEdit(todo.id, e.target.value)}
        handleComplete={(e) => handleComplete(todo.id, e.target.checked)}
        completed={todo.completed}
        className={className}
      />
    );
    return !completed ? (todo.completed ? null : x) : todo.completed ? x : null;
  });
export default ToDoList;
